import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';
import { ShoppingIcon } from '../icons/ShoppingIcon';
import { AppContext } from '../context/AppContext';

const Header = () => {
  const { state } = React.useContext(AppContext);
  const { cart } = state;

  return (
    <div className="Header">
      <h1 className="Header-title">
        <Link to="/">PlatziConf Merch</Link>
      </h1>
      <div className="Header-checkout">
        <Link to="/checkout">
          <ShoppingIcon />
        </Link>
        {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
      </div>
    </div>
  );
};

export { Header };
