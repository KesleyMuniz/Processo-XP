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
  .SidebarContainer{
   display: none; 
  }
  @media(max-width: 800px) {
    justify-content: flex-start;
    .SidebarContainer{
   display: flex; 
   z-index: 999;
   margin-left: 20px;
   padding: 0;
  }
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
  @media(max-width: 800px) {
}
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

export const DivNameUser = styled.div`

  @media(max-width: 800px) {
    display: none; 
}
`;

export const DivBalanceUser = styled.div`

  @media(max-width: 800px) {
    display: none; 
}
`;
