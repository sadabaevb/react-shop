import React from "react";
import PropTypes from "prop-types";
import { ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";

const ChooseSize = (props) => {
  const { size, onChange } = props;
  return (
    <div>
      <Typography variant="h5">Choose Size</Typography>
      <ToggleButtonGroup
        color="primary"
        value={size}
        exclusive
        onChange={onChange}
        aria-label="Platform"
      >
        <ToggleButton value="small">Small</ToggleButton>
        <ToggleButton value="medium">Medium</ToggleButton>
        <ToggleButton value="large">Large</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};

ChooseSize.propTypes = {
  size: PropTypes.string,
  onChange: PropTypes.func,
};

export default ChooseSize;
