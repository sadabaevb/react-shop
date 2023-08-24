import React from "react";
// import PropTypes from "prop-types";

import { Box, InputAdornment } from "@mui/material";
import { Email } from "@mui/icons-material";

import {
  BannerContainer,
  BannerText,
  ButtonBanner,
  EmailTextField,
} from "./styles";

const Banner = (props) => {
  return (
    <BannerContainer>
      <BannerText>STAY UPTO DATE ABOUT OUR LATEST OFFERS</BannerText>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <EmailTextField
          sx={{ py: 1, px: 2 }}
          placeholder="Enter your email address"
          startAdornment={
            <InputAdornment position="start">
              <Email />
            </InputAdornment>
          }
        />
        <ButtonBanner sx={{ py: 1, px: 2 }}>
          Subscribe to Newsletter
        </ButtonBanner>
      </Box>
    </BannerContainer>
  );
};

Banner.propTypes = {};

export default Banner;
