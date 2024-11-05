import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import GiftItem from "./GiftItem";
import giftsData from "../data/gifts.json";

const Carrossel = () => {
  const [gifts] = useState(giftsData);

  const swiperRef = useRef(null);

  return (
    <>
      <section className="flex justify-between mb-6 text-center items-center">
        <h1 className="text-2xl font-bold text-left text-[#30627E]">
          Lista de presentes{" "}
        </h1>
        <img src="/arrow.svg" alt="arrow" className="w-7" />
      </section>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          dynamicBullets: true,
        }}
        scrollbar={{
          hide: false,
        }}
        grabCursor={true}
        parallax={true}
        loop={true}
        modules={[Scrollbar, Pagination]}
        className="mySwiper"
        breakpoints={{
          // Definindo o número de slides por tela
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {gifts.map((gift) => (
          <SwiperSlide key={gift.id} className="">
            <GiftItem gift={gift} onChoose={() => {}} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carrossel;
