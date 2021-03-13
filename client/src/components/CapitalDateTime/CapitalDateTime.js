/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import './CapitalDateTime.scss';

export default function CapitalDateTime({ country }) {
  const classDateTime = {
    day: 'capitalDateTime-common__day',
    month: 'capitalDateTime-common__month',
    year: 'capitalDateTime-common__year',
    time: 'capitalDateTime-common__time',
  };

  const calcTime = () => {
    const getLocal = () => {
      const selectLang = document.querySelector('.selectLang').value;
      switch (selectLang) {
        case 'en|en':
          return 'en-EN';
        case 'en|pl':
          return 'pl-PL';
        case 'en|ru':
          return 'ru-RU';
        default:
          return 'en-EN';
      }
    };

    const date = new Date();
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    const hour = country.timeDifference;
    const preResultDate = new Date(+date + hour * 60 * 6e4).toLocaleString(getLocal(), options).split(', ');

    const separatorMonthDay = (el) => {
      if (typeof Number(el) === 'number') {
        const elem = el.split(' ');
        const el1 = elem[0];
        const el2 = elem[1];
        return [el2, ' ', el1];
      }
      return el;
    };

    const resultDate = preResultDate.map((el) => (
      <p className={`${el === preResultDate[0] ? Object.values(classDateTime)[0] : ''}${el === preResultDate[1] ? Object.values(classDateTime)[1] : ''}${el === preResultDate[2] ? Object.values(classDateTime)[2] : ''}${el === preResultDate[3] ? Object.values(classDateTime)[3] : ''}`}>
        {el === preResultDate[1] ? separatorMonthDay(el) : el}
      </p>
    ));
    // eslint-disable-next-line no-console
    return resultDate;
  };

  const [currentTime, setCurrentTime] = useState(calcTime());

  useEffect(() => {
    const indicator = setInterval(() => {
      setCurrentTime(calcTime());
    }, 1000);

    return () => {
      clearInterval(indicator);
    };
  }, [currentTime]);

  return (
    <div className="capitalDateTime">
      <div className="capitalDateTime-common">
        {calcTime()}
      </div>
    </div>
  );
}
