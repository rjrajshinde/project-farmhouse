import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import { EffectCreative, Autoplay, Scrollbar } from "swiper/modules";
import "../Styles/Carousel.css";

export default function Carousel() {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative, Autoplay, Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide className="carouselSlide"></SwiperSlide>
        <SwiperSlide className="carouselSlide"></SwiperSlide>
        <SwiperSlide className="carouselSlide"></SwiperSlide>
        <SwiperSlide className="carouselSlide"></SwiperSlide>
      </Swiper>
    </>
  );
}
