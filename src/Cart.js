import React from 'react';

function Cart({ cart }) {
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h1>Panier</h1>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <div>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h3> - {item.name}</h3>
              <p>Prix : <b>{item.price}€</b></p>
              <p>Quantité : <b>{item.quantity}</b></p>
            </div>
          ))}
          <h3 id='tt'>Total : {totalPrice}Dh</h3>
        </div>
      )}
    </div>
  );
}

export default Cart;
