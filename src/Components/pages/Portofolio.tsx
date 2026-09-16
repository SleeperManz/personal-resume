
import { useState } from "react";
import Barier from "../etc/Barier";
import FrameImage from "../etc/FrameImage";

const filters = ["ALL", "ILLUSTRATION", "ANIMATION", "GAME", "3D"];

const portfolioItems = [
    { title: "Last Bell", imageUrl: "src/assets/portofolio/game/last-bell.png", category: "GAME", tag: "#GAME", platform: "STEAM" },
    { title: "Feather Rogue", imageUrl: "src/assets/portofolio/game/feather-rogue.png", category: "GAME", tag: "#GAME", platform: "STEAM" },
    { title: "Hand Royal", imageUrl: "src/assets/portofolio/game/hand-royale.png", category: "GAME", tag: "#GAME", platform: "STEAM" },
    { title: "", imageUrl: "src/assets/portofolio/illustration/concept_banshee.jpg", category: "ILLUSTRATION", tag: "#ILLUSTRATION" },
    { title: "", imageUrl: "src/assets/portofolio/illustration/Fiverr Portfolio 2.png", category: "ILLUSTRATION", tag: "#ILLUSTRATION" },
    { title: "", imageUrl: "src/assets/portofolio/illustration/Fiverr Portfolio 3.png", category: "ILLUSTRATION", tag: "#ILLUSTRATION" },
    { title: "", imageUrl: "src/assets/portofolio/illustration/Fiverr Portfolio 4.png", category: "ILLUSTRATION", tag: "#ILLUSTRATION" },
    { title: "", imageUrl: "src/assets/portofolio/illustration/Fiverr Portfolio 5.png", category: "ILLUSTRATION", tag: "#ILLUSTRATION" },
    { title: "", imageUrl: "src/assets/portofolio/illustration/modelsheet_darina.png", category: "ILLUSTRATION", tag: "#ILLUSTRATION" },
    { title: "", imageUrl: "src/assets/portofolio/illustration/Test-game-style3.png", category: "ILLUSTRATION", tag: "#ILLUSTRATION" },
    { title: "", imageUrl: "src/assets/portofolio/animations/Activity Fishing Preview_00000.mp4", category: "ANIMATION", tag: "#ANIMATION" },
    { title: "", imageUrl: "src/assets/portofolio/animations/Activity Painting Preview_00000.mp4", category: "ANIMATION", tag: "#ANIMATION" },
    { title: "", imageUrl: "src/assets/portofolio/animations/Activity Reading Preview_00000.mp4", category: "ANIMATION", tag: "#ANIMATION" },
    { title: "", imageUrl: "src/assets/portofolio/animations/Activity Ride Bike Preview_00000.mp4", category: "ANIMATION", tag: "#ANIMATION" },
    { title: "", imageUrl: "src/assets/portofolio/animations/Activity Singing Preview_00000.mp4", category: "ANIMATION", tag: "#ANIMATION" },
    { title: "", imageUrl: "src/assets/portofolio/animations/Activity Writing Preview_00000.mp4", category: "ANIMATION", tag: "#ANIMATION" },
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
                        className={`px-3 py-1 text-xs font-bold uppercase rounded transition-colors ${
                            activeFilter === f
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