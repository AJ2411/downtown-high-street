"use client"
import axios from "axios";
import { Card, CardGroup } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "bootstrap-icons/font/bootstrap-icons.min.css"
import "./productlist.css"

import { useEffect,useState } from "react";
export default function Page() {
    const [product,setProduct]=useState([]);
    const getAPI = async () => {
      axios
      .get ("https://dummyjson.com/products")
      .then((response)=> {
        console.log("response",response.data.products);
        setProduct(response.data.products);
      });
    };
   
    useEffect(() => {
       getAPI();
    },[]);
    console.log("product",product);

    const handleButtonAction = (e) => {
        e.preventDefault();
        console.log('The link was clicked.');
      }

    return (
      <div>
       {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
       <Row>
        <h1 class="text-center">PRODUCT LIST</h1>
         {product?.map((item) => (
          <Col xs={6} md={4}>
         <Card>
        <Card.Img variant="top" src={item.thumbnail} className="card-img-top card-image" alt="hey image" />
        <Card.Body>
          <Card.Title>{item.id}</Card.Title>
          <Card.Text>{item.title} </Card.Text>
          <Card.Text>{item.description} </Card.Text>
          <Card.Text>{item.price} </Card.Text>
          <Card.Text>{item.brand} </Card.Text>
          <Card.Text>{item.category} </Card.Text>
          <Card.Text>{item.rating} </Card.Text>
          <Card.Title>{item.stock}</Card.Title>
         </Card.Body>
          <Card.Footer>
          <Button><i class="bi bi-cart-plus"></i></Button>{'  '}
          <Button onClick={handleButtonAction}><i class="bi bi-cart-dash"></i></Button><br/>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      </Col>
         ))}
    
        
      </Row>
     
    </div>

 );
 }
