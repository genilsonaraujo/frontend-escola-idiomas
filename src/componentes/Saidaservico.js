import axios from 'axios';

const API_URL = 'https://api-django-4b2c63e2dc99.herokuapp.com/saidas/';

export const buscarSaidas = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar saídas:', error.response ? error.response.data : error.message);
    throw new Error('Erro ao buscar saídas');
  }
};

export const adicionarSaida = async (saida) => {
  try {
    const response = await axios.post(API_URL, saida);
    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar saída:', error.response ? error.response.data : error.message);
    throw new Error('Erro ao adicionar saída');
  }
};

export const editarSaida = async (id, saidaAtualizada) => {
  try {
    const response = await axios.put(`${API_URL}${id}/`, saidaAtualizada);
    return response.data;
  } catch (error) {
    console.error('Erro ao editar saída:', error.response ? error.response.data : error.message);
    throw new Error('Erro ao editar saída');
  }
};
