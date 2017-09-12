import React, { PropTypes } from 'react';
import Product from './Product';
import { Link } from 'react-router';

const ProductList = ({
	loading,
	products,
	onAddItem
}) => (
	<section className="container">
		{loading && <span>Cargando Datos ...</span>}
		<div className="row">
		{
			products.map(product => (
				<Product
					key={product._id}
					onAddItem={onAddItem}
					{...product}
				/>
			))
		}
		</div>
	</section>
);

ProductList.PropTypes = {
	products: PropTypes.arrayOf(PropTypes.object).isRequired,
	loading: PropTypes.bool.isRequired,
	onAddItem: PropTypes.func.isRequired
}

export default ProductList;