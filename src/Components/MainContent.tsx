
import React, { useState } from "react";
import Navbar from "./Navbar";
import AboutMe from "./pages/AboutMe";
import Resume from "./pages/Resume";
import Portofolio from "./pages/Portofolio";
import Contact from "./pages/Contact";

const TAB_CONTENT: Record<string, React.ReactNode> = {
    ABOUT: <AboutMe />,
    RESUME: <Resume />,
    PORTOFOLIO: <Portofolio />,
    CONTACT: <Contact />,
}

export default function MainContent() {
    const [activeTab, setActiveTab] = useState("ABOUT");

    return (
        <div className="w-full flex flex-col border rounded-lg gap-6 p-6">
            <Navbar activeTab={activeTab} onTabChange={setActiveTab} />

            {TAB_CONTENT[activeTab]}
        </div>
    );
}