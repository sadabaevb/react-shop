import React from "react";
// import PropTypes from "prop-types";

import CircleIcon from "@mui/icons-material/Circle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";

const SelColors = (props) => {
  return (
    <>
      <Typography variant="h5">Sel Colors</Typography>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="primary"
        name="radio-buttons-group"
        sx={{ display: "flex", flexDirection: "row" }}
      >
        <FormControlLabel
          value="secondary"
          control={
            <Radio
              icon={
                <CircleIcon
                  color="secondary"
                  sx={{ width: "37px", height: "37px" }}
                />
              }
              checkedIcon={
                <CheckCircleIcon
                  color="secondary"
                  sx={{ width: "37px", height: "37px" }}
                />
              }
            />
          }
        />
        <FormControlLabel
          value="primary"
          control={
            <Radio
              icon={
                <CircleIcon
                  color="primary"
                  sx={{ width: "37px", height: "37px" }}
                />
              }
              checkedIcon={
                <CheckCircleIcon
                  color="primary"
                  sx={{ width: "37px", height: "37px" }}
                />
              }
            />
          }
        />
        <FormControlLabel
          value="success"
          control={
            <Radio
              icon={
                <CircleIcon
                  color="success"
                  sx={{ width: "37px", height: "37px" }}
                />
              }
              checkedIcon={
                <CheckCircleIcon
                  color="success"
                  sx={{ width: "37px", height: "37px" }}
                />
              }
            />
          }
        />
      </RadioGroup>
    </>
  );
};

SelColors.propTypes = {};

export default SelColors;
