import React, { useEffect, useState } from 'react';
import './CurvaABCDashboard.css'; // Para os estilos personalizados


function CurvaABCDashboard() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const fetchDados = async () => {
      try {
        const response = await fetch('https://api-django-4b2c63e2dc99.herokuapp.com/curva-abc/'); //'http://127.0.0.1:8000/curva-abc/');
        if (!response.ok) {
          throw new Error('Erro ao buscar dados');
        }
        const data = await response.json();
        setProdutos(data);
      } catch (error) {
        console.error('Erro:', error);
      }
    };

    fetchDados();
  }, []);

  return (
    <div>
      <h2>Curva ABC de Produtos</h2>
      <table>
        <thead>
          <tr>
            <th>Nome do Produto</th>
            <th>Valor Total</th>
            <th>Percentual Acumulado</th> {/* Adicionando a coluna para percentual acumulado */}
            <th>Classe</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.nome}>
              <td>{produto.nome}</td>
              <td>{produto.valor_total.toFixed(2)}</td>
              <td>{produto.percentual_acumulado.toFixed(2)}%</td> {/* Acessando percentual acumulado */}
              <td>{String(produto.classe)}</td>
            </tr>
          ))}
        </tbody>
      </table>
         <div className="curvaImg"><img src="curvaABC.png" alt="imgCurva"/></div>
    </div>
  );
}

export default CurvaABCDashboard;
