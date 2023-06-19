import React from "react";
import { Spot } from "@/service/spots";
import styled from "styled-components";

export default function Spot({ data }: { data: Spot }) {
    const { acf : {store_name, store_image, store_exp, latitude, longitude}} = data;
    return <li>
        <SpotCardBlock>
            <div className="spot__title">{store_name}</div>
            {store_image && typeof store_image === 'string' && <figure className="spot__poster"><img src={store_image} alt={store_name} /></figure>}
            <div className="spot__coord">{longitude} / {latitude}</div>
        </SpotCardBlock>
    </li>;
}

const SpotCardBlock = styled.div`
    border-bottom:4px solid #ddd;
    padding-bottom:2rem;
    margin-bottom:2rem;
    .spot__title{        
        font-size:1.6rem;
        font-weight:bold;
        margin-bottom:1em;
    }

`