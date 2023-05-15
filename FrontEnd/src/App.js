import "./App.css";
import { useState } from "react";

import Admin from "./Final/admin_Main";
import Search from "./Final/Search/search";
import Search_Admin from "./Final/Search/search_admin";
import Search_Login from "./Final/Search/search_user";
import Login from "./Login/Login";
import Find_id from "./Login/find_id";
import Find_pw from "./Login/find_pw";
import Update from "./member_update/Update";
import UpdateForm from "./member_update/UpdateForm";
import SignUp from "./SignUp/SignUp";
import Final_Main from "./Final/Final_Main";
import Login_Main from "./Final/Login_Main";
import Write from "./Write/Write";
import Write_admin from "./Write/Write_admin";
import Detail from "./Detail/Detail";
import Mypage_user from "./Mypage/Mypage_user";
import Mypage_admin from "./Mypage/Mypage_admin";
import Mypage_update from "./Mypage/Mypage_update";
import Mypage_board from "./Mypage/Mypage_board";
import Mypage_cart from "./Mypage/Mypage_cart";
import Mypage_jjim from "./Mypage/Mypage_jjim";
import Mypage_page from "./Mypage/Mypage_page";
import Mypage_a_board from "./Mypage/Mypage_a_board";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [member, setMember] = useState({
    id: "",
    password: "",
    name: "",
    phone: "",
  });
  const SetID = (ID) => {
    console.log(ID);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Final_Main />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Search_admin" element={<Search_Admin />} />
          <Route path="/Search_Login" element={<Search_Login />} />
          <Route path="/update" element={<Update />} />
          <Route path="/mem_up" element={<UpdateForm />} />
          <Route path="/find_pw" element={<Find_pw />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/find_id" element={<Find_id />} />
          <Route path="/find_pw" element={<Find_pw />} />
          <Route path="/Login" element={<Login propFunction={SetID} />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Write" element={<Write />} />
          <Route path="/Write_admin" element={<Write_admin />} />
          <Route path="/Detail" element={<Detail />} />
          <Route path="/home" element={<Login_Main />} />
          <Route path="/Mypage_user" element={<Mypage_user />} />
          <Route path="/Mypage_admin" element={<Mypage_admin />} />
          <Route path="/Mypage_update" element={<Mypage_update />} />
          <Route path="/Mypage_board" element={<Mypage_board />} />
          <Route path="/Mypage_cart" element={<Mypage_cart />} />
          <Route path="/Mypage_jjim" element={<Mypage_jjim />} />
          <Route path="/Mypage_page" element={<Mypage_page />} />
          <Route path="/Mypage_a_board" element={<Mypage_a_board />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
