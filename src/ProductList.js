import React from 'react';
import Product from './Product';
import pc from './pc (1).png';
import Clavier from './clavier.png';


const products = [
  { id: 1, name: "Pc Gamer i7 11th Gen - GTX1650", price: 6000, image:pc, description: "PC Gamer i5 11th Gen - GTX1650 : Puissance e performance pour le gaming avec processeur Intel i5 11ème génération et carte graphique GTX1650." },
  { id: 2, name: "Clavier Gamer RAZER", price: 300, image:Clavier, description: "Clavier Gamer Razer : touches RGB, réactivité optimale et design robuste pour les gamers." },
];

function ProductList({ addToCart }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ProductList;
