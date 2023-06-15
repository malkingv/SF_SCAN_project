import React from "react";
import {Link} from "react-router-dom"
import styled from "styled-components";

const Links = ({setOpen}) => {
    return(
        <NavBar>
            <Link className={'nav-link'} to={`/`} onClick={() => setOpen && setOpen(false)}>Главная</Link>
            <Link className={'nav-link'} to={`#`} onClick={() => setOpen && setOpen(false)}>Тарифы</Link>
            <Link className={'nav-link'} to={`#`} onClick={() => setOpen && setOpen(false)}>FAQ</Link>
        </NavBar>
    )
}

export default Links
const NavBar = styled.nav`
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    padding: 0;
    width: 250px;
  
  .nav-link {
    color: #000;
    font-size: 14px;
    Line-height: 17px;
    text-decoration: none;
    margin: 0;
  }
  
  @media (max-width: 1439px) {
    position: relative;
    width: 100%;
    flex-direction: column;
    padding: 35px 0 50px;
    
    .nav-link{
      color: #fff;
      margin: 0 auto;
     padding-bottom: 25px; 
    }
    
  }
`;
