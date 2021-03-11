/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Grid, Container } from '@material-ui/core';
import './country.scss';
import { useDispatch, useSelector } from 'react-redux';
import { country } from '../../redux/actions/country';

const Country = ({ req }) => {
  const currentCountry = req;
  // const countries = useSelector(state => state.countries);
  // const currentCapital = useSelector(state => state.countries.countryS.capital);
  // const currentPhoto = useSelector(state => state.countries.counrtyS.photo);
  // const currentInfo = useSelector(state => state.countries.counrtyS.info);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(country({ currentCountry }));
  }, [currentCountry, dispatch]);

  // const currentCountry = useSelector(state => state.country.country);
  const currentCapital = useSelector((state) => state.countries.capital);
  const currentPhoto = useSelector((state) => state.countries.photo);
  const currentInfo = useSelector((state) => state.countries.info);

  return (
    <Container className="country">
      <Grid container spacing={3}>
        <Grid item sm={3}>
          {currentCountry}
        </Grid>
        <Grid item sm={3}>
          {currentCapital}
        </Grid>
        <Grid item sm={3}>
          {currentPhoto}
        </Grid>
        <Grid item sm={3}>
          {currentInfo}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Country;
