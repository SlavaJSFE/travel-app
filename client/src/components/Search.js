import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import countriesEn from '../constants/countries-en';
import countriesRu from '../constants/countries-ru';
import countriesPl from '../constants/countries-pl';
import './scss/Search.scss';
import setCountriesList from '../redux/search/actions';

export default function Search() {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  // const currentLanguage = useSelector((state) => state.language.language);

  // dispatch(setCountriesList(countriesPl));
  const countries = useSelector((state) => state.search.data);

  function handleSubmit(event) {
    event.preventDefault();
  }

  // useEffect(() => {
  //   const searchResult = countries.filter((country) => {
  //     let check = false;
  //     if (country.name.toLowerCase().includes(searchValue.toLowerCase())
  //     || country.capital.toLowerCase().includes(searchValue.toLowerCase())) {
  //       check = true;
  //     }
  //     return check;
  //   });
  //   dispatch(setCountriesList(searchResult));
  // }, [countries, dispatch, searchValue]);

  return (
    <form className="search" onSubmit={handleSubmit}>
      <div>
        <input
          type="search"
          placeholder="Search..."
          className="search-input"
          onChange={(e) => setSearchValue(e.target.value)}
          autoFocus
        />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          size="large"
          startIcon={<SearchIcon />}
        >
          Search
        </Button>
      </div>
    </form>
  );
}
