import React from 'react';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux'

const Products = () => {

	const products = useSelector((state) => state.products.products)
	//const products = [1, 2, 3, 4, 5, 6];

	console.log(products)

	return (
		<div style={{display:"flex", flexWrap: 'wrap'}}>
			{products && products.length >0 && products.map((product, key) => (
				<div key={key} style={{width:"30%", marginTop: '12px'}}>
					<ProductCard product={product} />
				</div>
			))}
		</div>
	);
}

export default Products;
