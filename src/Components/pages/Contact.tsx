
import { useState } from "react";
import Barier from "../etc/Barier";
import Icons from "../etc/Icons";
import { CONTACT_INFO } from "../../config/contact";

const contactInfo = [
    { icon: <Icons name="google-mail" size={18} />, label: "EMAIL", value: CONTACT_INFO.email },
    { icon: <Icons name="whatsapp" size={18} />, label: "PHONE", value: CONTACT_INFO.phone },
    { icon: <Icons name="location" size={18} />, label: "LOCATION", value: CONTACT_INFO.location },
];

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSend = () => {
        const subject = encodeURIComponent(name || "No Subject");
        const body = encodeURIComponent(message);

        window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
    };

    return (
        <div className="w-full flex flex-col gap-8">
            {/* Header */}
            <div className="w-full flex flex-row items-center gap-4">
                <h1 className="text-5xl uppercase font-semibold text-[#0E418D] shrink-0">Contact</h1>
                <Barier width="full" height="1" className="flex-1" />
            </div>

            {/* Content */}
            <div className="w-full grid grid-cols-2 gap-10">
                {/* Left - Info */}
                <div className="flex flex-col gap-4">
                    <div>
                        <h2 className="text-4xl font-black uppercase text-[#0E418D] leading-tight">
                            Let's Build The Epic
                        </h2>
                        <h2 className="text-4xl font-black uppercase leading-tight">
                            Work Together
                        </h2>
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed max-w-md">
                        Open for freelance work, full-time roles, or game dev collaboration.
                        Drop a message and I'll get back to you.
                    </p>

                    <div className="flex flex-col gap-3 mt-2">
                        {contactInfo.map((info) => (
                            <div key={info.label} className="flex flex-row items-center gap-3">
                                <div className="w-9 h-9 shrink-0 flex items-center justify-center border border-black rounded-md">
                                    {info.icon}
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold uppercase text-gray-500">
                                        {info.label}
                                    </p>
                                    <p className="text-sm font-medium">{info.value}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right - Form */}
                <div className="w-full flex flex-col gap-4 p-6 bg-[#0E1E3D] rounded-sm">
                    <div className="flex flex-col gap-1">
                        <label className="text-xs font-bold uppercase text-white">Your Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-[#D9D9D9] px-3 py-2 text-sm outline-none rounded-sm"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-xs font-bold uppercase text-white">Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-[#D9D9D9] px-3 py-2 text-sm outline-none rounded-sm"
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label className="text-xs font-bold uppercase text-white">Message</label>
                        <textarea
                            rows={5}
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-full bg-[#D9D9D9] px-3 py-2 text-sm outline-none resize-none rounded-sm"
                        />
                    </div>

                    <div className="w-full flex justify-end mt-2">
                        <button
                            type="button"
                            onClick={handleSend}
                            className="px-4 py-2 text-xs font-bold uppercase text-white bg-black rounded-sm hover:bg-gray-800 transition-colors"
                        >
                            + Send Massage
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}