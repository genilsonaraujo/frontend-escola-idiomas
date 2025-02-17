import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductList() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        // Requisição para a API Django
        axios.get('http://127.0.0.1:8000/api/produto/produtos/')
            .then(response => {
                setProdutos(response.data);
            })
            .catch(error => {
                console.log('Erro ao carregar os produtos:', error);
            });
    }, []);

    return (
        <div>
            <h1>Lista de Produtos</h1>
            <ul>
                {produtos.map(produto => (
                    <li key={produto.id}>
                        {produto.nome} - {produto.preco}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
