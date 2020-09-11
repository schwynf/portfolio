import React from "react";
import axios from "axios";
import "./nav.css";

function Nav() {
  const logout = () =>{
   axios.delete("/logout").then(({data})=>{
     console.log(data);
     if(data.logOut === true){
       window.location.href= "/";
     }
   })
  }
  return (
    <>
    <nav className="navbar">
      <a className="navbar-brand" href="/">
        Team Fantasy
      </a>
      <div className="float-right">
      <button onClick={logout} type="button" className="btn float-right">Logout</button>
      </div>
    </nav>
    </>
  );
}

export default Nav;
