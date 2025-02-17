import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/portal">Portal do Aluno</Link></li>
        <li><Link to="/produtos">Produtos</Link></li>
        <li><Link to="/saidas">Saídas</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
