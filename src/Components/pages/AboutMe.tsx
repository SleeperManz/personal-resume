
import Barier from "../etc/Barier";
import Card from "../etc/Card";
import Icons from "../etc/Icons";

const appIconModules = import.meta.glob("../../assets/about/appIcon/*.png", {
    eager: true,
    query: "?url",
    import: "default",
}) as Record<string, string>;

const appIcons = Object.fromEntries(
    Object.entries(appIconModules).map(([path, url]) => [
        path.split("/").pop()!.replace(/\.png$/, ""),
        url,
    ])
);

const artSkills = [
    {
        icon: <Icons name="brush" size={45} alt="brush" />,
        title: "2D Design",
        description: "Creating clean and expressive visuals for games, interfaces, and creative projects.",
    },
    {
        icon: <Icons name="cube" size={45} alt="cube" />,
        title: "3D Modeling",
        description: "Building 3D assets and models with a focus on shape, style, and game-ready usability.",
    },
    {
        icon: <Icons name="image" size={45} alt="image" />,
        title: "Background Design",
        description: "Designing environments and backgrounds that establish atmosphere, depth, and visual storytelling.",
    },
    {
        icon: <Icons name="person-pen" size={45} alt="person-pen" />,
        title: "Character Design",
        description: "Creating distinctive characters through silhouette, personality, visual identity, and details.",
    },
    {
        icon: <Icons name="paint" size={45} alt="paint" />,
        title: "Digital Painting",
        description: "Bringing ideas to life through color, lighting, texture, and expressive digital artwork.",
    },
    {
        icon: <Icons name="pen" size={45} alt="pen" />,
        title: "Concept Art",
        description: "Exploring visual ideas and turning rough concepts into clear directions for production.",
    },
];

const animationSkills = [
    {
        icon: <Icons name="graphics" size={45} alt="graphics" />,
        title: "Motion Graphic",
        description: "Creating dynamic visual compositions through movement, typography, transitions, and effects.",
    },
    {
        icon: <Icons name="film" size={45} alt="film" />,
        title: "2D Animation",
        description: "Bringing illustrations and characters to life through expressive movement and timing.",
    },
    {
        icon: <Icons name="roll-film" size={45} alt="roll-film" />,
        title: "Video Editing",
        description: "Turning raw footage and visual assets into engaging videos with pacing, transitions, and storytelling.",
    },
    {
        icon: <Icons name="graphics1" size={45} alt="graphics1" />,
        title: "3D Animation",
        description: "Creating character and object animations with attention to movement, timing, and visual appeal.",
    },
];

const tools = [
    { name: "After Effect", iconUrl: appIcons["Logo_AE"] },
    { name: "Illustrator", iconUrl: appIcons["Logo_AI"] },
    { name: "Blender", iconUrl: appIcons["Logo_Blender"] },
    { name: "Clip Studio Paint", iconUrl: appIcons["Logo_CSP"] },
    { name: "Figma", iconUrl: appIcons["Logo_Figma"] },
    { name: "Photoshop", iconUrl: appIcons["Logo_PS"] },
    { name: "Spine", iconUrl: appIcons["Logo_Spine"] },
    { name: "Unity", iconUrl: appIcons["Logo_Unity"] },
];

export default function AboutMe() {
    return (
        <div className="w-full flex flex-col gap-8">
            {/* About Me */}
            <div className="flex flex-col gap-4">
                <h1 className="uppercase text-5xl font-bold text-[#0E418D]">About Me</h1>
                <div className="flex flex-col gap-6 text-2xl border rounded-sm p-6">
                    <p>I'm a Game Designer and Art Director with over 5 years in the creative industry and around 3 years focused on game development.</p>
                    <p>I've worked on multiple game projects, both professionally and with my own creative team — shaping gameplay, visual direction, characters, and the worlds that bring each project to life.</p>
                    <p>Outside of games, I also work as an illustrator, creating artwork and visual assets that have been delivered to clients across different projects.</p>
                    <p>I like turning ideas into experiences — from the first sketch to something people can actually play, see, and remember.</p>
                </div>
            </div>

            {/* Skills */}
            <div className="flex flex-col gap-6">
                {/* Header */}
                <div className="w-full flex flex-row items-center gap-4">
                    <h1 className="uppercase font-bold text-4xl text-[#0E418D] shrink-0">Skills</h1>
                    <Barier width="full" height="1" className="flex-1" />
                </div>

                {/* Art / Illustration */}
                <div className="flex flex-col gap-3">
                    <h2 className="uppercase text-lg font-semibold text-[#0E418D]">Art / Illustration</h2>
                    <div className="grid grid-cols-3 gap-6">
                        {artSkills.map((skill) => (
                            <Card icon={skill.icon} title={skill.title}>
                                <p className="text-sm text-gray-700 leading-snug">
                                    {skill.description}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Animation */}
                <div className="flex flex-col gap-3">
                    <h2 className="uppercase text-lg font-semibold text-[#0E418D]">Animation</h2>
                    <div className="grid grid-cols-3 gap-6">
                        {animationSkills.map((skill) => (
                            <Card icon={skill.icon} title={skill.title}>
                                <p className="text-sm text-gray-700 leading-snug">
                                    {skill.description}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tools */}
            <div
                className="w-full flex flex-col items-center justify-center gap-8 p-6 border rounded-sm"
                style={{
                    borderStyle: "solid",
                    borderColor: "black",
                    borderLeftWidth: 2,
                    borderTopWidth: 2,
                    borderRightWidth: 6,
                    borderBottomWidth: 6,
                }}
            >
                <h1 className="uppercase font-bold text-4xl">Tools</h1>
                {/* App Icon */}
                <div className="w-full flex flex-row items-center justify-around gap-6">
                    {tools.map((tool) => (
                        <div
                            key={tool.name}
                            className="w-21.25 h-21.25 flex items-center justify-center rounded-xl"
                        >
                            <img
                                src={tool.iconUrl}
                                alt={tool.name}
                                className="w-20 h-20 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}