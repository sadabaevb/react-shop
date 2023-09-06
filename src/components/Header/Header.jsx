import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Badge,
  Box,
  Drawer,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  TextField,
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
import { useTranslation } from "react-i18next";
import Cart from "components/Cart/Cart";

const Header = () => {
  const [isShowOffer, setIsShowOffer] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [selectedLang, setSelectedLang] = useState("ru");

  const { t, i18n } = useTranslation();

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

  const handleLangChange = (event) => {
    setSelectedLang(event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  return (
    <AppBar position="sticky" sx={{ background: "#fff", boxShadow: 0 }}>
      <TopHeader radmir={23} isShowOffer={isShowOffer}>
        <OfferText align="center">
          Sign up and get 20% off to your first order.
          <SignUpText>Sign Up Now</SignUpText>
          {t("welcome")}
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
          <LogoText variant="h3">SHOP.CO</LogoText>
        </Box>

        <NavMenu>
          <MenuSimple />
          <NavLink>{t("onSale")}</NavLink>
          <NavLink>{t("newArrivals")}</NavLink>
          <NavLink>Brands</NavLink>
          <NavLink to="products">Products</NavLink>
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
          <TextField
            margin="none"
            variant="standard"
            select
            value={selectedLang}
            onChange={handleLangChange}
          >
            <MenuItem value="ru">RU</MenuItem>
            <MenuItem value="en">EN</MenuItem>
          </TextField>
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

      <Cart open={openCart} onClose={toggleCart} />
    </AppBar>
  );
};

Header.propTypes = {
  onDrawerToggle: PropTypes.func,
};

export default Header;
