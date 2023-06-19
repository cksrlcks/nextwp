import { getBannerList } from "@/service/banner";
import { NextResponse } from "next/server";

export async function GET() {
    const res = await getBannerList();
    if (!res.ok) {
        return new Response("오류가 발생했습니다.", { status: 400 });
    } else {
        const data = await res.json();
        return NextResponse.json(data);
    }
}
