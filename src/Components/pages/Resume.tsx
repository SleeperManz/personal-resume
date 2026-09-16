
import Barier from "../etc/Barier";
import Card from "../etc/Card";

const education = [
    {
        title: "State University of Malang",
        major: "Associate Degree in Game Animation",
        period: "2018 - 2022",
        href: "#",
    },
    {
        title: "State Vocational High School 2 Singosari",
        major: "Software Engineering",
        period: "2015-2018",
        href: "#",
    },
];

const experience = [
    {
        company: "Rabbit Pix",
        role: "as Lead art",
        period: "2025 - Now",
    },
    {
        company: "Sleeper Manz",
        role: "as Lead and Game Designer",
        period: "2023 - Now",
    },
    {
        company: "Zeus Animation",
        role: "as 3D Modeler Artist",
        period: "2023 - 2024",
    },
    {
        company: "Oesman",
        role: "as Graphic Designer",
        period: "2021 - 2022",
    },
];

const projects = [
    {
        title: "Feather Rogue",
        description: "Our very own IP is the basis of a game which is currently being developed. We have every intention of publishing this game on Steam.",
        platform: "STEAM",
    },
    {
        title: "Echos of the Faceless",
        description: "Our very own IP is the basis of a game which is currently being developed. We have every intention of publishing this game on Steam.",
        platform: "STEAM",
    },
    {
        title: "Last Bell",
        description: "Our very own IP is the basis of a game which is currently being developed. We have every intention of publishing this game on Steam.",
        platform: "STEAM",
    },
    {
        title: "Hand Royal",
        description: "Our very own IP is the basis of a game which is currently being developed. We have every intention of publishing this game on Steam.",
        platform: "STEAM",
    },
    {
        title: "Last Hope: Emily",
        description: "Our very own IP is the basis of a game which is currently being developed. We have every intention of publishing this game on Steam.",
        platform: "STEAM",
    },
    {
        title: "Let's Open",
        description: "Our very own IP is the basis of a game which is currently being developed. We have every intention of publishing this game on Steam.",
        platform: "STEAM",
    },
];

export default function Resume() {
    return (
        <div className="w-full flex flex-col gap-8">
            {/* Header */}
            <div className="w-full flex flex-row items-center justify-center gap-4">
                <h1 className="uppercase text-5xl font-bold text-[#0E418D] shrink-0">Resume</h1>
                <Barier width="full" height="1" className="flex-1" />
            </div>

            {/* Education & Experience */}
            <div className="w-full grid grid-cols-2 gap-15">
                {/* Education */}
                <div className="flex flex-col gap-6">
                    <h2 className="uppercase text-4xl font-semibold text-[#0E418D]">Education</h2>
                    <div className="flex flex-col gap-4">
                        {education.map((edu) => (
                            <Card key={edu.title} title={edu.title} href={edu.href} titleSize={26} className="gap-1">
                                <p className="text-base ml-2">{edu.major}</p>
                                <p className="text-sm text-gray-500 mt-6">{edu.period}</p>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Experience */}
                <div className="flex flex-col gap-6">
                    <h2 className="uppercase text-4xl font-semibold text-[#0E418D]">Experience</h2>
                    <div className="flex flex-col gap-5">
                        {experience.map((exp) => (
                            <div key={exp.company} className="flex flex-row items-start justify-between">
                                <div>
                                    <h3 className="text-base font-extrabold uppercase">{exp.company}</h3>
                                    <span className="text-sm font-semibold text-[#0E418D]">{exp.period}</span>
                                </div>
                                <span className="text-sm text-gray-500">{exp.role}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Project */}
            <div className="w-full flex flex-col gap-6">
                {/* Header */}
                <div className="w-full flex flex-row items-center gap-4">
                    <h1 className="uppercase text-5xl font-semibold text-[#0E418D] shrink-0">Project</h1>
                    <Barier width="full" height="1" className="flex-1" />
                </div>

                {/* Project Cards */}
                <div className="w-full grid grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <Card key={project.title} title={project.title} titleSize={24} className="gap-6">
                            <p className="text-2xl text-gray-700 leading-snug">{project.description}</p>
                            <div className="w-full flex justify-end mt-3">
                                <span className="px-3 py-1 font-bold text-white bg-[#0E418D] rounded" style={{fontSize: 20}}>
                                    {project.platform}
                                </span>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}