import styled from 'styled-components';

export const BG = styled.div`
display: flex;
justify-content: center;
align-items: center;
  position: fixed;
  z-index: 1000;
  right: 538px;
  top: 450px;
  border-radius: 10px;
  background-color: #a0244d
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 800px;
  height: 300px;

`;

export const Div = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 600;
  margin: 50px;
`;

export const ButtonContainer = styled.div`
  display: flex;

`;

export const ButtonYes = styled.button`
margin-left: 50px;
margin-right: 50px;
width: 150px;
height: 50px;
box-shadow: 5px 5px 10px black;
  :hover{
    font-size: 20px;
    border-style: none;
    background-color: #c8fcc8;
    box-shadow: none;
  }
`;

export const ButtonNo = styled.button`
margin-left: 50px;
margin-right: 50px;
width: 150px;
height: 50px;
box-shadow: -5px 5px 10px black;
:hover{
    font-size: 20px;
    border-style: none;
    background-color: #faa7a7;
    box-shadow: none;
  }
`;
