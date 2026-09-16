
import { useState } from "react";
import Barier from "../etc/Barier";
import FrameImage from "../etc/FrameImage";

const filters = ["ALL", "ILLUSTRATION", "ANIMATION", "GAME", "3D"];

const portfolioModules = import.meta.glob(
    "../../assets/portofolio/**/*.{png,jpg,jpeg,mp4}",
    {
        eager: true,
        query: "?url",
        import: "default",
    }
) as Record<string, string>;

const portfolioMedia = Object.fromEntries(
    Object.entries(portfolioModules).map(([path, url]) => [
        path.split("/").pop()!.replace(/\.(png|jpe?g|mp4)$/i, ""),
        url,
    ])
);

const portfolioItems = [
    { title: "Last Bell", imageUrl: portfolioMedia["last-bell"], category: "GAME", tag: "#GAME", platform: "STEAM" },
    { title: "Feather Rogue", imageUrl: portfolioMedia["feather-rogue"], category: "GAME", tag: "#GAME", platform: "STEAM" },
    { title: "Hand Royal", imageUrl: portfolioMedia["hand-royale"], category: "GAME", tag: "#GAME", platform: "STEAM" },
    { title: "", imageUrl: portfolioMedia["concept_banshee"], category: "ILLUSTRATION", tag: "#ILLUSTRATION" },
    { title: "", imageUrl: portfolioMedia["Fiverr Portfolio 2"], category: "ILLUSTRATION", tag: "#ILLUSTRATION" },
    { title: "", imageUrl: portfolioMedia["Fiverr Portfolio 3"], category: "ILLUSTRATION", tag: "#ILLUSTRATION" },
    { title: "", imageUrl: portfolioMedia["Fiverr Portfolio 4"], category: "ILLUSTRATION", tag: "#ILLUSTRATION" },
    { title: "", imageUrl: portfolioMedia["Fiverr Portfolio 5"], category: "ILLUSTRATION", tag: "#ILLUSTRATION" },
    { title: "", imageUrl: portfolioMedia["modelsheet_darina"], category: "ILLUSTRATION", tag: "#ILLUSTRATION" },
    { title: "", imageUrl: portfolioMedia["Test-game-style3"], category: "ILLUSTRATION", tag: "#ILLUSTRATION" },
    { title: "", imageUrl: portfolioMedia["Activity Fishing Preview_00000"], category: "ANIMATION", tag: "#ANIMATION" },
    { title: "", imageUrl: portfolioMedia["Activity Painting Preview_00000"], category: "ANIMATION", tag: "#ANIMATION" },
    { title: "", imageUrl: portfolioMedia["Activity Reading Preview_00000"], category: "ANIMATION", tag: "#ANIMATION" },
    { title: "", imageUrl: portfolioMedia["Activity Ride Bike Preview_00000"], category: "ANIMATION", tag: "#ANIMATION" },
    { title: "", imageUrl: portfolioMedia["Activity Singing Preview_00000"], category: "ANIMATION", tag: "#ANIMATION" },
    { title: "", imageUrl: portfolioMedia["Activity Writing Preview_00000"], category: "ANIMATION", tag: "#ANIMATION" },
];

export default function Portofolio() {
    const [activeFilter, setActiveFilter] = useState("ALL");

    const filteredItems =
        activeFilter === "ALL"
            ? portfolioItems
            : portfolioItems.filter((item) => item.category === activeFilter);

    return (
        <div className="w-full flex flex-col gap-8">
            {/* Header */}
            <div className="w-full flex flex-row items-center gap-4">
                <h1 className="text-5xl uppercase font-semibold text-[#0E418D] shrink-0">Portofolio</h1>
                <Barier width="full" height="1" className="flex-1" />
            </div>

            {/* Sort & Filter */}
            <div className="w-full flex flex-row items-center gap-3">
                {filters.map((f) => (
                    <button
                        key={f}
                        onClick={() => setActiveFilter(f)}
                        className={`px-3 py-1 text-xs font-bold uppercase rounded transition-colors ${activeFilter === f
                                ? "bg-[#0E418D] text-white"
                                : "bg-[#D9D9D9] text-black hover:bg-gray-500 hover:text-white"
                            }`}
                    >
                        {f}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="w-full grid grid-cols-3 gap-8">
                {filteredItems.map((item, i) => (
                    <FrameImage
                        key={`${item.title || item.category}-${i}`}
                        imageUrl={item.imageUrl}
                        imageHeight="h-48"
                    >
                        <div className="w-full flex flex-col gap-2 p-3">
                            {item.title && (
                                <h3 className="text-base font-extrabold uppercase">{item.title}</h3>
                            )}
                            <div className="w-full flex flex-row items-center justify-between">
                                <span className="text-[10px] text-gray-400 uppercase tracking-wide">
                                    {item.tag}
                                </span>
                                {item.platform && (
                                    <span className="px-2 py-0.5 text-[10px] font-bold text-white bg-[#0E418D] rounded">
                                        {item.platform}
                                    </span>
                                )}
                            </div>
                        </div>
                    </FrameImage>
                ))}
            </div>
        </div>
    );
}