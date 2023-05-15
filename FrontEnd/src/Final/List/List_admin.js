import * as React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import CreateIcon from "@mui/icons-material/Create";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "../../css/List.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import BoardArticle from "./BoardArticle_admin";
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

const List_admin = () => {
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

  const navigate = useNavigate();

  const navigateToWrite = () => {
    navigate("/Write_admin");
  };

  if (boardlist.length === 0) {
    return (
      <>
        <main>
          <ThemeProvider theme={theme}>
            <Button
              color="secondary"
              variant="outlined"
              size="large"
              sx={{ mt: 2, ml: "90%", borderRadius: "16px" }}
              startIcon={<CreateIcon />}
              onClick={navigateToWrite}
            >
              글쓰기
            </Button>
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
            <Button
              color="secondary"
              variant="outlined"
              size="large"
              sx={{ mt: 2, ml: "90%", borderRadius: "16px" }}
              startIcon={<CreateIcon />}
              onClick={navigateToWrite}
            >
              글쓰기
            </Button>
            <Container sx={{ py: 10 }} maxWidth="xl">
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

export default List_admin;
