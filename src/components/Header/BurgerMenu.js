import React from "react";
import styled from "styled-components";
import burgerOff from "./../../img/burger-logo.svg"
import burgerOn from "./../../img/burger-logo-white.svg"
import Links from "./Links";
import Button from "../Button";
import cn from 'classnames'
import UserInfo from "./UserInfo";
import { useSelector } from "react-redux";


const BurgerMenu = ({open,setOpen, handleLink}) => {
  
  const handleNavigate = (address) => {
    setOpen(!open);
    handleLink(`${address}`)
  }
  const state = useSelector((state) => state)

  return(
    <Wrapper open={open} >
      <div className={cn('logo', {'logo-open': open})}>
        <button  onClick={() => setOpen(!open)}>
          {
            !open 
              ? <img   src={burgerOff} alt={'logo'}/>
              : <img   src={burgerOn} alt={'logo'}/>
          }
        </button>
      </div>
      <div className={cn('nav-block', {'nav-block--isHidden': !open})}>
        { open && 
          <>
            <Links setOpen={setOpen}/>
            {
              state.authenticated
                ? <UserInfo setOpen={setOpen}/>
                : <div >              
                    <div className={'btn-register'}>
                      <Button name={'Зарегистрироваться'} size={16} height={19} color={'rgba(256, 256, 256, 0.4)'} bg={'#029491'} onClick={() => handleNavigate('auth')}/>
                    </div>
                    <div className={'btn-login'}>
                      <Button name={'Войти'} size={20} height={24} color={'#000'} bg={'#7CE3E1'} onClick={() => handleNavigate('auth')}/>
                    </div>
                  </div>
            }
          </>
        }
      </div>
    </Wrapper>
  )
}
export default BurgerMenu

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: conent-fit;

  margin-left: -14px;
  right: 0;

  .logo{
    display: flex;
    justify-content: right;
    align-items: center;

    height: 93px;
    padding-right: 20px;
      

    button{
      
      cursor: pointer;
      border: none;
      background: none;
      z-index: 2;
    }
   }
  
    
  .nav-block {
    position: absolute;
    padding: 93px 0 75px;
    background: #fff;
    z-index: 1;
    width: 100%;
    background: ${props => props.open ? '#029491' : 'unset'};

    transition: transform 300ms ease-out;
    
    &--isHidden {
      width: 0;
      transform: translateX(100%);
      transition: transform 300ms ease-out;
    }
    
  }
  .btn-login{
    width: 300px;
    height: 50px;
    margin: 20px auto 0;
  } 
  
`;