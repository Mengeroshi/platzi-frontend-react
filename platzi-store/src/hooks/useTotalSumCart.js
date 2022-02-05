import React from 'react';
import { AppContext } from '../context/AppContext';

const useTotalCartSum = () => {
  const { state } = React.useContext(AppContext);
  const { cart } = state;

  const reducer = (acumulator, currentValue) => acumulator + currentValue.price;
  const sum = cart.reduce(reducer, 0);
  return sum;
};

export { useTotalCartSum };
