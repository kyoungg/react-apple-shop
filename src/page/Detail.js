import { useParams } from "react-router";
import { priceToString } from "../common/functions.js";
import { useEffect, useState } from "react";
import styled from "styled-components";
import styles from "./Detail.module.css";
import { Nav } from "react-bootstrap";
import { addProduct } from "../store.js";
import { useDispatch } from "react-redux";

const EventBox = styled.div`
  color: red;
  padding: 25px;
  margin: 10px;
  background: yellow;
`;

const TabBox = ({ tab, product }) => {
  const [fade, setFade] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setFade(styles.end);
    }, 100);
    setFade("");
  }, [tab]);

  return (
    <div className={`${styles.start} ${fade}`}>
      {
        [
          <div className={styles.tabBox}>
            아무튼 [{product.title}] 상품 상세
          </div>,
          <div className={styles.tabBox}>아무튼 상품 후기</div>,
          <div className={styles.tabBox}>아무튼 상품 문의</div>,
        ][tab]
      }
    </div>
  );
};

const Detail = ({ products }) => {
  const { id } = useParams();
  const product = products.find((item) => item.id == id);
  const [limit, setLimit] = useState(true);
  const [input, setInput] = useState("1");
  const [tab, setTeb] = useState(0);
  const [fade, setFade] = useState("");
  const dispatch = useDispatch();
  const onChange = (evt) => {
    setInput(evt.target.value);
  };

  useEffect(() => {
    console.log(id);
    let newRecent = localStorage.getItem("recent");
    newRecent = JSON.parse(newRecent);
    newRecent.push(Number(id));
    let uniqueRecent = [...new Set(newRecent)];
    console.log(uniqueRecent);
    localStorage.setItem("recent", JSON.stringify(uniqueRecent));
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setFade(styles.end);
    }, 100);
    setFade("");
  }, [tab]);

  useEffect(() => {
    setTimeout(() => {
      setLimit(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (isNaN(input) === true) {
      alert("그러지 마세요 :(");
      setInput("0");
    }
  }, [input]);

  return (
    <div className={`container ${styles.start} ${fade}`}>
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
          <input type="text" value={input} onChange={onChange} />
          <button
            className={styles.orderBtn}
            onClick={() => {
              dispatch(
                addProduct({
                  id: id,
                  name: product.title,
                  count: Number(input),
                })
              );
            }}
          >
            Order
          </button>
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link
            eventKey="link0"
            onClick={() => {
              setTeb(0);
            }}
          >
            상품 상세
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link1"
            onClick={() => {
              setTeb(1);
            }}
          >
            리뷰
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link2"
            onClick={() => {
              setTeb(2);
            }}
          >
            Q&A
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabBox tab={tab} product={product} />
    </div>
  );
};

export default Detail;
