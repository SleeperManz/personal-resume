import type { ImgHTMLAttributes } from "react";

const modules = import.meta.glob("../../assets/icons/*.svg", {
    eager: true,
    query: "?url",
    import: "default",
}) as Record<string, string>;

const icons = Object.fromEntries(
    Object.entries(modules).map(([path, url]) => [
        path.split("/").pop()!.replace(/\.svg$/, ""),
        url,
    ])
) as Record<string, string>;

// Type diambil otomatis dari key object `icons`, bukan ditulis manual
export type IconName = keyof typeof icons;

interface IconsProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> {
    name: IconName;
    size?: number;
}

export default function Icons({ name, size = 24, alt, className, ...rest }: IconsProps) {
    const src = icons[name];

    if (!src) {
        console.warn(`Icon "${name}" not found.`);
        return null;
    }

    return (
        <img
            src={src}
            alt={alt ?? name}
            width={size}
            height={size}
            className={className}
            {...rest}
        />
    );
}