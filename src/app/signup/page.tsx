"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function SignupPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: "",
        passwordCheck: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const onSubmit = async () => {
        setIsLoading(true);
        const { username, email, password } = form;
        const res = await fetch("/api/signup", {
            method: "POST",
            body: JSON.stringify({
                username,
                email,
                password,
            }),
        });
        const result = await res.json();
        if (result.username) {
            alert(`${result.username}님 가입이 완료되었습니다.`);
            router.push("/");
        } else {
            alert(result.message);
        }
    };

    return (
        <div className="flex flex-col">
            {error}
            <div className="flex flex-col">
                <label htmlFor="">아이디</label>
                <input type="text" placeholder="이름 입력" name="username" value={form.username} onChange={handleChange} />
            </div>
            <div className="flex flex-col">
                <label htmlFor="">이메일</label>
                <input type="text" placeholder="이메일 입력" name="email" value={form.email} onChange={handleChange} />
            </div>
            <div className="flex flex-col">
                <label htmlFor="">비밀번호</label>
                <input type="text" placeholder="비밀번호 입력" name="password" value={form.password} onChange={handleChange} />
            </div>
            <div className="flex flex-col">
                <label htmlFor="">비밀번호 재입력</label>
                <input type="text" placeholder="비밀번호 재입력" name="passwordCheck" value={form.passwordCheck} onChange={handleChange} />
            </div>
            {!false && (
                <button type="button" onClick={onSubmit}>
                    회원가입
                </button>
            )}
        </div>
    );
}
