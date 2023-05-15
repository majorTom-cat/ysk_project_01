import React from "react";
import Login_header from "../Header/Header";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "../../css/List.css";
import { useEffect, useState } from "react";
import BoardArticle from "../List/BoardArticle";
import axios from "axios";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";
const theme = createTheme({
  typography: {
    fontFamily: "Arial, sans-serif",
  },
  palette: {
    primary: {
      light: "#ffffff",
      main: "#FF8A2D",
      dark: "#bdbdbd",
    },
    secondary: {
      main: "#FF8A2D",
      dark: "#ffcc80",
      contrastText: "#white",
    },
  },
});

const scrollToTop = () =>
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

function Search() {
  const location = useLocation();
  const list = location.state.list;
  const [searhlist, setList] = useState([]);

  useEffect(() => {
    console.log("list");
    console.log(list);
    searchClick();
  }, [list]);
  const searchClick = () => {
    axios
      .post("/search", {
        obj: list,
      })
      .then((res) => {
        // res : 서버의 응답 결과 저장
        console.log("res ==>", res);
        const { data } = res; // data = res.data
        console.log("data ==>", data);
        setList(data);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    console.log("filelist");
    getFileList();
  }, []);
  const getFileList = () => {
    axios
      .get("/fileList", {})
      .then((res) => {
        // res : 서버의 응답 결과 저장
        console.log("file res ==>", res);
        const { data } = res; // data = res.data
        console.log("file data ==>", data);
        setFileList(data);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  if (searhlist.length === 0) {
    return (
      <>
        <Login_header />
        <main>
          <ThemeProvider theme={theme}>
            <div id="boardLine">게시글이 없습니다.</div>
          </ThemeProvider>
        </main>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Login_header />
        <main>
          <ThemeProvider theme={theme}>
            <Container sx={{ py: 10 }} maxWidth="xl">
              {/* End hero unit */}
              <Grid container spacing={2}>
                {searhlist.map((article) => {
                  const file = fileList.find(
                    (file) => file.board_num === article.num
                  );
                  return (
                    <BoardArticle
                      article={article}
                      key={article.num}
                      file={
                        fileList.find(
                          (file) => file.board_num === article.num
                        ) ?? {
                          up_file: null,
                        }
                      }
                    />
                  );
                })}
              </Grid>
            </Container>
          </ThemeProvider>
        </main>
        <div className="scroll__container">
          <button className="top" onClick={scrollToTop} type="button">
            <ArrowUpwardIcon />
          </button>
        </div>
        <Footer />
      </>
    );
  }
}

export default Search;
