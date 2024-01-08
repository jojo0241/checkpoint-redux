import React from 'react';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux'
import Modify from './Modify';
import { Link, Route, Routes } from 'react-router-dom';

const ProductItem = () => {

    const product = useSelector((state) => state.products.product)

    return (
        <div>
            
            <Modify product={product} />
             
            
        </div>
    );
}

export default ProductItem;
