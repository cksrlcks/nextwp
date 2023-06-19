import StyledComponentsRegistry from "../lib/registry";

import "../resource/css/reset.css";
import "../resource/css/globals.css";
import SWRConfigContext from "@/context/SWRConfigContext";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <SWRConfigContext>
                    <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
                </SWRConfigContext>
            </body>
        </html>
    );
}
