import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <h1> Hardware Shop</h1>
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/new"> Crear Cliente </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
