import { Table } from "react-bootstrap";
import styles from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeKimTrue } from "../store/userSlice";
import { correctionProduct } from "../store";
import { useState } from "react";

const Cart = () => {
  const [count, setCount] = useState(1);
  let user = useSelector((state) => state.user);
  let cartProducts = useSelector((state) => state.cartProducts);
  const dispatch = useDispatch();
  return (
    <>
      <div className={styles.username}>
        <p>[{user.firstName + user.lastName}] 의 장바구니 :D</p>
        <button
          className={styles.nameChangeBtn}
          onClick={() => {
            dispatch(changeKimTrue());
          }}
        >
          나와라 진실
        </button>
      </div>
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
                <td>
                  <input
                    type="number"
                    value={count}
                    onChange={(evt) => {
                      setCount(evt.target.value);
                    }}
                  />
                  <button
                    className={styles.correctionBtn}
                    onClick={() => {
                      dispatch(
                        correctionProduct({ id: item.id, count: count })
                      );
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default Cart;
