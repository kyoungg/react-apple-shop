import { Container, Row, Col } from "react-bootstrap";
import { priceToString } from "../common/functions.js";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ products }) => {
  const navigate = useNavigate();
  return products.map((item) => {
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
  return (
    <>
      <div className="main-bg"></div>
      <Container>
        <Row>
          <ProductCard products={products} />
        </Row>
      </Container>
    </>
  );
};

export default Home;
