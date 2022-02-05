import React from 'react';
import '../styles/components/Checkout.css';
import { Link } from 'react-router-dom';
import { TrashIcon } from '../icons/TrashIcon';
import { AppContext } from '../context/AppContext';
import {Helmet} from  'react-helmet';

const Checkout = () => {
  const { state, removeFromCart } = React.useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  const handleSumTotal = () => {
    const reducer = (acumulator, currentValue) =>
      acumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <>
      <Helmet>
        <title>Lista de Pedidos</title>
      </Helmet>
      <div className="Checkout">
      <div className="Checkout-content">
        <h3>
          {cart.length <= 0 ? 'No hay nada papulardo' : 'Lista de Pedidos'}
        </h3>

        {cart.length <= 0 ? (
          <h1>No hay nada</h1>
        ) : (
          cart.map((product, i) => {
            return (
              <div key={product.id + i} className="Checkout-item">
                <div className="Checkout-element">
                  <h4>{product.title}</h4>
                  <span>${product.price}</span>
                </div>
                <button onClick={() => handleRemove(i)} type="button">
                  <TrashIcon />
                </button>
              </div>
            );
          })
        )}
      </div>
      <div className="Checkout-sidebar">
        <h3>Precio total ${handleSumTotal()}</h3>
        <Link to="/checkout/information">
          <button>Continuar pedido</button>
        </Link>
      </div>
    </div>
    </>
  );
};

export { Checkout };
