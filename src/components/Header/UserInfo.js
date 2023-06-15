import React from "react";
import styled from "styled-components";
import store from "../../store/store";
import userLogo from "./../../img/userLogo.svg"
import { logoutUser } from "../../store/types";
import Button from "../Button";
import { useSelector } from "react-redux";

const UserInfo = ({setOpen, handleLink}) => {
    const state = useSelector((state) => state)
    const isDesktop = state.screenSize > 1439;
    
    const handleExit = () => {
        setOpen(false);
        store.dispatch(logoutUser())
    }    

    const userName = 'John Dou';
    return(
        <UserInfo_W>
        {
            state.authenticated 
                ? <div className="auth-user">   
                        <div className="exit-block">
                            <p>{userName}</p>
                            <div className={'exit'}>
                                <Button name={'Выйти'} onClick={handleExit}
                                    size={isDesktop ? 10 : 20} 
                                    height={isDesktop ? 12 : 24} 
                                    color={'#000'} bg={isDesktop ? 'unset' : '#7CE3E1'} /> 
                            </div>       
                        </div>     
                        <img className={'user-photo'} src={userLogo} alt='user-photo'/>                                                            
                    </div>
                : <div className="auth-links">
                    <Button name={'Зарегистрироваться'} bg={'#fff'} color={'#666'} size={14} height={17}/>
                    <div className="pipe"></div>
                    <div> 
                        <div className="btn-login">
                            <Button name={'Войти'} bg={'#7CE3E1'} color={'#000'} size={14} height={17} onClick={() => handleLink('auth')}/> 
                        </div>
                    </div>
                </div>
        }
        </UserInfo_W>
    )
}

export default UserInfo

const UserInfo_W = styled.div`
    .auth-links{
        display: flex;
        align-items: center;

        .pipe{
            margin: 0px 20px 0 13px;
            background-color: #029491;
            width: 2px;
            height: 35px
        }

        .btn-login{
            height: 25px;
            width: 65px;
        }
    }
    .auth-user{
            
        display: flex;
        justify-content: center;

        .user-photo{
            height: 32px;
            width: 32px;
            border-radius: 50%;
            border: 3px solid #fff;
            
            &:hover{
                border: 3px solid #029491;
                transition: all ease 0.4s;
                cursor: pointer;
            }
        }

        .exit-block{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: end;
            margin-right: 5px;

            p{
                margin: 0;
            }
            .exit{
                width: unset;
                height: unset;
                margin: 0 -6px 0 0;
            
                a{
                    text-decoration: none;        
                    font-size: 16px;
                    line-height: 19px;
                }
            }
        }
    }

    @media (max-width: 1439px) {
        .auth-user{    
            .exit-block{
                margin: 0;
                align-items: center;

                .exit{
                    width: 300px;
                    height: 50px;   
                    margin: 20px auto 0;
                }
                p{
                    font-size: 16px;
                    line-height: 19px;
                    color: rgba(256, 256, 256, 0.4);
                }
            }
            .user-photo{
                display: none;
            }
        }
    }
`;