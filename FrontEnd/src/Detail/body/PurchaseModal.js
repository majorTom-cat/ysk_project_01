import React from "react";
import "../../css/PurchaseModal.css";
import main_logo from "../../images/main_logo.png";
import axios from "axios";

const PurchaseModal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header, board } = props;
  const {
    num,
    id,
    subject,
    location,
    content,
    price,
    addcartcount,
    viewcount,
    board_date,
  } = board;

  const requestPurchaseBefore = () => {
    const checkRequest = () => {
      axios
        .post("/requestPurchaseBefore", {
          board_num: num,
          request_id: sessionStorage.getItem("id"),
        })
        .then((res) => {
          if (res.data === 1) {
            alert("이미 구매 요청한 상품입니다.");
            close();
          } else requestPurchase();
        })
        .catch((e) => {
          console.error(e);
        });
    };

    const requestPurchase = () => {
      axios
        .post("/requestPurchase", {
          board_num: num,
          request_id: sessionStorage.getItem("id"),
          id: id,
        })
        .then((res) => {
          alert("구매를 요청하였습니다.");
          close();
        })
        .catch((e) => {
          console.error(e);
        });
    };

    if (id == sessionStorage.getItem("id")) {
      alert("회원님의 게시글 입니다.");
    } else checkRequest();
  };

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section style={{ borderRadius: "20px" }}>
          <header
            style={{
              fontWeight: "800",
              fontSize: "1.2rem",
            }}
          >
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            {/* {props.children} */}
            <table className="modalTable">
              <tr className="modalTableRow">
                <th clasName="modalTableHead" style={{ color: "#FF8A2D" }}>
                  가격
                </th>
                <td clasName="modalTableData">{price} 원</td>
              </tr>

              <tr className="modalTableRow">
                <th clasName="modalTableHead" style={{ color: "#FF8A2D" }}>
                  거래지역
                </th>
                <td clasName="modalTableData">{location}</td>
              </tr>

              <tr className="modalTableRow">
                <th clasName="modalTableHead" style={{ color: "#FF8A2D" }}>
                  판매자
                </th>
                <td clasName="modalTableData">{id}</td>
              </tr>
            </table>
          </main>
          <footer>
            <a href="/home" style={{ float: "left", display: "inline" }}>
              <img src={main_logo} alt="logo" width="90px;" height="20px;" />
            </a>
            <button className="requests" onClick={requestPurchaseBefore}>
              요청
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default PurchaseModal;
