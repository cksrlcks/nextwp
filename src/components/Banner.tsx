"use client";
import React from "react";
import useSWR from "swr";
import BannerSlide from "./BannerSlide";
import { Banner } from "@/service/banner";
import styled from "styled-components";

export default function Banner() {
    const { data: banners, error } = useSWR<Banner[]>("/api/banner");
    return (
        <BannerBlock>
            <BannerSlide>
                {banners &&
                    banners.map((banner) => (
                        <figure key={banner.id}>
                            <img src={banner.acf.banner.url} alt={banner.title.rendered} />
                        </figure>
                    ))}
            </BannerSlide>
        </BannerBlock>
    );
}

const BannerBlock = styled.div`
    width: 200px;
    position: fixed;
    left: calc(50% - 520px);
    top: 20px;
`