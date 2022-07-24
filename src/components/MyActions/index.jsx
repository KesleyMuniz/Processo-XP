import React, { useContext, useEffect, useState } from 'react';
import * as S from './Account.Style';
import Context from '../../context/Context';
import carryOutTransactions from '../../services/transaction';
import TableMyActions from '../TableMyActions';
import { getLocalStorage } from '../../services';

export default function Account() {
  const [typeOperation, setType] = useState(null);
  const [valueInput, setValue] = useState(null);
  const [isDisable, setDisable] = useState(true);
  const [confirmTransaction, setConfirm] = useState(null);
  const [resetState, setReset] = useState(false);
  const [response, setResponse] = useState(null);
  const { completeTransaction, setCompleted } = useContext(Context);

  const myStocksLocalStorage = getLocalStorage('myStocks');

  useEffect(() => {
    const resultTransactions = async () => {
      const result = await carryOutTransactions(valueInput, typeOperation);
      setResponse(result);
    };

    resultTransactions();

    setReset(true);
  }, [completeTransaction]);

  useEffect(() => {
    setType(null);
    setValue(null);
    setDisable(true);
    setConfirm(null);
    setCompleted(null);
    setReset(false);
  }, [resetState]);

  useEffect(() => {
    if (typeOperation) {
      setDisable(valueInput === null);
    }
  }, [typeOperation, valueInput]);
  return (
    <S.BG>
      <S.ContainerAllButtons>

        <S.ContainerButton>
          <S.Label htmlFor="buttonWithdraw">
            <S.InputRadio
              type="radio"
              id="buttonWithdraw"
              name="typeOperation"
              value="withdraw"
              onClick={(e) => {
                setType(e.target.value);
              }}
            />
            Sacar
          </S.Label>
        </S.ContainerButton>
        <S.ContainerButton>
          <S.Label htmlFor="buttonWithdraw">
            <S.InputRadio
              type="radio"
              id="buttonWithdraw"
              name="typeOperation"
              value="deposit"
              onClick={(e) => {
                setType(e.target.value);
              }}
            />
            Depositar
          </S.Label>
        </S.ContainerButton>
      </S.ContainerAllButtons>
      <S.InputNumber
        type="number"
        placeholder="Digite um valor"
        onChange={(e) => { setValue(e.target.value); }}
      />
      <button
        type="button"
        disabled={isDisable}
        onClick={() => { setConfirm(true); }}
      >
        Confirmar

      </button>
      {confirmTransaction && (
        <div>
          <h3>
            {`Tem certeza de deseja realizar um ${
              typeOperation === 'withdraw' ? 'Saque' : 'Deposito'} no valor de ${valueInput !== null ? valueInput : ''}`}

          </h3>
          <div>
            <button
              type="button"
              onClick={() => { setCompleted(true); }}
            >
              Sim
            </button>
            <button
              type="button"
              onClick={() => { setConfirm(false); }}
            >
              Não
            </button>
          </div>
        </div>
      )}
      {response && (
      <div>
        <div>
          Transação realizada com sucesso!
        </div>
        <div>
          {`Seu saldo atual é de ${response.AccountBalance}`}
        </div>
      </div>
      )}
      <TableMyActions itens={myStocksLocalStorage} />
    </S.BG>
  );
}
