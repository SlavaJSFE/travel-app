import React, {useEffect} from 'react';
import './App.scss';
import {Grid, Button, Container} from '@material-ui/core';
import {BrowserRouter, Redirect, Route, Switch, NavLink} from "react-router-dom";
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import LogReg from './components/logreg/LogReg';
import Login from './components/authorization/Login';
import Registration from './components/authorization/Registration';
import {useDispatch, useSelector} from "react-redux";
import {auth} from "./actions/user";
import Country from './components/countrypage/Country';

function App() {
  const isAuth = useSelector(state => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth())
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Container>
          <Grid container   spacing={3}>
            <Grid item sm={9}>
              <Button
                className="main-button"
                variant="contained"
                color="primary"
                endIcon={<KeyboardVoiceIcon />}
              >
              <h3>Travel App</h3>
              </Button>
            </Grid>
            <LogReg />
          </Grid>
        </Container>
        <Container>
          <Grid container   spacing={3}>
            <Grid item sm={3}>
              <NavLink to="/country/italy">Italy</NavLink>
            </Grid>
            <Grid item sm={3}>
              <NavLink to="/country/germany">Germany</NavLink>
            </Grid>
            <Grid item sm={3}>
              <NavLink to="/country/france">France</NavLink>
            </Grid>
            <Grid item sm={3}>
              <NavLink to="/country/polska">Polska</NavLink>
            </Grid>
            
          </Grid>
        </Container>
        <Container>
          <Switch>
            <Route path="/country/italy" render={(props) => <Country req="7" />} />
            {/* <Route path="/country/germany" component={Country("germany")} />
            <Route path="/country/france" component={Country("france")} />
            <Route path="/country/polska" component={Country("polska")} /> */}
          </Switch>
        </Container>
        { !isAuth && <Switch>
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
        </Switch>}
      </div>
    </BrowserRouter>
  );
}

export default App;
