import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import './Search.scss';
import { useTranslation } from 'react-i18next';
import { setSearchResult } from '../../redux/countries/actions';

export default function Search() {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const translate = t;

  function handleSubmit(event) {
    event.preventDefault();
  }

  const countries = useSelector((state) => state.countries.list);

  useEffect(() => {
    const searchResult = countries.filter((country) => {
      let check = false;
      if (country.name.toLowerCase().includes(searchValue.toLowerCase())
      || country.capital.toLowerCase().includes(searchValue.toLowerCase())) {
        check = true;
      }
      return check;
    });
    dispatch(setSearchResult(searchResult));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return (
    <form className="search" onSubmit={handleSubmit}>
      <div className="search-complex">
        <input
          type="search"
          placeholder={`${translate('Search')}...`}
          className="search-input"
          onChange={(e) => setSearchValue(e.target.value)}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus
        />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          size="large"
          startIcon={<SearchIcon />}
        >
          {translate('Search')}
        </Button>
      </div>
    </form>
  );
}
