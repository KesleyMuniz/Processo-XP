import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 5%;
  @media(max-width: 800px) {
    margin-top: 20%;
}
`;

export const BG = styled.div`
  background-image: linear-gradient(to right, #296e8a , #723854);
  height: 80%;
  position: fixed;
  width: 60%;
  border-radius: 5%;
  z-index: 999;
`;
export const Header = styled.header`
  display: flex;
  width: auto;
  justify-content: flex-end;
  button {
    background-color: #D16CA1;
    margin-right: 50px;
    margin-top: -18px;
    width: 77px;
    height: 37px;
    border-radius: 15px;
    border-style: none;
    font-size: 25px;
   :hover{
      background-color: white;
    }
  }
`;
