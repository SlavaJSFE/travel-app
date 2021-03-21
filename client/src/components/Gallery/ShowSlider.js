import React from 'react';
import Button from '@material-ui/core/Button';
import ZoomInIcon from '@material-ui/icons/ZoomIn';

const ShowSlider = ({ showSlider }) => (
  <Button startIcon={<ZoomInIcon />} className="showSlider" variant="outlined" color="primary" onClick={showSlider} />
);

export default ShowSlider;
