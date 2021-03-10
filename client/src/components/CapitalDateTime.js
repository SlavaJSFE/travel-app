import React from 'react';
import { useParams } from 'react-router-dom';
import countries from '../constants/countries';

export default function CapitalDateTime() {
  const { name } = useParams();
  const country = countries.find((el) => el.name.toLowerCase() === name);

  // function componentDidUpdate() {

  // }

  const calcTime = () => {
    const date = new Date();
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      timeZoneName: 'short',
      timezone: 'America/New_York',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    const hour = country.timeDifference;
    const resultDate = new Date(+date + hour * 60 * 6e4);
    return resultDate.toLocaleString('ru-RU', options);
  };

  return (
    <div className="">
      { calcTime()}
    </div>
  );
}
