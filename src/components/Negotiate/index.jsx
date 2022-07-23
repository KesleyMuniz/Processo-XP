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
        const result = +Stock[0].vw * buyVolumes;
        if (!result < 1) setCalValue(result);
      } else {
        const calculate = buyVolumes / +Stock[0].vw;
        setCalValue(calculate);
      }
    }
  }, [buyVolumes, calculatedOptions]);

  const calculateButton = (value, operation) => {
    let Value;
    if (operation === 'sum') {
      Value = ((+buyVolumes) + (+value)).toFixed(2);
    } else {
      const result = ((+buyVolumes) - (+value)).toFixed(2);
      if (result < 1) {
        Value = 0.00;
        setCalValue(0);
      } else {
        Value = result;
      }
    }
    setBuy(Value);
  };

  const getStocks = () => {
    const allStocks = getSessionStorage('actions');
    const stocksData = allStocks.filter((el) => el.T === selectedAction);
    setStock(stocksData);
  };
  useEffect(() => {
    getStocks();
  }, [selectedAction]);

  useEffect(() => {
    setBuy(0.00);
    setCalValue(0.00);
  }, [calculatedOptions]);
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
                    checked={calculatedOptions}
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
                  checked={!calculatedOptions}
                  onClick={() => setOptions(false)}
                />
                volume
              </label>
              <div>
                <input
                  type="number"
                  id="buyInput"
                  placeholder="Numeros e virgula"
                  value={buyVolumes}
                  onChange={(e) => { setBuy(e.target.value); }}
                />
              </div>
              <div>
                {calculatedOptions ? (
                  <>
                    <span>Volume</span>
                    <div>{Math.floor(calculatedValue)}</div>
                    <div>
                      <button
                        type="button"
                        value={+Stock[0].vw}
                        onClick={(e) => {
                          calculateButton(e.target.value, 'sum');
                        }}
                      >
                        +

                      </button>
                    </div>
                    <div>
                      <button
                        type="button"
                        value={+Stock[0].vw}
                        onClick={(e) => {
                          calculateButton(e.target.value, 'subtraction');
                        }}
                      >
                        -
                      </button>
                    </div>
                  </>

                ) : (
                  <>
                    <span>Valor total</span>
                    <div>{calculatedValue.toFixed(2).replace('.', ',')}</div>
                    <div>
                      <button
                        type="button"
                        onClick={() => {
                          setBuy(buyVolumes + 1);
                        }}
                      >
                        +

                      </button>
                    </div>
                    <div>
                      <button
                        type="button"
                        onClick={() => {
                          calculateButton(1, 'subtraction');
                        }}
                      >
                        -
                      </button>
                    </div>
                  </>
                )}
              </div>
            </>
          ) : <div>Loading...</div>}
        </div>
      </S.BG>
    </S.Container>
  );
}
