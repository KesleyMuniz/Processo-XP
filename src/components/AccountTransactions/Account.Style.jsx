import styled from 'styled-components';

export const BG = styled.div`
  font-family: 'Roboto', sans-serif;
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

export const ContainerAllButtons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 25%;
`;

export const ContainerButton = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  font-weight: 900;
`;

export const InputRadio = styled.input`
margin-right: 5px;
`;

export const InputNumber = styled.input`
width: 200px;
height: 50px;
border-radius: 5%;
border-style: none;
text-align: center;
`;
