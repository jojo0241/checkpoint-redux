import React from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addProduct } from './features/products/productSlice';

const Home = () => {

  const dispatch = useDispatch()

  const [form, setForm] = useState({
    libelle: "",
    description: "",
    image: "",
    id: ""
  })

  function handleSubmit(e){
    e.preventDefault();
    if(form && form.libelle && form.image && form.description){
      dispatch(addProduct({...form, id: Date.now()}))
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
          <Form.Control value={form.libelle} onChange={(e)=>setForm({...form, libelle: e.target.value})} type="text" placeholder="nom du produit..." />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control onChange={(e)=>setForm({...form, description: e.target.value})} value={form.description} as="textarea" rows={3} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Image</Form.Label>
          <Form.Control onChange={(e)=>setForm({...form, image: e.target.value})} value={form.image} type="text" placeholder="image du produit..." />
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit}>Enregistrer</Button>{' '}
      </Form> 
    </Container>
  );
}

export default Home;
