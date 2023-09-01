import styled from "@emotion/styled";
import { Box, IconButton, Input, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const TopHeader = styled(Box)(({ theme, isShowOffer }) => {
  return {
    background: "#000",
    color: "#fff",
    padding: "9px 0",
    display: isShowOffer ? "flex" : "none",
    justifyContent: "flex-end",
    alignItems: "center",
    position: "relative",
  };
});

export const MyHeader = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: "40px",
  padding: "0 100px",
  [theme.breakpoints.down("sm")]: {
    justifyContent: "space-between",
    padding: "0 20px",
  },
}));

export const OfferText = styled(Typography)(() => ({
  fontSize: "14px",
  flexGrow: 1,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
}));

export const SignUpText = styled(Link)(() => ({
  fontWeight: 600,
  fontSize: "1em",
  color: "#fff",
}));

export const LogoText = styled(Typography)(() => ({
  fontFamily: "Integral CF Regular",
  color: "#000",
  fontSize: "24px ",
  fontWeight: 600,
}));

export const CloseButton = styled(IconButton)(({ theme }) => ({
  height: "20px",
  width: "20px",
  color: "#fff",
  marginRight: "100px",
  [theme.breakpoints.down("sm")]: {
    marginRight: 10,
  },
}));

export const SearchBar = styled(Input)(({ theme }) => ({
  maxHeight: "48px",
  border: "none",
  padding: "8px 10px",
  borderRadius: "62px",
  background: "#f0f0f0",
  flexGrow: 1,
  maxWidth: "577px",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const NavMenu = styled("nav")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const NavLink = styled(Link)(() => ({
  color: "#000000",
  fontSize: "16px",
  textDecoration: "none",
  marginRight: "24px",
}));

export const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("sm")]: {
    display: "inline",
  },
}));
