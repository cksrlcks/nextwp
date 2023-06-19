"use client";
import ContextWrapper from "@/context/ContextWrapper";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Nav from "@/components/Nav";

import "../resource/css/reset.css";
import "../resource/css/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <ContextWrapper>
                    <div className="app">
                        <div className="app-inner">
                            <Header />
                            <div>
                                {children}
                            </div>
                            <Banner />
                            <Nav />
                        </div>
                    </div>
                </ContextWrapper>
            </body>
        </html>
    );
}
