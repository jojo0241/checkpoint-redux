import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate} from 'react-router';
import { useDispatch } from 'react-redux'
import { deleteProduct, editProduct } from './features/products/productSlice';
import { Container } from 'react-bootstrap';
import Home from './Modify';
import Modify from './Modify';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ProductCard = ({product={}}) => {
	const navigate = useNavigate();
	const dispatch = useDispatch()

	function detail(product){
		dispatch(editProduct(product))
		navigate(`/products/${product?.id}`)
		
	}
	function del(product){


		dispatch(deleteProduct(product))

	}
	function modify(product){


		dispatch(editProduct(product))
		
		

	}
	

	return (
		<Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={product?.image} />
      <Card.Body>
        <Card.Title>{product?.title}</Card.Title>
        <Card.Text>
				{product?.description}
        </Card.Text>
        
		
		<Button variant="primary" onClick={()=>detail(product)}>Modifier</Button>&nbsp;&nbsp;&nbsp;
		
		
		<Button variant="danger" onClick={()=>del(product)}>Supprimer</Button>&nbsp;&nbsp;&nbsp;

		
      </Card.Body>
    </Card>
	);
}

export default ProductCard;
