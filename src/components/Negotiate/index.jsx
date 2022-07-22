import React, { useContext, useEffect, useState } from 'react';
import * as S from './Negotiate.style';
import Context from '../../context/Context';
import { getSessionStorage } from '../../services';

export default function Negotiate() {
  const { setNegotiation, selectedAction } = useContext(Context);
  const [buyVolumes, setBuy] = useState(0);
  const [valueVolumes, setValue] = useState(0);
  const [Stock, setStock] = useState(null);

  const getStocks = () => {
    const allStocks = getSessionStorage('actions');
    const stocksData = allStocks.filter((el) => el.T === selectedAction);
    setStock(stocksData);
  };
  useEffect(() => {
    getStocks();
  }, [selectedAction]);
  console.log(Stock);
  return (
    <S.Container>
      <S.BG>
        <S.Header>
          <button type="button" onClick={() => { setNegotiation(false); }}>X</button>
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
                  <span>Valor por volume</span>
                  <div>{(+Stock[0].vw).toFixed(2)}</div>
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="volumeDisponivel">
                    Volume
                    <input type="number" min={1} id="volumeDisponivel" onChange={(e) => { setBuy(e.target.value); }} />
                  </label>
                </div>
                <div>
                  <label htmlFor="volumeActions">
                    Valor
                    <input type="number" min="1" id="volumeActions" onChange={(e) => { setValue(e.target.value); }} />
                  </label>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </S.BG>
    </S.Container>
  );
}
