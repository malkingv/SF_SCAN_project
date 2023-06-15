import React from "react";
import styled from "styled-components";
import logo from "../../img/logo-white.svg"
const Footer = () => {
    return(
        <FooterWrapper>
            <div className={'content'}>
                <div className={'logo-block'}>
                    <img src={logo} alt={'logo'}/>
                </div>
                <div className={'contacts'}>
                    <p className={'info'}>г. Москва, Цветной б-р, 40</p>
                    <p className={'info'}>+7 495 771 21 11</p>
                    <p className={'info'}>info@skan.ru</p>
                    <br/>
                    <p className={'copyright'}>Copyright. 2023</p>
                </div>
            </div>
        </FooterWrapper>
    )
}

export default Footer

const FooterWrapper = styled.div`
  background-color: #029491;
  height: 137px;
  width: 100%;
  
  .content{
      max-width: 1320px;
      padding: 0 60px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      height: 100%;
    
      .logo-block{
        display: flex;
        align-items: center;
      }
      .contacts{
        display: flex;
        flex-direction: column;
        align-items: end;
        justify-content: center;
        padding: 25px 0;
        color: #fff;
        
        .info{
          margin: 0;
          line-height: 16.94px;
        }
        .copyright{
          margin: 0;
          font-size: 12px;
          line-height: 14.52px;
        }
      }
  
      @media (max-width: 1439px) {
        max-width: 335px;
        padding: 0 26px 0 14px;
        
        .logo-block {
          align-items: flex-start;
          padding-top: 20px;
          
          img{
            width: 111px;
          }
        }
      }
  }
`;
