import "./App.css";
import { Button, Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import data from "./data.js";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Home from "./page/Home";
import Detail from "./page/Detail";
import Error from "./page/Error";

function App() {
  const [products] = useState(data);
  let navigate = useNavigate();
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark" className="navbar">
        <Container>
          <Navbar.Brand className="navbar-logo">
            <Link to="/">DIP🤍RUN</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="detail">Detail</Link>
            <Link to="/event">Event</Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home products={products} />}></Route>
        <Route
          path="/detail/:id"
          element={<Detail products={products} />}
        ></Route>
        <Route path="*" element={<Error />}></Route>
        <Route
          path="/event"
          element={
            <>
              <h1>오늘의 이벤트🎁</h1>
              <Button
                variant="outline-success"
                onClick={() => {
                  navigate("/event/one");
                }}
              >
                one
              </Button>
              {"  "}
              <Button
                variant="outline-danger"
                onClick={() => {
                  navigate("/event/two");
                }}
              >
                two
              </Button>
              <Outlet></Outlet>
            </>
          }
        >
          <Route path="one" element={<h2>양배추즙 받기🥬</h2>}></Route>
          <Route path="two" element={<h2>생일쿠폰 받기🎂</h2>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
