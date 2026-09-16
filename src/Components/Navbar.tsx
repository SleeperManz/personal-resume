
interface NavbarProps {
    activeTab: string;
    onTabChange: (tab: string) => void;
}

const navlinks = ["ABOUT", "RESUME", "PORTOFOLIO", "CONTACT"];

export default function Navbar({ activeTab, onTabChange }: NavbarProps) {
    return (
        <div className="w-full flex flex-row items-center gap-8 border-b border-black pb-3">
            {navlinks.map((label) => (
                <button
                    key={label}
                    onClick={() => onTabChange(label)}
                    className={`text-3xl font-bold uppercase tracking-wide transition-colors ${activeTab === label
                            ? "text-[#0E418D] underline underline-offset-4"
                            : "text-black hover:text-[#0E418D]"
                        }`}
                >
                    {label}
                </button>
            ))}
        </div>
    );
}