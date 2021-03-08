import './App.scss';
import React from 'react';
import { Button, Container } from '@material-ui/core';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import App2 from './app2';

function App() {
  return (
    <div className="App">
      <Container>
        <Button
          className="main-button"
          variant="contained"
          color="primary"
          endIcon={<KeyboardVoiceIcon />}
        >
          <h3>Travel App</h3>
        </Button>
        <App2 />
      </Container>
    </div>
  );
}

export default App;
