import React, { useEffect, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import countries from '../constants/countries';
import './scss/Search.scss';

export default function Search() {
  const [searchValue, setSearchValue] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
  }

  useEffect(() => {
    console.log(countries);
  }, [searchValue]);

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
