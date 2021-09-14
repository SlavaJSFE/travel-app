import React from 'react';
import './Currency.scss';
import { useTranslation } from 'react-i18next';

import CurrencyRow from './CurrencyRow';

export default function CurrencyWidget({ currency, code, curr }) {
  const { rates, base } = currency;
  // KOSTYLE is begin
  const { USD, RUB, EUR, PLN, NOK, CZK, CHF } = rates;
  const c = {};
  c.EUR = EUR;
  c.PLN = PLN;
  c.NOK = NOK;
  c.CZK = CZK;
  c.CHF = CHF;
  const cur = c[curr];
  const { t } = useTranslation();
  const translate = t;

  return (
    <div className="currency-widget">
      <div className="currency-title">
        {translate('Currency Exchange')}
      </div>
      <CurrencyRow code={code} base={curr} rate={1} />
      <CurrencyRow code="EU" base="EUR" rate={base === 'EUR' ? 1 : ((USD * EUR) / cur).toFixed(2)} />
      <CurrencyRow code="US" base="USD" rate={(USD / cur).toFixed(2)} />
      <CurrencyRow code="RU" base="RUB" rate={((RUB * USD) / cur).toFixed(2)} />
    </div>
  );
  // kostyle finish
}
