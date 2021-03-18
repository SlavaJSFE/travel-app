import React from 'react';
import './Currency.scss';
import { useTranslation } from 'react-i18next';

import CurrencyRow from './CurrencyRow';

export default function CurrencyWidget({ currency, code }) {
  const { rates, base } = currency;
  const { USD, RUB, EUR } = rates;
  const { t } = useTranslation();
  const translate = t;

  return (
    <div className="currency-widget">
      <div className="currency-title">
        {translate('Currency Exchange')}
      </div>
      <CurrencyRow code={code} base={base} rate={1} />
      <CurrencyRow code="EU" base="EUR" rate={base === 'EUR' ? 1 : EUR.toFixed(2)} />
      <CurrencyRow code="US" base="USD" rate={USD.toFixed(2)} />
      <CurrencyRow code="RU" base="RUB" rate={RUB.toFixed(2)} />
    </div>
  );
}
