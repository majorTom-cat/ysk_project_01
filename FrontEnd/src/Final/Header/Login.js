import React from "react";
import "../../css/header.css";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import main_logo from "../../images/main_logo.png";
import SearchIcon from "@mui/icons-material/Search";
import Search from "../Search/search_user";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState, useEffect, useRef } from "react";
import { deepOrange } from "@mui/material/colors";
function Login_Header() {
  const theme = createTheme({
    typography: {
      fontFamily: "Arial, sans-serif",
    },
    palette: {
      primary: {
        main: "#FF8A2D",
      },
    },
  });
  const handleLogin = (id) => {
    sessionStorage.setItem("userId", id);
  };
  const handleLogout = () => {
    console.log("handleLogout");
    sessionStorage.clear();
  };
  const id = useRef();
  useEffect(() => {
    setInfo("");
    id.current.value = "";
  }, []);
  // const [anchorEl, setAnchorEl] = useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  //   event.preventDefault();
  // };
  const init = () => {
    setInfo("");
  };
  const [info, setInfo] = useState("");

  return (
    <header>
      <ThemeProvider theme={theme}>
        <nav>
          <ul>
            <li className="logo">
              <a href="/home">
                <img src={main_logo} alt="logo" width="150px;" height="45px;" />
              </a>
            </li>
            <li className="search1">
              <Paper
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  ml: 1,
                  border: "3px solid #fea82f",
                  borderRadius: "16px",
                }}
              >
                <input
                  class="serach_head"
                  sx={{ ml: 1, width: "100%" }}
                  placeholder="Search"
                  inputProps={{ "aria-label": "search " }}
                  onChange={(e) => setInfo(e.target.value)}
                  ref={id}
                />
                <Link
                  to="/Search_Login"
                  style={{ textDecoration: "none" }}
                  state={{ list: info }}
                >
                  <IconButton
                    type="button"
                    sx={{ p: "10px" }}
                    aria-label="search"
                    color="primary"
                    onClick={init}
                  >
                    <SearchIcon />
                  </IconButton>
                </Link>
              </Paper>
            </li>
            <li className="Login_Join">
              <Stack
                className="Stack"
                sx={{ mt: 0, mb: 0, mr: "25%" }}
                direction="row"
                spacing={2}
                justifyContent="right"
              >
                <Link
                  to="/Mypage_user"
                  style={{ textDecoration: "none" }}
                  state={{ id: id }}
                  onClick={handleLogin}
                >
                  <IconButton
                    // onClick={handleClick}
                    size="large"
                    // aria-controls={open ? "account-menu" : undefined}
                    // aria-haspopup="true"
                    // aria-expanded={open ? "true" : undefined}
                  >
                    <Avatar
                      sx={{ width: 35, height: 35, bgcolor: deepOrange[300] }}
                    >
                      U
                    </Avatar>
                  </IconButton>
                </Link>
                <Link to="/" style={{ textDecoration: "none" }}>
                  <Button color="primary" variant="text" onClick={handleLogout}>
                    <Typography variant="h5">Logout</Typography>
                  </Button>
                </Link>
              </Stack>
            </li>
          </ul>
        </nav>
      </ThemeProvider>
    </header>
  );
}
export default Login_Header;
