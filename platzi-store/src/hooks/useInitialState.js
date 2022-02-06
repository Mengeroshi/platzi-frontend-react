import React from 'react';
import initialState from '../initialState';

const API = 'http://localhost:3006/api/productss?populate=%2A';

const useInitialState = () => {
  const [state, setState] = React.useState(initialState);
  const [products, setProducts] = React.useState([]);

  React.useEffect(()=>{

    const fun = async () =>{
      const response = await fetch(API);
      const data = await response.json();
      const obo = await data.data;
      setProducts(obo);
      console.log(obo)
    }
    fun();
  }, [])

  const addToCart = (payload) => {
    setState({
      ...state,
      buyer: [],
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((item, i) => i !== payload),
    });
  };

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };
  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  };

  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    state,
    products
  };
};

export { useInitialState };
