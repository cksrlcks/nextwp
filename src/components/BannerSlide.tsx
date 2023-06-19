"use client";
import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";

export default function BannerSlide({ children }: { children: React.ReactNode }) {
    return (
        <Swiper spaceBetween={10} slidesPerView={1}>
            {React.Children.map(children, (children, idx) => (
                <SwiperSlide>{children}</SwiperSlide>
            ))}
        </Swiper>
    );
}
