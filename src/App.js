import "./App.css";
import { Button, Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import data from "./data.js";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./page/Home";
import Detail from "./page/Detail";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" className="navbar">
        <Container>
          <Navbar.Brand className="navbar-logo">
            <Link to="/">DIP🤍RUN</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/detail">Detail</Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
