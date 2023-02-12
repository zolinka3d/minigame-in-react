import styled from "styled-components";

export const Block = styled.div`
background-color: ${(props) => {if (props.boolean) return "#F7CAC9"; else return "#92A8D1"}};
height: ${(props) => props.width}px;
width: ${(props) => props.width}px;
border-radius: 50%;
position: absolute;
top:${(props) => props.top}px;
left: ${(props) => props.left}px;
`;
