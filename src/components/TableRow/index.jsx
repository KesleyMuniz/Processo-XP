import PropTypes from 'prop-types';
import React from 'react';
import * as S from './Table.style';

export default function TableRow({ head, value }) {
  return (
    <S.Table>
      <S.Thead>
        <S.Tr>
          <S.Th>{head}</S.Th>
        </S.Tr>
      </S.Thead>
      <S.Tbody>
        <S.Tr>
          <S.Td>{value}</S.Td>
        </S.Tr>
      </S.Tbody>
    </S.Table>
  );
}

TableRow.propTypes = {
  head: PropTypes.string.isRequired,
  value: PropTypes.string,
};

TableRow.defaultProps = {
  value: '',
};
