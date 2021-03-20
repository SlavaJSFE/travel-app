import React from 'react';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';

const HideSlider = ({ hideSlider }) => (
  <Button startIcon={<CloseIcon />} color="primary" variant="outlined" className="hideSlider" onClick={hideSlider}></Button>
);

export default HideSlider;
