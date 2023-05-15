import React from "react";
import "../../css/header.css";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import main_logo from "../../images/main_logo.png";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useState } from "react";
function Header() {
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
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
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
              <a href="/">
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
                />
                <Link
                  to="/Search"
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
                <Link to="/Login" style={{ textDecoration: "none" }}>
                  <Button color="primary" variant="text">
                    <Typography variant="h5">Login</Typography>
                  </Button>
                </Link>
                <Link to="/SignUp" style={{ textDecoration: "none" }}>
                  <Button color="primary" variant="text">
                    <Typography variant="h5">JOIN</Typography>
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
export default Header;
