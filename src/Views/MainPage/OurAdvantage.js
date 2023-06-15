import React from "react";
import styled from "styled-components";
import Carousel from "./Carousel";
import image from "./../../img/OurAdvantage.svg"

const OurAdvantage = () => {
  return(
    <OurAdvantageWrapper>
      <div className={'ferry-text head'}>Почему именно мы</div>
      <Carousel/>
      <div className={'image-block'}>
        <img className={'image'} src={image} alt={'image'}/>
      </div>
    </OurAdvantageWrapper>
  )
}

export default OurAdvantage

const OurAdvantageWrapper = styled.div`
  .image{
    margin: 50px 0 100px;
    width: 100% ;
  }

  @media (max-width: 1439px) {
    .head{
      width: 70%;
    }
    .image{
      margin: 80px 0 ;
      height: 400px;
      width: unset;
      overflow: hidden;
    }
  }
`;