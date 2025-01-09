
import React from "react";

export default function Container({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div className="flex flex-row bg-[#F5F5F5] dark:bg-[#121212] min-h-screen">
            <div className="flex-1">{children}</div>
        </div>
    );
}