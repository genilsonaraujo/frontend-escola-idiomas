import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function Dashboard() {
  const [dadosProdutos, setDadosProdutos] = useState([]);
  const [dadosSaidas, setDadosSaidas] = useState([]);

  useEffect(() => {
    // Função para buscar dados de produtos
    const fetchDadosProdutos = async () => {
      try {
        const response = await fetch('https://api-django-4b2c63e2dc99.herokuapp.com/produte/'); // URL da API de produtos
        if (!response.ok) {
          throw new Error('Erro ao buscar dados de produtos');
        }
        const data = await response.json();

        // Processando os dados para o gráfico
        const processedData = data.map(produto => {
          return {
            nome: produto.nome, // Nome do produto
            quantidade: produto.quantidade, // Quantidade do produto
          };
        });

        setDadosProdutos(processedData);
      } catch (error) {
        console.error(error);
      }
    };

    // Função para buscar dados de saídas
    const fetchDadosSaidas = async () => {
      try {
        const response = await fetch('https://api-django-4b2c63e2dc99.herokuapp.com/saidas/'); // URL da API de saídas
        if (!response.ok) {
          throw new Error('Erro ao buscar dados de saídas');
        }
        const data = await response.json();

        // Processando os dados para o gráfico
        const processedData = data.map(saida => {
          const total = saida.itens.reduce((acc, item) => acc + parseFloat(item.preco_total || 0), 0);
          return {
            data: new Date(saida.data_saida).toLocaleDateString(), // Data da saída
            total,
          };
        });

        // Agrupando por data para somar os totais
        const groupedData = processedData.reduce((acc, curr) => {
          const existing = acc.find(item => item.data === curr.data);
          if (existing) {
            existing.total += curr.total;
          } else {
            acc.push({ ...curr });
          }
          return acc;
        }, []);

        setDadosSaidas(groupedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDadosProdutos();
    fetchDadosSaidas();
  }, []);

  return (
    <div>
      <h1>Dashboard de Produtos</h1>
      {dadosProdutos.length > 0 ? (
        <BarChart
          width={600}
          height={300}
          data={dadosProdutos}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="nome" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="quantidade" fill="#8884d8" />
        </BarChart>
      ) : (
        <p>Ainda não há produtos registrados.</p>
      )}

      <h1>Dashboard de Saídas</h1>
      {dadosSaidas.length > 0 ? (
        <BarChart
          width={600}
          height={300}
          data={dadosSaidas}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="data" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill="#82ca9d" />
        </BarChart>
      ) : (
        <p>Ainda não há saídas registradas.</p>
      )}
    </div>
  );
}

export default Dashboard;

