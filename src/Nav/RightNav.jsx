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
      border-radius: 5px;
      border: 2px solid rgb(134, 61, 202);
      background-color: rgb(134, 61, 202);
      transition: 0.4s all ease;
      height: 50px;
      width: 180px;
      margin: 0px 10px;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li className="nav-items">
        <a href="/">Home</a>
      </li>
      <li className="nav-items">
        <a href="/">About</a>
      </li>
      <li className="nav-items">
        <a href="/">Services</a>
      </li>
      <li className="nav-items">
        <a href="/">Portfolio</a>
      </li>
      <li className="nav-items">
        <a href="/">Skills</a>
      </li>
      <li className="nav-items">
        <a href="/">Contact</a>
      </li>
    </Ul>
  );
};

export default RightNav;
