import React from "react";
import styled from "styled-components";
import Burger from "./Burger";

const Nav = styled.nav`
  width: 100%;
  height: 50px;
  background-color: black;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;

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
    font-size: 25px;
    font-weight: 800;
    flex-grow: 1;
  }
  .logo span {
    color: blueviolet;
  }
  ul {
    list-style: none;
    display: flex;
    flex-flow: row nowrap;
    text-decoration: none;
  }
  li {
    padding: 18px 10px;
    font-family: Montserrat, sans-serif;
    text-decoration: none;
    bacground-color: blueviolet;
  }
  #ikita {
    color: white;
  }
`;

const Navbar = () => {
  return (
    <Nav>
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
