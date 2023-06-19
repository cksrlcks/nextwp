"use client";
import React, { useEffect, useState } from "react";
import { Spot } from "@/service/spots";
import SpotItem from "./Spot";

export default function SpotList() {
    const [isLoading, setIsLoading] = useState(true);
    const [spots, setSpots] = useState<Spot[]>([]);
    useEffect(() => {
        fetch("/api/spot")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setIsLoading(false);
                setSpots(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <ul>
            {spots.map((spot) => (
                <SpotItem key={spot.id} data={spot} />
            ))}
        </ul>
    );
}
