
import React from 'react';
import { Link } from 'react-router-dom';

function Header({ cartCount }) {
  return (
    <header>
      <h1>Zakaria E-commerce</h1>
      <nav>
        <Link to="/">Produits</Link> | <Link to="/cart">Panier ({cartCount})</Link>
      </nav>
    </header>
  );
}

export default Header;
