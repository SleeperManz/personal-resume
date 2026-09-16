import type React from "react";

interface CardProps {
    icon?: React.ReactNode;
    title: string;
    href?: string;
    titleSize?: number | string;
    className?: string;
    children: React.ReactNode;
}

export default function Card({
    icon,
    title,
    href,
    titleSize = 16,
    className,
    children,
}: CardProps) {
    const titleColor = href ? "text-[#0E408D]" : "text-black";
    const titleStyle = {
        fontSize: typeof titleSize === "number" ? `${titleSize}px` : titleSize,
    };

    return (
        <div className="flex flex-row gap-4 p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            {icon && (
                <div className="w-14 h-14 shrink-0 flex items-center justify-center border border-black rounded-md">
                    {icon}
                </div>
            )}
            <div className={`w-full flex flex-col ${className}`}>
                {href ? (
                    <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={titleStyle}
                        className={`font-extrabold uppercase hover:underline ${titleColor}`}
                    >
                        {title}
                    </a>
                ) : (
                    <h3 style={titleStyle} className={`font-extrabold ${titleColor}`}>
                        {title}
                    </h3>
                )}
                {children}
            </div>
        </div>
    );
}