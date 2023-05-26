import { Table } from "react-bootstrap";
import styles from "./Cart.module.css";
import { useSelector } from "react-redux";

const Cart = () => {
  let user = useSelector((state) => state.user);
  let cartProducts = useSelector((state) => state.cartProducts);
  console.log(cartProducts);
  return (
    <>
      <div className={styles.username}>[{user}] 의 장바구니 :D</div>
      <Table className={styles.cartList}>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {cartProducts.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{index}</td>
                <td>{item.name}</td>
                <td>{item.count} 개</td>
                <td>안녕</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Cart;
