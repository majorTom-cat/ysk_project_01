import { useEffect, useState } from "react";
import Final_Main from "../Final/Final_Main";
import DetailContent from "./body/DetailContent";
import DetailContentExplain from "./body/DetailContentExplain";
import "../css/DetailContent.css";
import "../css/DetailPicture.module.css";
import Footer from "../Final/Footer/Footer";
import Header from "../Final/Header/Header";
import Login from "../Final/Header/Login";
import Admin from "../Final/Header/Admin";
import { useLocation } from "react-router-dom";
import axios from "axios";
const Detail = () => {
  const location = useLocation();
  const board_num = location.state.num;
  const [board, setBoard] = useState({
    num: "",
    id: "",
    subject: "",
    location: "",
    content: "",
    price: "",
    addcartcount: "",
    viewcount: "",
    board_date: "",
  });
  const [file, setfile] = useState([
    {
      org_file: "",
      up_file: "",
      board_num: "",
    },
  ]);
  useEffect(() => {
    axios
      .post("/detail", {
        num: board_num,
      })
      .then((res) => {
        console.log(res.data);
        setBoard(res.data);
      })
      .catch((e) => {
        console.error(e);
      })
      .then(() => {
        axios
          .post("/file", {
            board_num: board_num,
          })
          .then((res) => {
            console.log(res.data);
            setfile(res.data);
          })
          .catch((e) => {
            console.error(e);
          });
      });
  }, [board_num]);
  const session = sessionStorage.getItem("id");
  return (
    <>
      {session === "admin" ? <Admin /> : session ? <Login /> : <Header />}
      <DetailContent board={board} file={file} />
      <DetailContentExplain board={board} />
      <Footer />
    </>
  );
};
export default Detail;
