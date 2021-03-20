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

const ShowSlider = ({ showSlider }) => (
  // <button type="button" className="btn warrning" onClick={showSlider}>
  //   SHOW
  // </button>
  <Button variant="outlined" color="primary" onClick={showSlider}>
    SHOW
  </Button>
);

export default ShowSlider;
