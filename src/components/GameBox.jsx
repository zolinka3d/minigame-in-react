import styled from "styled-components";

export const GameBox = styled.div`
overflow: hidden;
position: relative;
height: ${(props) => props.height}px;
width: ${(props) => props.width}px;
background-color: #f7f2ee;
border-radius: 10px;
`