import PropTypes from 'prop-types';
import React from 'react';

export default function TableActions({ itens }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Ação</th>
          <th>Quantidade</th>
          <th>Valor(R$)</th>
          <th>Negociar</th>
        </tr>
      </thead>
      <tbody>
        {itens.map((item) => (
          <tr key={`${item.T}`}>
            <td>{item.T}</td>
            <td>{+item.v}</td>
            <td>{(+item.c).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TableActions.propTypes = {
  itens: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }).isRequired,
};
