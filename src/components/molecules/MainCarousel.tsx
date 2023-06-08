// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Image } from "@/components/atoms/Image";
import "swiper/css";
import { css } from "@emotion/react";

export const MainCarousel = () => {
  const srcList = [
    "/static/images/swiper_test1.png",
    "/static/images/swiper_test2.png",
    "/static/images/swiper_test3.png",
    "/static/images/swiper_test4.png",
  ];

  const swiperStyles = css`
    width: 100%;
    height: 100%;
  `;
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      modules={[Autoplay]}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      onSlideChange={() => {}}
      onSwiper={swiper => {
        console.log(swiper);
      }}
      css={swiperStyles}
    >
      {srcList.map(src => {
        return (
          <SwiperSlide key={src}>
            <Image src={src} width="100%" height="100%" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
