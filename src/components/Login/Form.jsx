import React, {  useEffect, useState } from "react";
import { NavLink, json, useNavigate } from "react-router-dom";
import axios from "axios";
import Admin from "../AdminPanel/Admin";


const Form = () => {
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [login, setLogin] = useState("");
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useNavigate();



  const [admin, setAdmin] = useState({
    userName: "admin@gmail.com",
    password: "Admin123",
    role: "admin",
  
 
  });
 
  

  useEffect(() => {
    const fetchRegisteredUsers = async () => {
      try {
        const response = await axios.get("http://localhost:5001/register");
        setRegisteredUsers(response.data);
      } catch (error) {
        console.error("Error fetching login data:", error);
      }
    };
    fetchRegisteredUsers();
  }, []);
  
  const handleLogin = (e) => {
    localStorage.setItem("User", JSON.stringify(admin));
    localStorage.setItem("login", JSON.stringify(user));
  
    e.preventDefault();
    const filteredUsers = registeredUsers.filter(
      (user) => user.email === login && user.password === pass ) ;
     


    if (filteredUsers.length > 0) {
      {
       
      
        location("/shopCard");
        localStorage.setItem("display", JSON.stringify(false));
        window.location.reload();
      }
   
    } 
    else if (
      admin.userName === login &&
      admin.password === pass &&
      admin.role === "admin" &&
      admin.userName &&
      admin.password !== ""
    ) {
      localStorage.setItem("User", JSON.stringify(admin));
      localStorage.setItem("display", JSON.stringify(true));
    

      location("/admin");
      window.location.reload();
    } else {
      console.log("Email or password incorrect");
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleLogin}>
        <label>Username</label>
        <input
          id="input"
          name="username"
          value={user}
          className="input"
          onChange={(e) => setUser(e.target.value)}
          type="username"
          required
        />
         <label>Email address</label>
         <input
          id="input"
          name="email"
          value={login}
          className="input"
          onChange={(e) => setLogin(e.target.value)}
          type="email"
          required
        />

        <label>Password *</label>
        <input id="input" name="password"
          value={pass}
          className="input"
          onChange={(e) => setPass(e.target.value)}
          type="password"
          required
        />

        <button type="submit">Log in</button>
        <div className="checkbox">
          <input className="radio" type="radio" />
          <span>Remember me?</span>
          <NavLink className="link">Forgot your password</NavLink>
        </div>
      </form>
    </>
  );
};

export default Form;
