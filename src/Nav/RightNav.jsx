import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    display: inline-block;
    background-color: black;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

    li {
      font-family: Montserrat, sans-serif;
      color: #fff;
      background: pink;
      width: 7vw;
      height: 50px;
      width: 180px;
      margin: 0px 10px;
      display: flex;
    }
    li:hover {
      font-family: Montserrat, sans-serif;
      color: #fff;
      border-radius: 28px;
      border: 2px solid rgb(134, 61, 202);
      background-color: rgb(134, 61, 202);
      transition: width 4.9vw 2s;
      height: 50px;
      width: 180px;
      margin: 0px 10px;
      display: inline-block;
    }
    .a-items {
      background: lime;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open} className="nav-menu active">
      <li className="nav-items">
        <a href="#Home" className="a-items">
          Home
        </a>
      </li>
      <li className="nav-items">
        <a href="#About" className="a-items">
          About
        </a>
      </li>
      <li className="nav-items">
        <a href="#Services" className="a-items">
          Services
        </a>
      </li>
      <li className="nav-items">
        <a href="#Portfolio" className="a-items">
          Portfolio
        </a>
      </li>
      <li className="nav-items">
        <a href="#Skills" className="a-items">
          Skills
        </a>
      </li>
      <li className="nav-items">
        <a href="#Contact" className="a-items">
          Contact
        </a>
      </li>
    </Ul>
  );
};

export default RightNav;
