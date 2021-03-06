import './App.scss';
import React, { useEffect, useState } from 'react';
import { Button, Container } from '@material-ui/core';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';

function App() {
  const [count, setCount] = useState([]);

  useEffect(() => {
    setCount(count + 1);
  }, []);
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
      </Container>
    </div>
  );
}

export default App;
