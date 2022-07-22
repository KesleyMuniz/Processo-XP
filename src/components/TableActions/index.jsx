import PropTypes from 'prop-types';
import React from 'react';
import { saveSessionStorage } from '../../services';
import * as S from './Table.style';

export default function TableActions({ itens }) {
  saveSessionStorage('actions', itens);
  return (
    <S.Table>
      <S.Thead>
        <S.Tr>
          <S.Th>Ação</S.Th>
          <S.Th>Empresa</S.Th>
          <S.Th>Volume</S.Th>
          <S.Th>Valor</S.Th>
          <S.Th>Negociar</S.Th>
        </S.Tr>
      </S.Thead>
      <S.Tbody>
        {itens.map((item) => (
          <S.Tr>
            <S.Td>{item.T}</S.Td>
            <S.Td>{item.name}</S.Td>
            <S.Td>{item.v}</S.Td>
            <S.Td>{item.vw}</S.Td>
            <S.Td>
              <button type="button">
                <img src="Test.png" alt="Imagem test" />
              </button>
            </S.Td>
          </S.Tr>
        ))}
      </S.Tbody>
    </S.Table>
  );
}

TableActions.propTypes = {
  itens: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }).isRequired,
};
