import React from "react";
import PropTypes from "prop-types";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { drawerWidth } from "../Drawer/Drawer";
import SearchBar from "../SearchBar/SearchBar";
import MenuIcon from "@mui/icons-material/Menu";

const Header = ({ onDrawerToggle }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: 1201,
        // width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={onDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          ADA SHOP
        </Typography>
        <SearchBar />

        <Button variant="text" color="inherit">
          Sign in
        </Button>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  onDrawerToggle: PropTypes.func,
};

export default Header;
