
import Icons from "./etc/Icons";

interface ProfileCardProps {
    name: string;
    email: string;
    instagram: string;
    whatsapp: string;
    country: string;
    bannerUrl: string;
    avatarUrl: string;
}

export default function ProfileCard({
    name,
    email,
    instagram,
    whatsapp,
    country,
    bannerUrl,
    avatarUrl,
}: ProfileCardProps) {
    return (
        <div className="w-96 h-fit shrink-0 rounded-2xl border-2 border-black overflow-hidden bg-white">
            {/* Banner + Avatar */}
            <div className="relative w-full h-40">
                <img
                    src={bannerUrl}
                    alt={`${name}-banner`}
                    className="w-full h-full object-cover blur-[1px]"
                />
                <div className="absolute left-1/2 -bottom-10 -translate-x-1/2 w-24 h-24 rounded-full border-4 border-white overflow-hidden bg-gray-200">
                    <img
                        src={avatarUrl}
                        alt={`${name}-avatar`}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Name */}
            <div className="mt-12 px-6 text-center">
                <h3 className="text-lg font-extrabold uppercase">{name}</h3>
            </div>

            {/* Contact Info */}
            <div className="mt-4 px-6 border-t border-black">
                <div className="flex flex-col gap-3 py-4">
                    <div className="flex items-center gap-3">
                        <Icons name="google-mail" size={22} alt="google-mail" />
                        <span className="text-sm">{email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Icons name="instagram" size={20} alt="instagram"/>
                        <span className="text-sm">{instagram}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Icons name="whatsapp" size={20} alt="whatsapp"/>
                        <span className="text-sm">{whatsapp}</span>
                    </div>
                </div>
            </div>

            {/* Country */}
            <div className="px-6 py-3 border-t border-black text-center">
                <span className="text-sm text-gray-500">{country}</span>
            </div>
        </div>
    );
}