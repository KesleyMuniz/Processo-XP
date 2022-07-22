import PropTypes from 'prop-types';
import React from 'react';
import { saveSessionStorage } from '../../services';
import TableRow from '../TableRow';

export default function TableActions({ itens }) {
  saveSessionStorage('actions', itens);
  return (
    <>
      {itens.map((item) => (
        <>
          <TableRow head="Ação" value={item.T} key={item.T} />
          <TableRow head="Empresa" value={item.name} key={item.name} />
          <TableRow head="Volume" value={item.v} key={item.v} />
          <TableRow head="valor" value={item.vw} key={item.vw} />
          <button type="button">Negociar</button>
        </>
      ))}
    </>
  );
}

TableActions.propTypes = {
  itens: PropTypes.shape({
    map: PropTypes.func.isRequired,
  }).isRequired,
};
