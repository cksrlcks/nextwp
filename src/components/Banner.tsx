"use client";
import React from "react";
import useSWR from "swr";
import BannerSlide from "./BannerSlide";
import { Banner } from "@/service/banner";

export default function Banner() {
    const { data: banners, error } = useSWR<Banner[]>("/api/banner");
    return (
        <div className="side-banner">
            <BannerSlide>
                {banners &&
                    banners.map((banner) => (
                        <figure key={banner.id}>
                            <img src={banner.acf.banner.url} alt={banner.title.rendered} />
                        </figure>
                    ))}
            </BannerSlide>
        </div>
    );
}
