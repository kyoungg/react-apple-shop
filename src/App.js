import "./App.css";
import { Button, Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import data from "./data.js";
import { Routes, Route, Link } from "react-router-dom";

function priceToString(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const ProductCard = ({ products }) => {
  return products.map((item) => {
    return (
      <Col sm key={item.id} className="productCard">
        <div className="product-info">
          <img src={item.img} width="80%" />
          <div className="product-summary">
            <h4>{item.title}</h4>
            <p>{item.content}</p>
            <p>{priceToString(item.price)} ₩</p>
          </div>
        </div>
      </Col>
    );
  });
};

function App() {
  const [products, setProducts] = useState(data);
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" className="navbar">
        <Container>
          <Navbar.Brand href="#home" className="navbar-logo">
            DIP🤍RUN
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <Container>
        <Row>
          <ProductCard products={products} />
        </Row>
      </Container>
    </div>
  );
}

export default App;
