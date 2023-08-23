import React from "react";
// import PropTypes from "prop-types";
import { Paper, Rating, Typography } from "@mui/material";

const ReviewCard = (props) => {
  const { review } = props;
  return (
    <Paper
      elevation={0}
      sx={{
        width: "100%",
        p: "28px",
        borderRadius: "20px",
        border: "1px solid rgba(0, 0, 0, 0.10)",
      }}
    >
      <Rating value={5} readOnly />
      <Typography fontWeight={600}>{review.author}</Typography>
      <Typography color="rgba(0, 0, 0, 0.60);" component="p" variant="body1">
        {review.quote}
      </Typography>
    </Paper>
  );
};

ReviewCard.propTypes = {};

export default ReviewCard;
