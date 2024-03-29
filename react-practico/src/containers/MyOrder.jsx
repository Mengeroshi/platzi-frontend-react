import React from 'react';
import {OrderItem} from '../components/OrderItem';
import { AppContext } from '../context/AppContext';
import '../styles/MyOrder.css';

import arrow from '@icons/flechita.svg';

const MyOrder = () => {
	const {state} = React.useContext(AppContext)

	const sumTotal = () =>{
		const reducer = (acumulator, currentValue) => 
			acumulator + currentValue.price;

		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={arrow} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map(product =>{
					return(<OrderItem 
						product={product}
						key={`orderItem-${product.id}`}
					/>)
				})}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export {MyOrder};