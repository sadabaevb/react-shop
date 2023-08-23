import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const Title = styled(Typography)(({ theme }) => ({
  fontFamily: "Integral CF Regular",
  fontSize: "48px",
  fontWeight: 700,

  [theme.breakpoints.down("sm")]: {
    fontSize: "32px",
  },
}));
