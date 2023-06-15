import React from "react";
import loadImg from "../img/loading.svg";
import styled from "styled-components";

export const Spinner = ({size}) => {
    return(
        <SpinnerWrapper size={size}>
            <div className="loading-spinner" >
                <img src={loadImg} alt='Loding...' />
            </div>
        </SpinnerWrapper>

    )
}
const SpinnerWrapper = styled.div`
  @keyframes spinner {
    0% { transform: rotate(0deg) }
    100% { transform: rotate(360deg) }
  }

  display: grid;
  justify-content: center;
  align-items: center;

  //width: ?{props => props.size ? props.size : 24}px;
  
  .loading-spinner {
    img{
      width: ${props =>  props.size ? props.size : 24}px;
      height: ${props =>  props.size ? props.size : 24}px;
    }
    
    animation: spinner 1.5s linear infinite;
  }
`;