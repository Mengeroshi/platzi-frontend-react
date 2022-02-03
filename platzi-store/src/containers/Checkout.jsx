import React from 'react';
import '../styles/components/Checkout.css';
import { Link } from 'react-router-dom';
import { TrashIcon } from '../icons/TrashIcon';

const Checkout = () => {
  return (
    <div className="Checkout">
      <div className="Checkout-content">
        <h3>Lista de pedidos:</h3>
        <div className="Checkout-item">
          <div className="Checkout-element">
            <h4>ITEM name</h4>
            <span>$10</span>
          </div>
          <button type="button"><TrashIcon/></button>
        </div>
      </div>
      <div className="Checkout-sidebar">
        <h3>Precio total $10</h3>
        <Link to="/checkout/information">
          <button>Continuar pedido</button>
        </Link>
      </div>
    </div>
  );
};

export { Checkout };
