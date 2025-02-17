import React, { useState, useEffect } from 'react';
import './ProductList.css';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [novoProduto, setNovoProduto] = useState({
    nome: '',
    categoria: '',
    modelo: '',
    marca: '',
    codigo: '',
    estoque: '',
    sku: '',
    preco: '',
    quantidade: '',
    imagem: '',
  });
  const [editando, setEditando] = useState(false);
  const [produtoIdParaEditar, setProdutoIdParaEditar] = useState(null);

  useEffect(() => {
    const fetchProductsAndClasses = async () => {
      try {
        const produtosResponse = await fetch('https://api-django-4b2c63e2dc99.herokuapp.com/produte/');
        const curvaABCResponse = await fetch('https://api-django-4b2c63e2dc99.herokuapp.com/curva-abc/');

        if (!produtosResponse.ok || !curvaABCResponse.ok) {
          throw new Error('Falha ao buscar produtos ou classes.');
        }

        const produtosData = await produtosResponse.json();
        const curvaABCData = await curvaABCResponse.json();

        const produtosComClasse = produtosData.map((produto) => {
          const curvaABCInfo = curvaABCData.find((item) => item.nome === produto.nome);
          return {
            ...produto,
            classe: curvaABCInfo ? curvaABCInfo.classe : 'N/A', // Adiciona a classe a partir da API
          };
        });

        setProducts(produtosComClasse);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchProductsAndClasses();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNovoProduto({ ...novoProduto, [name]: value });
  };

  const handleFileChange = (e) => {
    setNovoProduto({ ...novoProduto, imagem: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('nome', novoProduto.nome);
    formData.append('categoria', novoProduto.categoria);
    formData.append('modelo', novoProduto.modelo);
    formData.append('marca', novoProduto.marca);
    formData.append('codigo', novoProduto.codigo);
    formData.append('estoque', novoProduto.estoque);
    formData.append('sku', novoProduto.sku);
    formData.append('preco', novoProduto.preco);
    formData.append('quantidade', novoProduto.quantidade);
    if (novoProduto.imagem) {
      formData.append('imagem', novoProduto.imagem);
    }

    const method = editando ? 'PUT' : 'POST';
    const url = editando 
      ? `https://api-django-4b2c63e2dc99.herokuapp.com/produte/${produtoIdParaEditar}/`
      : 'https://api-django-4b2c63e2dc99.herokuapp.com/produte/';

    fetch(url, {
      method: method,
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      if (editando) {
        setProducts(products.map(produto => produto.id === produtoIdParaEditar ? data : produto));
      } else {
        setProducts([...products, data]);
      }

      setNovoProduto({
        nome: '',
        categoria: '',
        modelo: '',
        marca: '',
        codigo: '',
        estoque: '',
        sku: '',
        preco: '',
        quantidade: '',
        imagem: '',
      });
      setEditando(false);
      setProdutoIdParaEditar(null);
    })
    .catch(error => console.error('Erro ao adicionar/editar produto:', error));
  };

  const removerProduto = (id) => {
    fetch(`https://api-django-4b2c63e2dc99.herokuapp.com/produte/${id}/`, { method: 'DELETE' })
    .then(() => {
      setProducts(products.filter(produto => produto.id !== id));
    })
    .catch(error => console.error('Erro ao remover produto:', error));
  };

  const iniciarEdicao = (produto) => {
    setNovoProduto(produto);
    setProdutoIdParaEditar(produto.id);
    setEditando(true);
  };

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
      <div className="product-container" style={{overflowX:'auto'}}>
       <div className="estoque"><img src="estoque2.jpg" alt="img"/></div>
      <h1>Lista de Produtos</h1>
      <form onSubmit={handleSubmit}>
        <h2>{editando ? 'Editar Produto' : 'Adicionar Novo Produto'}</h2>
        <input type="text" name="nome" placeholder="Nome" value={novoProduto.nome} onChange={handleInputChange} required />
        <input type="text" name="categoria" placeholder="Categoria" value={novoProduto.categoria} onChange={handleInputChange} required />
        <input type="text" name="modelo" placeholder="Modelo" value={novoProduto.modelo} onChange={handleInputChange} required />
        <input type="text" name="marca" placeholder="Marca" value={novoProduto.marca} onChange={handleInputChange} required />
        <input type="text" name="codigo" placeholder="Código" value={novoProduto.codigo} onChange={handleInputChange} required />
        <input type="number" name="estoque" placeholder="Estoque Existente" value={novoProduto.estoque} onChange={handleInputChange} required />
        <input type="text" name="sku" placeholder="SKU" value={novoProduto.sku} onChange={handleInputChange} required />
        <input type="number" name="preco" placeholder="Preço" value={novoProduto.preco} onChange={handleInputChange} required />
        <input type="number" name="quantidade" placeholder="Quantidade" value={novoProduto.quantidade} onChange={handleInputChange} required />
        <input type="file" name="imagem" onChange={handleFileChange} />
        <button type="submit">{editando ? 'Salvar Alterações' : 'Adicionar Produto'}</button>
      </form>

      <table className="product-table">
        <thead>
          <tr>
            <th>Imagem</th>
            <th>Categoria</th>
            <th>Nome</th>
            <th>Modelo</th>
            <th>Marca</th>
            <th>Código</th>
            <th>Estoque</th>
            <th>SKU</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Classe</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td><img src={product.imagem} alt={product.nome} style={{ width: '50px', height: '50px' }} /></td>
              <td>{product.categoria}</td>
              <td>{product.nome}</td>
              <td>{product.modelo}</td>
              <td>{product.marca}</td>
              <td>{product.codigo}</td>
              <td>{product.estoque}</td>
              <td>{product.sku}</td>
              <td>{product.preco}</td>
              <td>{product.quantidade}</td>
              <td>{product.classe}</td>
              <td>
                <button onClick={() => iniciarEdicao(product)}>Editar</button>
                <button onClick={() => removerProduto(product.id)}>Remover</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductList;

