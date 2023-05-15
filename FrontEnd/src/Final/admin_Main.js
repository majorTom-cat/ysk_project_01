import React from "react";

import Login_header from "./Header/Admin";
import Banner from "./banner/banner";
import List from "./List/List_admin";
import Footer from "./Footer/Footer";
function Admin_Main() {
  const login_id = window.sessionStorage.getItem("id");
  // useEffect(() => {

  //   console.log("window.sessionStorage.getItem(id)=>", login_id);
  //   if (login_id === null) {
  //     alert("로그인후 이용하세요");
  //     navigate("/");
  //   }
  // }, []);
  return (
    <div>
      <Login_header />
      <Banner />
      <List />
      <Footer />
    </div>
  );
}

export default Admin_Main;
