import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Badge,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Drawer,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Close, Menu, Search } from "@mui/icons-material";
import {
  CloseButton,
  LogoText,
  MenuButton,
  MyHeader,
  NavLink,
  NavMenu,
  OfferText,
  SearchBar,
  SignUpText,
  TopHeader,
} from "./styles";
import MenuSimple from "./DropDown";

const Header = () => {
  const [isShowOffer, setIsShowOffer] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const totalQuantityInLS =
    JSON.parse(localStorage.getItem("__ada-shop:cart"))?.totalQuantity || 0;

  const [totalQuantity, setTotalQuantity] = useState(totalQuantityInLS);

  const toggleMenu = () => {
    setOpenMenu((open) => !open);
  };

  const toggleCart = () => {
    setOpenCart((open) => !open);
  };

  const handleClose = () => {
    console.log("isShowOffer: ", isShowOffer);

    setIsShowOffer((open) => !open);
  };

  useEffect(() => {
    window.addEventListener("storage", () => {
      const totalQuantityInLS =
        JSON.parse(localStorage.getItem("__ada-shop:cart"))?.totalQuantity || 0;
      setTotalQuantity(totalQuantityInLS);
    });
  }, []);

  return (
    <AppBar position="sticky" sx={{ background: "#fff", boxShadow: 0 }}>
      <TopHeader radmir={23} isShowOffer={isShowOffer}>
        <OfferText align="center">
          Sign up and get 20% off to your first order.
          <SignUpText>Sign Up Now</SignUpText>
        </OfferText>

        <CloseButton onClick={handleClose}>
          <Close />
        </CloseButton>
      </TopHeader>
      <MyHeader>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <MenuButton onClick={toggleMenu}>
            <Menu />
          </MenuButton>
          <LogoText variant="h1">SHOP.CO</LogoText>
        </Box>

        <NavMenu>
          <MenuSimple />
          <NavLink>On Sale</NavLink>
          <NavLink>New Arrivals</NavLink>
          <NavLink>Brands</NavLink>
        </NavMenu>
        <SearchBar
          variant="standard"
          disableUnderline={true}
          startAdornment={
            <InputAdornment sx={{ margin: "4px" }}>
              <Search />
            </InputAdornment>
          }
          placeholder="Search for products..."
        />
        <Box>
          <IconButton
            onClick={toggleCart}
            sx={{ width: "24px", height: "24px", marginRight: 1 }}
          >
            <Badge badgeContent={totalQuantity} color="secondary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </IconButton>
          <IconButton sx={{ width: "24px", height: "24px" }}>
            <AccountCircleOutlinedIcon />
          </IconButton>
        </Box>
      </MyHeader>

      <Drawer anchor="left" open={openMenu} onClose={toggleMenu}>
        <List>
          <ListItem>
            <ListItemText primary="1" />
            <ListItemText primary="1" />
            <ListItemText primary="1" />
            <ListItemText primary="1" />
          </ListItem>
        </List>
      </Drawer>

      <Dialog open={openCart} onClose={toggleCart}>
        <DialogTitle>TITLE</DialogTitle>
        <DialogContent></DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </AppBar>
  );
};

Header.propTypes = {
  onDrawerToggle: PropTypes.func,
};

export default Header;
