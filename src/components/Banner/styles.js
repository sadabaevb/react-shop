import styled from "@emotion/styled";
import { Box, Button, Input, Typography } from "@mui/material";

export const BannerContainer = styled(Box)(({ theme }) => ({
  borderRadius: "20px",
  background: "#000",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "36px 64px",
  [theme.breakpoints.down("sm")]: {
    padding: "32px 24px",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
}));

export const BannerText = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontFamily: "Integral CF Regular",
  fontSize: "40px",
  lineHeight: "45px",
  color: "#fff",
  flexBasis: "40%",
  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
    marginBottom: "32px",
  },
}));

export const EmailTextField = styled(Input)(() => ({
  borderRadius: "62px",
  background: "#FFF",
  marginBottom: "14px",
  width: "300px",
}));

export const ButtonBanner = styled(Button)(() => ({
  borderRadius: "62px",
  background: "#FFF",
  color: "#000",
  fontWeight: 600,
}));
