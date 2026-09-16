
interface BarierProps {
    width?: string;
    height?: string;
    className?: string;
}

function resolveSize(value: string): string | undefined {
    if (!value) return undefined;
    if (value === "full") return "100%";
    // kalau cuma angka (mis. "200"), anggap satuannya px
    if (/^\d+$/.test(value)) return `${value}px`;
    // kalau sudah ada satuan (mis. "200px", "10rem", "50%"), pakai apa adanya
    return value;
}

function Barier({ width = "", height = "", className = "" }: BarierProps) {
    return (
        <div
            className={`bg-black ${className}`}
            style={{
                width: resolveSize(width),
                height: resolveSize(height)
            }}
        />
    );
}

export default Barier;