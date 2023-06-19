import { SignupUser } from "@/service/auth";
import { NextResponse } from "next/server";
const baseURL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

function getAdminRoleToken() {
    return fetch(`${baseURL}/jwt-auth/v1/token`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: process.env.NEXT_PUBLIC_ADMIN_ID,
            password: process.env.NEXT_PUBLIC_ADMIN_PASSWORD,
        }),
    });
}

function createUser(token: string, { username, email, password }: SignupUser) {
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    };
    return fetch(`${baseURL}/wp/v2/users`, {
        method: "POST",
        headers,
        body: JSON.stringify({
            username,
            email,
            password,
        }),
    });
}

export async function POST(request: Request) {
    const { username, email, password } = await request.json();

    //request에 username, email, password없으면 에러
    if (!username || !email || !password) {
        return new Response("Bad Request", { status: 400, statusText: "요청에 실패했습니다." });
    }

    const res = await getAdminRoleToken();
    if (res.ok) {
        const { token } = await res.json();
        const signupResult = await createUser(token, { username, email, password });
        const data = await signupResult.json();

        return NextResponse.json(data);
    } else {
        return new Response("Bad Request", { status: 400, statusText: "문제가 발생했습니다." });
    }
}
