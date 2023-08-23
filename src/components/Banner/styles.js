import styled from "@emotion/styled";
import { Box, Button, Input, Typography } from "@mui/material";

export const BannerContainer = styled(Box)(() => ({
  borderRadius: "20px",
  background: "#000",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  padding: "36px 64px",
}));

export const BannerText = styled(Typography)(() => ({
  fontWeight: 700,
  fontFamily: "Integral CF Regular",
  fontSize: "40px",
  lineHeight: "45px",
  color: "#fff",
  flexBasis: "40%",
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
