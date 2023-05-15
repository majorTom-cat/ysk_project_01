import favorite from "../../images/iconheart.png";
import eyes from "../../images/iconeyes.png";
import DetailPicture from "./DetailPicture";
import { useEffect, useState } from "react";
import PurchaseModal from "./PurchaseModal";
import "../../css/DetailContent.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import axios from "axios";
const DetailContent = (props) => {
  const { board, file } = props;
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
  const [] = file;
  console.log("file in DetailContent : " + file.map((img) => img.up_file));

  const [boardState, setBoardState] = useState(board);

  // 찜, 구매요청 마우스 호버시 버튼 색상 관련
  const [btnColor, setBtnColor] = useState({
    favoriteBtn: "#fda965",
    requestBtn: "#FF8A2D",
  });

  const favoriteBtnMouseOver = () => {
    setBtnColor({
      favoriteBtn: "#FF9A5D ",
      requestBtn: "#FF8A2D",
    });
  };

  const favoriteBtnMouseLeave = () => {
    setBtnColor({
      favoriteBtn: "#fda965",
      requestBtn: "#FF8A2D ",
    });
  };

  const requestBtnMouseOver = () => {
    setBtnColor({
      favoriteBtn: "#fda965",
      requestBtn: "#FFC288",
    });
  };

  const requestBtnMouseLeave = () => {
    setBtnColor({
      favoriteBtn: "#fda965",
      requestBtn: "#FF8A2D",
    });
  };
  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  // --------------------------------

  const Content = {
    //overflow: "hidden",
    position: "",
    margin: "50px auto 50px auto",
    //border: "2px solid black",
    width: "90%",
    display: "block",
  };

  const PictureDiv = {
    position: "relative",
    width: "50%",
    height: "100%",
    display: "inline-block",
    margin: "auto auto auto 0px",
    alignItem: "center",
  };

  // const PictureStyle = {
  //   width: "100%",
  //   height: "100%",
  //   margin: "0 0 0 0",
  // };

  // 사진을 제외한, 상품 정보를 나타내는 요소들을 묶는 전체 div의 스타일
  const ContentStyle = {
    position: "relative",
    width: "35%",
    height: "400px",
    float: "right",
    display: "inline-block",
    margin: "0 30px 0 10px",
    border: "1px solid #FEA82F ",
    borderRadius: "20px",
    padding: "0 0 0 0px",
  };

  // 찜, 조회수의 아이콘+숫자 블럭 스타일
  const ContentIconStyle = {
    display: "flex",
    justifyContent: "center",
    padding: "5px 0 0 0",
  };

  // 하트, 눈 이미지 스타일
  const iconstyle = {
    display: "inline-block",
    width: "20px",
    height: "20px",
  };

  // 찜(하트) 아이콘과 찜 누른 숫자를 감싸는 div의 스타일
  const FavoriteDivStyle = {
    display: "inline-block",
    //backgroundColor: "#dee2e6",
    border: "1px solid #FEA82F ",
    borderRadius: "10px",
    width: "70px",
    height: "30px",
    margin: "20px 0 0 0px",
  };

  // 조회수(눈) 아이콘과 조회수를 감싸는 div의 스타일
  const ViewDivStyle = {
    display: "inline-block",
    //backgroundColor: "#dee2e6",
    border: "1px solid #FEA82F ",
    borderRadius: "10px",
    width: "70px",
    height: "30px",
    margin: "0 0 0 10px",
  };

  // 연관 태그의 tag 버튼들을 감싸는 ul의 스타일
  const ContentTagUlStyle = {
    listStyle: "none",
    margin: "20px 0 0 0px",
  };

  // 연관 태그의 tag 버튼들. li 형식으로 구현한 요소들의 스타일
  const ContentTagLiStyle = {
    listStyle: "none",
    display: "inline-block",
    padding: "0 10px 10px 10px",
    margin: "0 0 0 0",
  };

  // 찜, 구매요청 버튼을 감싸는 div의 스타일
  const ContentButtonDivStyle = {
    display: "block",
    textAlign: "center",
    margin: "20px 0px 10px 50px",
    padding: "0",
    overflow: "hidden",
  };

  const ContentButtonStyle = {
    overflow: "hidden",
    display: "inline",

    favorite: {
      display: "inline",
      borderRadius: "20px",
      marginRight: "20px",
      width: "80px",
      height: "60px",
      backgroundColor: btnColor.favoriteBtn,
      color: "white",
      fontSize: "1rem",
      border: "1px",
      cursor: "pointer",
    },

    request: {
      display: "inline",
      borderRadius: "20px",
      marginRight: "50px",
      width: "80px",
      height: "60px",
      backgroundColor: btnColor.requestBtn,
      color: "white",
      fontSize: "1rem",
      border: "1px",
      cursor: "pointer",
      onClick: {
        backgroundColor: "blue",
      },
    },
  };

  const requestAddCartBefore = () => {
    const checkRequestAddCart = () => {
      axios
        .post("/requestAddCartBefore", {
          board_num: num,
          request_id: sessionStorage.getItem("id"),
        })
        .then((res) => {
          if (res.data === 1) {
            alert("이미 찜한 상품입니다.");
            return;
          } else requestAddCart();
        })
        .catch((e) => {
          console.error(e);
        });
    };

    const requestAddCart = () => {
      axios
        .post("/requestAddCart", {
          board_num: num,
          request_id: sessionStorage.getItem("id"),
          id: id,
        })
        .then((res) => {
          alert("상품을 찜목록에 등록했습니다.");
          setBoardState(board);
          document.location.href = "";
        })
        .catch((e) => {
          console.error(e);
        });
    };

    if (
      sessionStorage.getItem("id") === null ||
      sessionStorage.getItem("id") === undefined
    ) {
      alert("로그인 후 이용 가능합니다.");
      return;
    } else if (id == sessionStorage.getItem("id")) {
      alert("회원님의 게시글 입니다.");
    } else checkRequestAddCart();
  };

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    if (
      sessionStorage.getItem("id") === null ||
      sessionStorage.getItem("id") === undefined
    ) {
      alert("로그인 후 이용 가능합니다.");
      return;
    } else setModalOpen(true);

    //setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const modalHeading = "구매요청 확인";
  const board_num = board.num;

  return (
    <div style={Content}>
      {/* //header 부분에 modalHeading 변수에 저장된 텍스트를 입력 */}
      <PurchaseModal
        open={modalOpen}
        close={closeModal}
        header={modalHeading}
        board={board}
      >
        {/* // PurchaseModal.js <main> {props.children} </main>에 내용이 입력된다.
        함수형 모달 팝업창 */}
      </PurchaseModal>

      <div className="PictureDiv" style={PictureDiv}>
        {/* <img src={ContentPicture} alt="" style={PictureStyle}></img> */}
        <DetailPicture className="PictureDiv" file={file} />
      </div>

      <div className="content" style={ContentStyle}>
        <h2 style={{ padding: "20px 0 0 0px" }}>{board.price} 원</h2>

        <div style={FavoriteDivStyle}>
          <span style={ContentIconStyle}>
            &nbsp; <img src={favorite} style={iconstyle} alt="Img Not Found" />
            &nbsp;&nbsp;&nbsp;{board.addcartcount}
            {/* &nbsp;&nbsp;&nbsp;{favoriteCount} */}
          </span>
        </div>

        <div style={ViewDivStyle}>
          <span style={ContentIconStyle}>
            &nbsp; <img src={eyes} style={iconstyle} alt="Img Not Found" />
            &nbsp;&nbsp; {board.viewcount}
          </span>
        </div>

        <h3 style={{ padding: "20px 0 0 0px" }}>거래지역</h3>
        <p style={{ padding: "20px 0 0 0px" }}>{board.location}</p>
        <h3 style={{ padding: "20px 0 0 0px" }}>연관 태그</h3>

        <ul style={ContentTagUlStyle}>
          <li className="liTag" style={ContentTagLiStyle}>
            <button className="tag">tag 1</button>
          </li>
          <li style={ContentTagLiStyle}>
            <button className="tag">tag 2</button>
          </li>
          <li style={ContentTagLiStyle}>
            <button className="tag">tag 3</button>
          </li>
          <li style={ContentTagLiStyle}>
            <button className="tag">tag 4</button>
          </li>
          <li style={ContentTagLiStyle}>
            <button className="tag">tag 5</button>
          </li>
        </ul>

        <div style={ContentButtonDivStyle}>
          <button
            className="ContentButtonStyle favorite"
            style={ContentButtonStyle.favorite}
            // onClick={onClickFavorite}
            onMouseMove={favoriteBtnMouseOver}
            onMouseLeave={favoriteBtnMouseLeave}
            name="favoriteBtn"
            onClick={requestAddCartBefore}
          >
            <b>찜</b>
          </button>

          <button
            className="ContentButtonStyle request"
            style={ContentButtonStyle.request}
            onClick={openModal}
            onMouseOver={requestBtnMouseOver}
            onMouseLeave={requestBtnMouseLeave}
            name="requestBtn"
          >
            <b>구매요청</b>
          </button>
          <div className="scroll__container">
            <button className="top" onClick={scrollToTop} type="button">
              <ArrowUpwardIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailContent;
