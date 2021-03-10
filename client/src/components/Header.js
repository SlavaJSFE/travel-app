import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import {
  Container, TextField, Button,
} from '@material-ui/core';
import LogReg from './logreg/LogReg';

export default function Header() {
  return (
    <div className="header">
      <Container>
        <div className="top-bar">
          <div className="ribbon">
            <div className="logo">
              RTA
            </div>
          </div>
          <div className="header-links">
            <div>
              Language
            </div>
            <div>
              <LogReg />
            </div>
          </div>
        </div>
        <h1 className="motto">Expend Your World</h1>
        <form className="search">
          <TextField
            id="outlined-search"
            label="Search..."
            type="search"
            variant="outlined"
            size="small"
            className="search-input"
          />
          <Button
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<SearchIcon />}
          >
            Search
          </Button>
        </form>
      </Container>
    </div>
  );
}
