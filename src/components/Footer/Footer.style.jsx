import styled from 'styled-components';

export const BG = styled.div`
display: flex;
position: fixed;
justify-content: center;
bottom: 0px;
width: 100%;
height: 10%;
background-image: linear-gradient(to right, #45b8e6 , #d66a9f);

`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const Button = styled.div`
 display: flex;
margin-left: 2px;
  button {
    border-style: none;
    background: none;
    box-shadow: 1px 2px 2px black;
    border-radius: 50% ;

  img {
    border-radius: 50% ;
    border: 2px solid black;
    :hover {
      background-color: #ffffff
    }
  }

`;
