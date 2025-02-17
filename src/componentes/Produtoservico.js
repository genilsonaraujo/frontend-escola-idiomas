// services/produtoService.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/produto/produtos/'//'https://api-django-4b2c63e2dc99.herokuapp.com/produte/'; //'http://127.0.0.1:8000/produte/';

export const buscarProdutos = async () => {
  return await axios.get(API_URL);
};

export const adicionarProduto = async (produto) => {
  return await axios.post(API_URL, produto);
};

export const editarProduto = async (id, produtoAtualizado) => {
  return await axios.put(`${API_URL}${id}/`, produtoAtualizado);
};
