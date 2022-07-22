import React, { useContext, useEffect, useState } from 'react';
import * as S from './Negotiate.style';
import Context from '../../context/Context';
import { getSessionStorage } from '../../services';

export default function Negotiate() {
  const { setNegotiation, selectedAction } = useContext(Context);
  const [buyVolumes, setBuy] = useState(0);
  const [Stock, setStock] = useState(null);
  const [calculatedOptions, setOptions] = useState(true);
  const [calculatedValue, setCalValue] = useState(0);

  useEffect(() => {
    if (Stock && buyVolumes) {
      if (!calculatedOptions) {
        const result = +Stock[0].vw * +buyVolumes.replace(',', '');
        setCalValue(result);
      } else {
        console.log(buyVolumes);
        const calculate = +buyVolumes.replace(',', '') / +Stock[0].vw;
        setCalValue(calculate);
      }
    }
  }, [buyVolumes, calculatedOptions]);

  const getStocks = () => {
    const allStocks = getSessionStorage('actions');
    const stocksData = allStocks.filter((el) => el.T === selectedAction);
    setStock(stocksData);
  };
  useEffect(() => {
    getStocks();
  }, [selectedAction]);

  return (
    <S.Container>
      <S.BG>
        <S.Header>
          <button
            type="button"
            onClick={() => { setNegotiation(false); }}
          >
            X
          </button>
        </S.Header>
        <div>
          {Stock ? (
            <>
              <div>
                <div>
                  <span>Volume disponível</span>
                  <div>{Stock[0].v}</div>
                </div>
                <div>
                  <span>Valor médio por volume</span>
                  <div>{(+Stock[0].vw).toFixed(2)}</div>
                </div>
              </div>
              <div>
                Opções de compras
              </div>
              <div>
                <label htmlFor="valueInputValue">
                  <input
                    type="radio"
                    id="valueInputValue"
                    name="optionsMethod"
                    onClick={() => setOptions(true)}
                  />
                  valor
                </label>
              </div>
              <label htmlFor="valueInputVolume">
                <input
                  type="radio"
                  id="valueInputVolume"
                  name="optionsMethod"
                  onClick={() => setOptions(false)}
                />
                volume
              </label>
              <div>
                <input
                  type="number"
                  id="buyInput"
                  placeholder="Numeros e virgula"
                  onChange={(e) => { setBuy(e.target.value); }}
                />
              </div>
              <div>
                {calculatedOptions ? (
                  <>
                    <span>Volume</span>
                    <div>{Math.floor(calculatedValue)}</div>
                  </>

                ) : (
                  <>
                    <span>Valor total</span>
                    <div>{calculatedValue.toFixed(2).replace('.', ',')}</div>
                  </>
                )}
              </div>
            </>
          ) : null}
        </div>
      </S.BG>
    </S.Container>
  );
}
