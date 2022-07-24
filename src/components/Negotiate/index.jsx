import React, { useContext, useEffect, useState } from 'react';
import * as S from './Negotiate.style';
import Context from '../../context/Context';
import { getSessionStorage } from '../../services';
import ButtonBuy from '../ButtonBuy';
import UserBalance from '../UserBalance';
import * as Com from '../commons';

export default function Negotiate() {
  const { selectedAction, setPurchase, statusDisable } = useContext(Context);

  const [buyVolumes, setBuy] = useState(0);
  const [Stock, setStock] = useState(null);
  const [calculatedOptions, setOptions] = useState(true);
  const [calculatedValue, setCalValue] = useState(0);

  useEffect(() => {
    if (calculatedOptions) {
      setPurchase({
        Stock,
        volume: +calculatedValue.toFixed(2),
        value: +buyVolumes,
      });
    } else {
      setPurchase({
        Stock,
        volume: +buyVolumes,
        value: +calculatedValue.toFixed(2),
      });
    }
  }, [Stock, buyVolumes, calculatedValue]);

  useEffect(() => {
    if (Stock && buyVolumes) {
      if (!calculatedOptions) {
        const result = +Stock[0].vw * buyVolumes;
        if (!result < 1) setCalValue(result);
      } else {
        const calculate = +buyVolumes / +Stock[0].vw;
        setCalValue(calculate);
      }
    }
  }, [buyVolumes, calculatedOptions]);

  const VerifyToFixed = (value) => {
    if (calculatedOptions) {
      return value.toFixed(2);
    }
    return value;
  };

  const calculateButton = (value, operation) => {
    let Value;
    if (operation === 'sum') {
      Value = ((+buyVolumes) + (+value) + (0.01)).toFixed(2);
    } else {
      const result = (+buyVolumes) - (+value);
      if (result < 1) {
        Value = 0.00;
        setCalValue(0);
      } else {
        Value = VerifyToFixed(result);
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
          <Com.ButtonClose />
        </S.Header>
        <div>
          {Stock ? (
            <>
              <div>
                <UserBalance />
                <Com.AverageValue value={+Stock[0].vw} />
              </div>
              <Com.PurchaseOptions calculatedOptions={calculatedOptions} setOptions={setOptions} />
              <Com.InputValue
                buyVolumes={buyVolumes}
                setBuy={setBuy}
              />
              <div>
                {calculatedOptions ? (
                  <>
                    <Com.AvailableVolume
                      value={Stock[0].v}
                      calculatedValue={calculatedValue}
                      calculatedOptions
                    />
                    <Com.FinalVolume value={calculatedValue} />
                    <Com.PlusAndMinusButtons
                      value={+Stock[0].vw}
                      disabled={statusDisable}
                      calculateButton={calculateButton}
                      type="sum"
                      name="+"
                    />
                    <Com.PlusAndMinusButtons
                      value={+Stock[0].vw}
                      disabled={false}
                      calculateButton={calculateButton}
                      type="subtraction"
                      name="-"
                    />
                  </>

                ) : (
                  <>
                    <Com.AvailableVolume
                      value={Stock[0].v}
                      calculatedValue={buyVolumes}
                      calculatedOptions={false}
                    />
                    <Com.Amount value={calculatedValue} />
                    <Com.NegativeAndPositiveButtons
                      disabled={statusDisable}
                      subtraction={false}
                      functionOption={setBuy}
                      buyVolumes={buyVolumes}
                      name="+"
                    />
                    <Com.NegativeAndPositiveButtons
                      disabled={false}
                      subtraction
                      functionOption={calculateButton}
                      name="-"
                    />
                  </>
                )}
              </div>
              <ButtonBuy />
            </>
          ) : <div>Loading...</div>}
        </div>
      </S.BG>
    </S.Container>
  );
}
