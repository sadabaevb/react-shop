import React from "react";
// import PropTypes from "prop-types";
import ReviewCard from "../../../../components/ReviewCard/ReviewCard";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Box, useMediaQuery } from "@mui/material";
import { Title } from "../../../../globalStyles";

const Reviews = ({ list }) => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  return (
    <Box sx={{ px: { xs: "16px", md: "100px" } }}>
      <Title sx={{ my: "80px" }}>OUR HAPPY CUSTOMERS</Title>
      <Swiper
        initialSlide={3}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={isMobile ? 1 : 3}
        navigation={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          borderRadius: "62px",
        }}
        pagination={isMobile ? false : true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {list.map((item) => (
          <SwiperSlide key={item.id}>
            <ReviewCard review={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

Reviews.propTypes = {};

export default Reviews;
