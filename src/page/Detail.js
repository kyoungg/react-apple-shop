import { useParams } from "react-router";
import { priceToString } from "../common/functions.js";

const Detail = ({ products }) => {
  const { id } = useParams();
  const product = products.find((item) => item.id == id);
  return (
    <div className="container">
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
