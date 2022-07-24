import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: -20%;
  @media(max-width: 800px) {
    margin-top: -50%;
}
`;

export const BG = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
    position: absolute;
    background-color: #D16CA1;
    margin-right: -506px;
    margin-top: -387px;
    width: 77px;
    height: 37px;
    border-radius: 15px;
    border-style: none;
    font-size: 25px;
   :hover{
      background-color: white;
    }
    @media(max-width: 800px) {
    margin-right: -171px;
    margin-top: -375px;
}
  }
`;
