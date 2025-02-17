
# frontend-escola-idiomas



## Sobre o Projeto

Este projeto é uma plataforma completa para gerenciamento e oferta de cursos em diferentes áreas de ensino. Inicialmente, a página foi desenvolvida utilizando HTML e CSS, mas o objetivo é implementar funcionalidades avançadas, como e-commerce, perfis de usuários e integração com plataformas de ensino online.

### Cursos Disponíveis

- Inglês
- Espanhol
- Arduino
- Informática

#Design do Projeto
 ![Pagina Index](media/img/pagina_grande.jpg)


## Funcionalidades

### Front-end

- **HTML e CSS**: Interface moderna e responsiva para apresentar os cursos e funcionalidades.
- **Funcionalidades planejadas**:
  - Sistema de pedidos e carrinho de compras para aquisição de cursos.
  - Página de perfil para alunos e professores.

### Back-end

- **Django**: Framework web para desenvolvimento do servidor e lógica de negócios.
- **PostgreSQL**: Banco de dados relacional para armazenamento seguro e eficiente de informações de cursos, alunos e professores.

### Integrações Planejadas

- **Plataformas de Ensino**:
  - Chamilo ou Hotmart para gerenciamento de conteúdo educacional e oferta de cursos online.

## Tecnologias Utilizadas

- **Frontend**: HTML, CSS
- **Backend**: Django (Python)
- **Banco de Dados**: PostgreSQL
- **Plataformas Externas**: Chamilo ou Hotmart (a definir)

## Como Contribuir

1. Faça um fork deste repositório.
2. Crie um branch para a sua feature: `git checkout -b feature/nova-feature`.
3. Faça commit das suas alterações: `git commit -m 'Adicionei uma nova feature'`.
4. Envie o seu branch: `git push origin feature/nova-feature`.
5. Abra um Pull Request.

## Como Executar o Projeto Localmente

### Pré-requisitos

- Python 3.9+
- Django
- PostgreSQL

### Passos

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/language_institute.git
   ```
2. Acesse o diretório do projeto:
   ```bash
   cd language_institute
   ```
3. Instale as dependências:
   ```bash
   pip install -r requirements.txt
   ```
4. Configure o banco de dados no arquivo `settings.py`.
5. Execute as migrações:
   ```bash
   python manage.py migrate
   ```
6. Inicie o servidor de desenvolvimento:
   ```bash
   python manage.py runserver
   ```
7. Abra o navegador e acesse `http://127.0.0.1:8000`.

## Licença
