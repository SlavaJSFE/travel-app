import React, {useState, useEffect} from 'react';
import {Grid, Button, Container} from '@material-ui/core';
import './country.scss'
import {useDispatch, useSelector} from "react-redux";
import {country} from "../../actions/country";

const Country = (props) => {
    const currentCountry = props.req; 
    // useSelector(state => state.countries.countryS.country);
    // const currentCapital = useSelector(state => state.countries.countryS.capital);
    // const currentPhoto = useSelector(state => state.countries.counrtyS.photo);
    // const currentInfo = useSelector(state => state.countries.counrtyS.info);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //   dispatch(country(reqCountry));
    // }, []);

    // const currentCountry = useSelector(state => state.country.country);
    // const currentCapital = useSelector(state => state.country.capital);
    // const currentPhoto = useSelector(state => state.country.photo);
    // const currentInfo = useSelector(state => state.country.info);

    return (
        <Container className='country'>
          <Grid container   spacing={3}>
            <Grid item sm={3}>
              {currentCountry}       
            </Grid>
            {/* <Grid item sm={3}>
              {currentCapital}
            </Grid> */}
            {/* <Grid item sm={3}>
              {currentPhoto}
            </Grid>
            <Grid item sm={3}>
              {currentInfo}
            </Grid> */}
          </Grid>
        </Container>
    );
};

export default Country;