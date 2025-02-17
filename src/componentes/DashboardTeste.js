import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function DashboardTeste() {
  const [dadosProdutos, setDadosProdutos] = useState([]);
  const [dadosSaidas, setDadosSaidas] = useState([]);

  useEffect(() => {
    const fetchDadosProdutos = async () => {
      try {
        const response = await fetch('https://api-django-4b2c63e2dc99.herokuapp.com/produte/'); // URL da API de produtos
        if (!response.ok) {
          throw new Error('Erro ao buscar dados de produtos');
        }
        const data = await response.json();
        const processedData = data.map(produto => ({
          nome: produto.nome,
          quantidade: produto.quantidade,
        }));
        setDadosProdutos(processedData);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchDadosSaidas = async () => {
      try {
        const response = await fetch('https://api-django-4b2c63e2dc99.herokuapp.com/saidas/'); // URL da API de saídas
        if (!response.ok) {
          throw new Error('Erro ao buscar dados de saídas');
        }
        const data = await response.json();
        const processedData = data.map(saida => {
          const total = saida.itens.reduce((acc, item) => acc + parseFloat(item.preco_total || 0), 0);
          return {
            data: new Date(saida.data_saida).toLocaleDateString(),
            total,
          };
        });
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
      <h1>DashboardTeste de Produtos</h1>
      {dadosProdutos.length > 0 ? (
        <BarChart
          width={600}
          height={300}
          data={dadosProdutos}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
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

      <h1>DashboardTeste de Saídas</h1>
      {dadosSaidas.length > 0 ? (
        <BarChart
          width={600}
          height={300}
          data={dadosSaidas}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
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

      {/* Aqui você pode adicionar seu código para exibir a tabela */}
      <h2>Tabela de Produtos</h2>
      {/* Renderize a tabela de produtos aqui */}
      <table>
        <thead>
          <tr>
            <th>Nome do Produto</th>
            <th>Quantidade</th>
          </tr>
        </thead>
        <tbody>
          {dadosProdutos.map((produto, index) => (
            <tr key={index}>
              <td>{produto.nome}</td>
              <td>{produto.quantidade}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Tabela de Saídas</h2>
      {/* Renderize a tabela de saídas aqui */}
      <table>
        <thead>
          <tr>
            <th>Data da Saída</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {dadosSaidas.map((saida, index) => (
            <tr key={index}>
              <td>{saida.data}</td>
              <td>{saida.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DashboardTeste;
