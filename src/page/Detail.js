import { useParams } from "react-router";
import { priceToString } from "../common/functions.js";
import { useEffect, useState } from "react";
import styled from "styled-components";

const EventBox = styled.div`
  color: red;
  padding: 25px;
  margin: 10px;
  background: yellow;
`;

const Detail = ({ products }) => {
  const { id } = useParams();
  const product = products.find((item) => item.id == id);
  const [limit, setLimit] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLimit(false);
    }, 2000);
  });
  return (
    <div className="container">
      {limit ? (
        <EventBox>
          <h3>🚨2초 이내 구매시 할인🚨</h3>
        </EventBox>
      ) : null}
      <div className="row">
        <div className="col-md-6">
          <img src={product.img} width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{product.title}</h4>
          <p>{product.content}</p>
          <p>{priceToString(product.price)} ₩</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
