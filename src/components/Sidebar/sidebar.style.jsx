import styled from 'styled-components';

export const SpanSidebarContainer = styled.div`
  display: none;
  @media(max-width: 800px) {
  display: flex;
  width: 800px;
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

export const ULContainer = styled.ul`
  display: flex; 
  align-items: flex-end;
  flex-direction: column;
  width: 100%;
  margin-right: 10%;
  font-size: 150%;
  font-family: 'Roboto', sans-serif;
  font-weight: 800;
`;

export const LI = styled.li`
    display: flex;
`;
