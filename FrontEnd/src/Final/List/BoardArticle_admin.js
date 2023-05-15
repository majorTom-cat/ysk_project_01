import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { deepOrange } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";

const BoardArticle_admin = ({ article, file }) => {
  console.log("BoardArticle =>", article);
  // console.log("BoardArticle =>", upfile);

  console.log("file to boardArticle =>", file);

  const [data, setData] = useState({
    id: "",
    subject: "",
    location: "",
    board_date: "",
    price: "",
    //up_file: "",
  });
  const [picture, setpicture] = useState({
    up_file: "",
    board_num: "",
  });
  useEffect(() => {
    setData({
      id: article.id,
      subject: article.subject,
      location: article.location,
      board_date: article.board_date,
      price: article.price,
    });
  }, [article]);

  useEffect(() => {
    setpicture({
      up_file: file.up_file,
      board_num: file.board_num,
    });
  }, [file]);

  console.log("up_file : " + file.up_file);

  return (
    <Grid item key={article.num} xs={12} sm={6} md={3}>
      <Link
        to="/Detail"
        style={{ textDecoration: "none" }}
        state={{ num: picture.board_num }}
      >
        <Button
          color="secondary"
          size="small"
          variant="outlined"
          sx={{ borderRadius: "16px", boxShadow: 3, mb: 2 }}
        >
          <Card
            style={{ border: "none", boxShadow: "none" }}
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              color: "primary",
            }}
          >
            <CardMedia
              component="img"
              sx={{
                height: 250,
                width: 320,
                mt: 2,
              }}
              image={picture.up_file || ""}
              alt="random"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h1" align="left">
                <LocationOnIcon sx={{ color: deepOrange[300] }} />
                {article.location}
              </Typography>
              <Typography align="left" width="300px" height="30px" variant="h5">
                {article.subject}
              </Typography>
              <Typography
                align="right"
                width="300px"
                height="30px"
                variant="h5"
              >
                {article.price} 원
              </Typography>
              <Avatar sx={{ bgcolor: deepOrange[300] }}>U</Avatar>
              <Typography variant="h5" sx={{ mt: -4, mb: 0, ml: -8 }}>
                {article.id}
              </Typography>
              <Typography
                variant="caption"
                display="block"
                sx={{ mt: -3, mb: 0, ml: 25 }}
                color="primary.dark"
              >
                {article.board_date}
              </Typography>
            </CardContent>
            <CardActions></CardActions>
          </Card>
        </Button>
      </Link>
    </Grid>
  );
};

export default BoardArticle_admin;
