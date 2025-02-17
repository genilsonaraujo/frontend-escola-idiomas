import React, { useState, useEffect } from 'react';
import './ListaSaida.css'; // Importe um arquivo CSS para estilização

function ListaSaida() {
  const [saidas, setSaidas] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduto, setSelectedProduto] = useState('');
  const [quantidade, setQuantidade] = useState(1);
  const [itens, setItens] = useState([]);
  const [observacao, setObservacao] = useState('');
  const [sucesso, setSucesso] = useState(false);

  // Função para buscar saídas
  const fetchSaidas = async () => {
    try {
      const response = await fetch('https://api-django-4b2c63e2dc99.herokuapp.com/saidas/');
      if (!response.ok) {
        throw new Error('Erro ao buscar saídas');
      }
      const data = await response.json();
      setSaidas(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Função para buscar produtos
  const fetchProdutos = async () => {
    try {
      const response = await fetch('https://api-django-4b2c63e2dc99.herokuapp.com/produte/');
      if (!response.ok) {
        throw new Error('Erro ao buscar produtos');
      }
      const data = await response.json();
      setProdutos(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchSaidas();
    fetchProdutos();
  }, []);

  const handleAddItem = () => {
    if (selectedProduto) {
      const produtoSelecionado = produtos.find(produto => produto.id === parseInt(selectedProduto));
      if (produtoSelecionado) {
        const novoItem = {
          produto: produtoSelecionado.id,
          quantidade: parseInt(quantidade),
          preco_total: (produtoSelecionado.preco * quantidade).toFixed(2),
        };
        setItens(prevItens => [...prevItens, novoItem]);
        setSelectedProduto('');
        setQuantidade(1);
      }
    }
  };

  const handleRemoveItem = (index) => {
    setItens(prevItens => prevItens.filter((_, i) => i !== index));
  };

  const handleRemoveSaida = async (id) => {
    try {
      const response = await fetch(`https://api-django-4b2c63e2dc99.herokuapp.com/saidas/${id}/`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Erro ao remover saída');
      }

      setSaidas(prevSaidas => prevSaidas.filter(saida => saida.id !== id));
    } catch (error) {
      setError(error.message);
    }
  };

  const handleAddSaida = async () => {
    const newSaida = {
      itens: itens,
      observacao: observacao,
    };

    try {
      const response = await fetch('https://api-django-4b2c63e2dc99.herokuapp.com/saidas/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newSaida),
      });

      if (!response.ok) {
        throw new Error('Erro ao adicionar saída');
      }

      const updatedSaida = await response.json();
      setSaidas(prevSaidas => [...prevSaidas, updatedSaida]);
      setItens([]);
      setObservacao('');

      // Atualiza a quantidade dos produtos no backend
      for (const item of itens) {
        const produtoId = item.produto;
        const quantidadeUsada = item.quantidade;
        
        // Faz a requisição PATCH para atualizar o estoque
        await fetch(`https://api-django-4b2c63e2dc99.herokuapp.com/produte/${produtoId}/`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ estoque: -quantidadeUsada }), // Certifique-se de que o campo correto é usado
        });
      }
      
      // Atualiza a lista de produtos
      await fetchProdutos();

      setSucesso(true);
      setTimeout(() => setSucesso(false), 2000); // Exibir mensagem de sucesso por 2 segundos
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <div className="lista-saida-container">
      <h2>Lista de Saídas</h2>
      {sucesso && <p className="success-message">Saída adicionada com sucesso!</p>}
      {saidas.length > 0 ? (
        <ul className="saida-list">
          {saidas.map(saida => (
            <li key={saida.id} className="saida-item">
              <div className="saida-details">
                {saida.itens.map(item => (
                  <div key={item.id} className="item-details">
                    <strong>Produto:</strong> {item.produto_nome}, 
                    <strong> Quantidade:</strong> {item.quantidade}, 
                    <strong> Preço Total:</strong> R$ {item.preco_total}
                  </div>
                ))}
                <strong>Observação:</strong> {saida.observacao}
              </div>
              <button className="remove-button" onClick={() => handleRemoveSaida(saida.id)}>Remover Saída</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Ainda não há saídas registradas.</p>
      )}

      <h2>Adicionar Saída</h2>
      <div className="add-saida-form">
        <select value={selectedProduto} onChange={e => setSelectedProduto(e.target.value)}>
          <option value="">Selecione um produto</option>
          {produtos.map(produto => (
            <option key={produto.id} value={produto.id}>
              {produto.nome}
            </option>
          ))}
        </select>

        <input
          type="number"
          value={quantidade}
          onChange={e => setQuantidade(e.target.value)}
          min="1"
          className="quantidade-input"
        />

        <button className="add-item-button" onClick={handleAddItem}>Adicionar Item</button>
      </div>

      <h3>Itens para Saída</h3>
      <ul className="itens-list">
        {itens.map((item, index) => (
          <li key={index} className="item-list-item">
            Produto: {item.produto}, Quantidade: {item.quantidade}, Preço Total: R$ {item.preco_total}
            <button className="remove-item-button" onClick={() => handleRemoveItem(index)}>Remover</button>
          </li>
        ))}
      </ul>

      <textarea
        value={observacao}
        onChange={e => setObservacao(e.target.value)}
        placeholder="Digite uma observação"
        className="observacao-textarea"
      />

      <button className="finalizar-saida-button" onClick={handleAddSaida} disabled={itens.length === 0}>Finalizar Saída</button>
    </div>
  );
}

export default ListaSaida;



