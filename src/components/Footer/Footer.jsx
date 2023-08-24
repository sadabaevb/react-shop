import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Box, Divider, IconButton, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

import Visa from "assets/images/visa.svg";
import { LogoText } from "components/Header/styles";

import { BottomFooter, FooterContainer, NavList } from "./styles";

const Footer = (props) => {
  return (
    <FooterContainer component="footer">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mb: { sx: "40px", lg: "50px" },
          flexWrap: "wrap",
        }}
      >
        <Box>
          <LogoText>Shop.Co</LogoText>
          <Typography variant="body1" component="p">
            We have clothes that suits your style and <br /> which you’re proud
            to wear. From women to men.
          </Typography>
          <Box>
            <IconButton>
              <GitHubIcon />
            </IconButton>
            <IconButton>
              <GitHubIcon />
            </IconButton>
            <IconButton>
              <GitHubIcon />
            </IconButton>
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </Box>
        </Box>
        <NavList>
          <Typography variant="h6">Company</Typography>
          <Link>About</Link>
          <Link>About</Link>
          <Link>About</Link>
          <Link>About</Link>
        </NavList>
        <NavList>
          <Typography variant="h6">Company</Typography>
          <Link>About</Link>
          <Link>About</Link>
          <Link>About</Link>
          <Link>About</Link>
        </NavList>
        <NavList>
          <Typography variant="h6">Company</Typography>
          <Link>About</Link>
          <Link>About</Link>
          <Link>About</Link>
          <Link>About</Link>
        </NavList>
        <NavList>
          <Typography variant="h6">Company</Typography>
          <Link>About</Link>
          <Link>About</Link>
          <Link>About</Link>
          <Link>About</Link>
        </NavList>
      </Box>
      <Divider />
      <BottomFooter>
        <Typography variant="caption" sx={{ mb: "16px" }}>
          Shop.co © 2000-2023, All Rights Reserved
        </Typography>
        <Box>
          <img src={Visa} alt="visa" />
          <img src={Visa} alt="visa" />
          <img src={Visa} alt="visa" />
          <img src={Visa} alt="visa" />
        </Box>
      </BottomFooter>
    </FooterContainer>
  );
};

Footer.propTypes = {};

export default Footer;
