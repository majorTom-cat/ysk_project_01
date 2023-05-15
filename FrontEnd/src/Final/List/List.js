import * as React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CreateIcon from "@mui/icons-material/Create";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "../../css/List.css";
import { useEffect, useState } from "react";
import BoardArticle from "./BoardArticle";
import axios from "axios";

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

const List = () => {
  const [boardlist, setList] = useState([]);
  const [fileList, setFileList] = useState([]);
  useEffect(() => {
    console.log("list");
    getBoardList();
  }, []);
  useEffect(() => {
    console.log("filelist");
    getFileList();
  }, []);
  const getBoardList = () => {
    axios
      .get("/boardList", {})
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

  if (boardlist.length === 0) {
    return (
      <>
        <main>
          <ThemeProvider theme={theme}>
            <div id="loginAlert">
              <Button
                color="secondary"
                variant="outlined"
                size="large"
                sx={{ mt: 3, mb: 0, ml: "90%", borderRadius: "16px" }}
                startIcon={<CreateIcon />}
                onClick={() => alert("로그인 이후에 이용해주세요!")}
              >
                글쓰기
              </Button>
            </div>
            <div id="boardLine">게시글이 없습니다.</div>
          </ThemeProvider>
        </main>
      </>
    );
  } else {
    return (
      <>
        <main>
          <ThemeProvider theme={theme}>
            <div id="loginAlert">
              <Button
                color="secondary"
                variant="outlined"
                size="large"
                sx={{ mt: 3, mb: 0, ml: "90%", borderRadius: "16px" }}
                startIcon={<CreateIcon />}
                onClick={() => alert("로그인 이후에 이용해주세요!")}
              >
                글쓰기
              </Button>
            </div>
            <Container sx={{ py: 12 }} maxWidth="xl">
              {/* End hero unit */}
              <Grid container spacing={2}>
                {boardlist.map((article) => {
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
      </>
    );
  }
};

export default List;
