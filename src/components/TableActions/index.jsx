import PropTypes from 'prop-types';
import React, { useContext, useId } from 'react';
import { saveSessionStorage } from '../../services';
import * as S from './Table.style';
import Context from '../../context/Context';

export default function TableActions({ itens }) {
  saveSessionStorage('actions', itens);
  const randomID = () => useId();
  const { setNegotiation, setSelected } = useContext(Context);
  return (
    <S.Table>
      <S.Thead>
        <S.Tr>
          <S.Th>Ação</S.Th>
          <S.Th>Empresa</S.Th>
          <S.Th>Volume</S.Th>
          <S.Th>Abertura</S.Th>
          <S.Th>Baixo</S.Th>
          <S.Th>Médio</S.Th>
          <S.Th>Alto</S.Th>
          <S.Th>Negociar</S.Th>
        </S.Tr>
      </S.Thead>
      <S.Tbody>
        {itens.map((item) => (
          <S.Tr key={`${randomID()}`}>
            <S.Td>{item.T}</S.Td>
            <S.Td>{item.name}</S.Td>
            <S.Td>{(item.v).toFixed(0)}</S.Td>
            <S.Td>{(item.o).toFixed(2)}</S.Td>
            <S.Td>{(item.l).toFixed(2)}</S.Td>
            <S.Td>{(item.vw).toFixed(2)}</S.Td>
            <S.Td>{(item.h).toFixed(2)}</S.Td>
            <S.Td>
              <button
                value={item.T}
                type="button"
                onClick={(e) => {
                  setNegotiation(true);
                  setSelected(e.target.value);
                }}
              >
                Negociar
              </button>
            </S.Td>
          </S.Tr>
        ))}
      </S.Tbody>
    </S.Table>
  );
}

TableActions.propTypes = {
  itens: PropTypes.instanceOf(Array).isRequired,
};
