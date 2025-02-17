import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './Dashboard.css'; // Para os estilos personalizados

// Registrar os componentes do Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Dashboard() {
  const [produtosPorCategoria, setProdutosPorCategoria] = useState({});
  const [saidasCount, setSaidasCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        // Fetch Produtos
        const produtosResponse = await fetch('https://api-django-4b2c63e2dc99.herokuapp.com/produte/'); // 'http://127.0.0.1:8000/produte/'
        if (produtosResponse.ok) {
          const produtosData = await produtosResponse.json();

          // Agrupar produtos por categoria
          const produtosAgrupados = produtosData.reduce((acc, produto) => {
            const categoria = produto.categoria;
            if (!acc[categoria]) {
              acc[categoria] = [];
            }
            acc[categoria].push(produto);
            return acc;
          }, {});

          setProdutosPorCategoria(produtosAgrupados);
        } else {
          console.error('Erro ao buscar dados de produtos');
        }

        // Fetch Saídas
        const saidasResponse = await fetch('https://api-django-4b2c63e2dc99.herokuapp.com/saidas/'); // 'http://127.0.0.1:8000/saidas/'
        if (saidasResponse.ok) {
          const saidasData = await saidasResponse.json();
          setSaidasCount(saidasData.length);
        } else {
          console.error('Erro ao buscar dados de saídas');
        }
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchCounts();
  }, []);

  // Preparar dados para o gráfico
  const categorias = Object.keys(produtosPorCategoria);
  const quantidades = categorias.map(categoria => 
    produtosPorCategoria[categoria].reduce((total, produto) => total + produto.quantidade, 0)
  );

  const data = {
    labels: categorias,
    datasets: [
      {
        label: 'Quantidade de Produtos',
        data: quantidades,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Quantidade de Produtos por Categoria',
      },
    },
  };

  return (
    <div>
      <h2>Dashboard</h2>

      {/* Exibir gráfico de barras */}
      <div className="chart-container" style={{ width: '80%', margin: '0 auto' }}>
        <Bar data={data} options={options} />
      </div>

      {/* Outras seções do Dashboard */}
      <div className="dashboard-cards">
        <div className="card">
          <h3>Total de Saídas</h3>
          <p>{saidasCount}</p>
          <Link to="/saidas">Ver Saídas</Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
