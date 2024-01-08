import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { ModifyProducts, addProduct } from './features/products/productSlice';
import { useSelector } from 'react-redux';
import Products from './Products';
import { deleteProduct, editProduct } from './features/products/productSlice';
import {useNavigate} from 'react-router';


const Modify = ({product={}}) => {

  

  const dispatch = useDispatch()
  dispatch(editProduct(product))
  

  const [form, setForm] = useState({

    libelle: "",
    description: "",
    image: "",
    
  })

  function handleSubmit(e){
    e.preventDefault();
    if(form && form.libelle && form.image && form.description){
      dispatch(ModifyProducts({...form, id: Date.now()}))
    }
    setForm({
      libelle: "",
      description: "",
      image: ""
    })
    console.log(form)
  }
  

  return (
    
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Libelle</Form.Label>
          <Form.Control placeholder = {product?.libelle} onChange={(e)=>setForm({...form, libelle: e.target.value})} type="text"  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control placeholder={product?.description} onChange={(e)=>setForm({...form, description: e.target.value})}  as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Image</Form.Label>
          <Form.Control placeholder = {product?.image} onChange={(e)=>setForm({...form, image: e.target.value})}  type="text"  />
        </Form.Group>
        <Button variant="dark" onClick={handleSubmit}>Modifier</Button>{' '}
      </Form> 
      
    </Container>
    
  );
}

export default Modify;
