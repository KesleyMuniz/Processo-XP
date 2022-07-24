import PropTypes from 'prop-types';
import React from 'react';
import * as S from './style';

export default function AverageValue({ value }) {
  return (
    <S.ContainerAverageValue>
      <S.SpanAverageValue>Valor médio por volume</S.SpanAverageValue>
      <S.DivAverageValue>{(value).toFixed(2).replace('.', ',')}</S.DivAverageValue>
    </S.ContainerAverageValue>
  );
}

AverageValue.propTypes = {
  value: PropTypes.number.isRequired,
};
