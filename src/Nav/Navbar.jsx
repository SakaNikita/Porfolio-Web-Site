import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 68px;
  background: transparent;
  padding: 0px 15px;
  margin: 0px;
  display: flex;
  justify-content: center;
  top: 0;

  .logo {
    color: white;
    font-family: Montserrat, sans-serif;
    align-items: center;
    display: flex;
    margin-left: 20px;
    height: 50px;
    width: 180px;
    margin: 10px;
    cursor: pointer;
    text-decoration: none;
    font-size: 45px;
    font-weight: 800;
    flex-grow: 1;
  }
  .logo span {
    color: blueviolet;
  }
  ul {
    list-style: none;
    flex-flow: row nowrap;
    text-decoration: none;
  }
  li {
    color: white;
    font-size: 18px
    background: red !important;
    padding: 0.5vw;
    width: 7vw;
    font-weight: 500;
    font-family: Montserrat, sans-serif;
    margin-left: 25px;
    text-decoration: none;
    transition: color 0.3s ease;
  }
  li:hover{
    color: white;
    background-color: blueviolet;
    padding: 8px 35px;
    margin-top: 20px;
    border-radius: 6px;
    border: 2px solid blueviolet;
  }
  .a-items {
      background: lime;
      width: 5vw;
      margin: 0 auto;
      
    }
  #ikita {
    color: white;
  }
`;

const Navbar = () => {
  return (
    <Nav className="navbar active">
      <div className="logo">
        <span>N</span>
        <span id="ikita">ikita</span>
        <span>.</span>
      </div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
