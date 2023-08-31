"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { ChevronLeftSvg, ChevronRightSvg } from "../svgs";
import { ReactNode } from "react";

interface CarouselProps {
  children: Array<ReactNode>;
}

export default function SwiperCarousel({ children }: CarouselProps) {
  return (
    <>
      <Swiper
        autoHeight={true}
        initialSlide={1}
        slidesPerView={3}
        speed={300}
        effect={"coverflow"}
        centeredSlides={true}
        centeredSlidesBounds={true}
        coverflowEffect={{
          rotate: 0,
          slideShadows: false,
          scale: 0.5,
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="w-screen overflow-hidden"
      >
        {children.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}

        <div className="slide-controller">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </>
  );
}
