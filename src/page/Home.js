import { Container, Row, Col } from "react-bootstrap";
import { useState } from "react";
import data from "../data.js";
import { priceToString } from "../common/functions.js";

const ProductCard = ({ products }) => {
  return products.map((item) => {
    return (
      <Col md="auto" key={item.id} className="productCard">
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

const Home = () => {
  const [products, setProducts] = useState(data);
  return (
    <Container>
      <Row>
        <ProductCard products={products} />
      </Row>
    </Container>
  );
};

export default Home;
