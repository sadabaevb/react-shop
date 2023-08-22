import React from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";

import Background from "../../../../assets/images/herobackground.png";
import Prada from "../../../../assets/images/prada.svg";
import Calvin from "../../../../assets/images/calvin.svg";
import Versace from "../../../../assets/images/versace.svg";
import Zara from "../../../../assets/images/zara.svg";
import Gucci from "../../../../assets/images/gucci.svg";

// import PropTypes from "prop-types";

const Hero = (props) => {
  const isMobile = useMediaQuery("(max-width: 500px)");
  console.log("isMobile: ", isMobile);
  return (
    <Box>
      <Grid
        container
        sx={{
          height: "70vh",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundImage: `url(${Background})`,
        }}
      >
        <Grid
          item
          container
          alignItems="center"
          xs={12}
          sm={12}
          md={6}
          sx={{ paddingLeft: "100px" }}
        >
          <Grid item>
            <Typography
              // variant="h1"
              sx={{
                fontFamily: "Integral CF Regular",
                fontWeight: 700,
                fontSize: "2em",
                lineHeight: "50px",
                marginBottom: 2,
              }}
            >
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </Typography>
            <Typography variant="subtitle1" fontSize="16px">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </Typography>
            <Button>Shop Now</Button>
            <List sx={{ display: "flex" }}>
              <ListItem>
                <ListItemText primary="200+" secondary="International Brands" />
                <Divider orientation="vertical" />
              </ListItem>
              <ListItem>
                <ListItemText primary="200+" secondary="International Brands" />
                <Divider orientation="vertical" />
              </ListItem>
              <ListItem>
                <ListItemText primary="200+" secondary="International Brands" />
                <Divider orientation="vertical" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          2
        </Grid>
      </Grid>

      <Box
        sx={{
          background: "#000000",
          display: "flex",
          justifyContent: "space-around",
          padding: "30px 0",
          alignContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <img height="36px" src={Versace} alt="vercase" />
        <img height="36px" src={Zara} alt="zara" />
        <img height="36px" src={Gucci} alt="gucci" />
        <img height="36px" src={Prada} alt="prada" />
        <img height="36px" src={Calvin} alt="calvin" />
      </Box>
    </Box>
  );
};

Hero.propTypes = {};

export default Hero;
