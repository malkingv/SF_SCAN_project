import React from "react";
import styled from "styled-components";

const Button = ({name, size, height, bg, color, onClick}) => {
    return(
        <ButtonWrapper  size={size} height={height} bg={bg} color={color} onClick={onClick} >
            {name}
        </ButtonWrapper>
    )
}
export default Button

const ButtonWrapper = styled.button`
  border: none;
  border-radius: 5px;
  
  width: 100%;
  height: 100%;
  background-color: ${props => props.bg ? props.bg : '#5970FF'};
  color: ${props => props.color ? props.color : '#fff'};
  font-size: ${props => props.size}px;
  line-height: ${props => props.height}px;
  cursor: pointer;
`;
