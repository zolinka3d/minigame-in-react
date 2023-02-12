import styled from "styled-components";

export const Man = styled.img`
height: ${(props) => props.height}px;
//background-color: lightgray;
position: absolute;
top: ${(props) => props.top}px;
left: ${(props) => {
  if(props.direction === "lewo"){
    return (props.left - props.width/2);
  } else if (props.direction === "przod") {
    return props.left - 3*props.width/4;
  } else if (props.direction === "tyl") {
    return props.left - props.width/4;
  } else {
    return props.left;
  }
}}px;
clip-path: ${(props) => {
  if(props.direction === "przod") return "inset(30px 0% 0px 75%)";
  else if (props.direction === "tyl") return "inset(30px 50% 0px 25%)";
  else if (props.direction === "lewo") return "inset(30px 25% 0px 50%)";
  else if (props.direction === "prawo") return "inset(30px 75% 0px 0%)";
}}
//clip-path: ${(props) => props.clip};
`;
