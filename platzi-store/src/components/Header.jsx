import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/components/Header.css';
import { ShoppingIcon } from '../icons/ShoppingIcon';
const Header = () => {
  return (
    <div className="Header">
      <h1 className="Header-title"><Link to="/">PlatziConf Merch</Link></h1>
      {/* <div className="Header-checkout">Checkout</div> */}
      <Link to="/checkout"><ShoppingIcon/></Link>
    </div>
  );
};

export { Header };
