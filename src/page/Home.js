import { Container, Row, Col } from "react-bootstrap";
import { priceToString } from "../common/functions.js";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductCard = ({ items }) => {
  const navigate = useNavigate();
  return items.map((item) => {
    return (
      <Col md="auto" key={item.id} className="productCard">
        <div
          className="product-info"
          onClick={() => {
            navigate(`/detail/${item.id}`);
          }}
        >
          <img src={item.img} width="80%" />
          <div className="product-summary">
            <h4>{item.title}</h4>
            <p>{priceToString(item.price)} ₩</p>
          </div>
        </div>
      </Col>
    );
  });
};

const Home = ({ products }) => {
  const [items, setItems] = useState(products);
  const [count, setCount] = useState(1);

  return (
    <>
      <div className="main-bg"></div>
      <Container>
        <Row>
          <ProductCard items={items} />
        </Row>
      </Container>
      <button
        className={styles.moreListBtn}
        onClick={() => {
          setCount((current) => current + 1);
          if (count === 1) {
            axios
              .get("https://codingapple1.github.io/shop/data2.json")
              .then((data) => {
                const newItems = [...items, ...data.data];
                setItems(newItems);
                console.log("count", count);
                console.log("items", items);
              });
          }
          if (count === 2) {
            axios
              .get("https://codingapple1.github.io/shop/data3.json")
              .then((data) => {
                const newItems = [...items, ...data.data];
                setItems(newItems);
                console.log("count", count);
                console.log("items", items);
              });
          }
          if (count > 2) {
            alert("그만 클릭하셈~~");
            setCount(0);
          }
        }}
      >
        more
      </button>
    </>
  );
};

export default Home;
