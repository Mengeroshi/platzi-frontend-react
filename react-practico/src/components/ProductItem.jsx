import React from 'react';
import '../styles/ProductItem.css';
import { AppContext } from '../context/AppContext';

import addToCartIcon from '@icons/bt_add_to_cart.svg'

const ProductItem = ({product}) => {

	const {addToCart} = React.useContext(AppContext);

	const handleClick = item => {
		addToCart(item);
	}

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<img src={addToCartIcon} alt="" />
				</figure>
			</div>
		</div>
	);
}

export  {ProductItem};