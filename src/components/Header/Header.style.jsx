import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  color: white;
  display: flex;
  width: 100%;
  height: 180px;
  background-image: linear-gradient(to right, #45b8e6 , #d66a9f);
  border-radius: 10px 5px 12em / 0 0 100%;
  justify-content: flex-end;

  @media(max-width: 800px) {
    justify-content: flex-start;
}
`;

export const DivName = styled.div`
  display: flex;
  position: absolute;
  font-family: 'Roboto', sans-serif;
  font-size: 200px;
  font-weight: 900;
  margin-top: -10px;
  margin-right: 400px;
`;

export const DivLastName = styled.div`
  position: absolute;
  font-family: 'Roboto', sans-serif;
  font-weight: 200;
  margin-top: 141px;
  margin-right: 200px;
  font-size: 40px;
  @media(max-width: 800px) {
    padding-left: 200px;
}
`;

export const DivUser = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  img {
    width: 15%;
  }
`;

export const ContainerDataUser = styled.span`
  display: flex; 
  width: 100%;
  margin-left: 10%;
  font-size: 150%;
  font-family: 'Roboto', sans-serif;
  font-weight: 800;
  span {
    display: flex; 
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }
  @media(max-width: 800px) {
    display: none; 
}
`;

export const ContainerSidebar = styled.div`
  display: flex;
`;
