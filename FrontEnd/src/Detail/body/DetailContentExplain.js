import { textAlign } from "@mui/system";
import profile from "../../images/image-07.jpg";

const DetailContentExplain = ({ board }) => {
  const ContentExplainStyle = {
    overflow: "auto",
    //align: "center",
    //position: "",
    margin: "0 auto 30px auto",
    padding: "20px 0 0 0",
    //border: "2px solid black",
    width: "90%",
    height: "40vh",
    display: "block",
  };

  // 게시자 프로필을 감싸는 div의 스타일
  const ContentExplainUserStyle = {
    display: "block",
    overflow: "hidden",
    background: "#FFC288",
    border: "1px solid #FFC288 ",
    borderBottom: "0px solid #FEA82F ",
    borderRadius: "20px 20px 0 0",
    width: "95%",
    //height: "18%",
    margin: "0 auto 0 50px",
    //justifyContent: "center",
    //alignItem: "center",
    //verticalAlign: "middle",
  };

  const UserProfile = {
    width: "40px",
    height: "40px",
    borderRadius: "70%",
    margin: "7px 0 35px 20px",
    //padding: "-50px 0 0 0",
    display: "block",
    cursor: "pointer",
  };

  const ProfilePtag = {
    //display: "inline",
    margin: "-50px auto 20px 70px",
    //padding: "-50px 0 0 0",
    justifyContent: "center",
    align: "center",
    width: "100px",
    height: "0px",
    color: "#ffffff ",
    cursor: "pointer",
    lineHeight: "0px",
  };

  // 게시자의 설명문을 감싸는 div의 스타일
  const ContentExplainAreaStyle = {
    border: "1px solid #FFC288 ",
    borderTop: "1px solid #FFC288 ",
    width: "95%",
    height: "80%",
    margin: "0 auto 0 50px",
    borderRadius: "0 0 20px 20px",
  };

  const ExplainPtag = {
    margin: "20px",
    fontSize: "1rem",
    textAlign: "left",
  };

  return (
    <div style={ContentExplainStyle}>
      <div style={ContentExplainUserStyle}>
        <img src={profile} style={UserProfile} alt="" />
        <p style={ProfilePtag}>
          <b>{board.id}</b>
        </p>
      </div>

      <div style={ContentExplainAreaStyle}>
        <h4 style={{ margin: "20px", textAlign: "left" }}>{board.subject}</h4>
        <p style={ExplainPtag}>{board.content}</p>
      </div>
    </div>
  );
};

export default DetailContentExplain;
