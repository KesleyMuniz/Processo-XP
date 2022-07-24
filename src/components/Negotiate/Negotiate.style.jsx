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
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, #296e8a , #723854);
  height: 80%;
  position: fixed;
  width: 60%;
  border-radius: 5%;
  z-index: 999;
  font-size: 30px;
`;
export const Header = styled.header`
  display: flex;
  width: auto;
  justify-content: flex-end;
  button {
    position: absolute;
    background-color: #D16CA1;
    margin-right: -258px;
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

export const ContainerButtonClosed = styled.div`
  position: absolute;
  top: 0px;
  right: 189px;
  z-index: 9999;
`;

export const ContainerUserBalance = styled.div`
  position: absolute;
  top: 190px;
  right: 110px;
  div{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const ContainerPurchaseOptions = styled.div`
    position: absolute;
    top: 12px;
    right: 345px;
    font-size: 40px;
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  input {
    margin: 20px;

  }
`;

export const ContainerInputValue = styled.div`
  position: absolute;
  width: 100%;
  top: 500px;
  right: -420px;
  input {
    font-size: 20px;
    border-radius: 5%;
    text-align: center;
    width: 300px;
    height: 100px;
  }
`;

export const ContainerInputBuy = styled.div`
  position: absolute;
  width: 100%;
  top: 641px;
  right: -460px;
  button {
    font-size: 20px;
    border-radius: 5%;
    text-align: center;
    width: 200px;
    height: 50px;
  }
`;

export const ContainerVolumeFinal = styled.div`
  position: absolute;
  top: 304px;
  right: 79px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
