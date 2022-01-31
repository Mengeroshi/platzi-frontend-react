import React from 'react';
import '../styles/OrderItem.css';
import iconClose from '@icons/icon_close.png'
import {AppContext} from '../context/AppContext';


const OrderItem = ({product}) => {
	const {removeFromCart} = React.useContext(AppContext);
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt="bike" />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img src={iconClose} alt="close" 
				onClick={() => removeFromCart(product)} />
		</div>
	);
}

export {OrderItem};