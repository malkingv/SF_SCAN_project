import React from "react";
import LinkToSearch from "./LinkToSearch";
import OurAdvantage from "./OurAdvantage";
import OurCosts from "./OurCosts";
import styled from "styled-components";

const MainPage = () => {
    return(
        <MainPageWrapper>
            <LinkToSearch />
            <OurAdvantage />
            <OurCosts />
        </MainPageWrapper>
    )
}

export default MainPage

const MainPageWrapper = styled.div`
  
  .head{
    font-size: 45px;
    line-height: 54px;
    margin-bottom: 70px;
  }
  @media (max-width: 1439px) {
    .head {
      font-size: 28px;
      line-height: 34px;
      margin-bottom: 37px;
    }
  }
`;
