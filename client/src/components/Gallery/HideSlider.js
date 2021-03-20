import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const HideSlider = ({ hideSlider }) => (
  <Button variant="outlined" onClick={hideSlider}>
    HIDE
  </Button>
);

export default HideSlider;
