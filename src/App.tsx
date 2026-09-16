
import MainContent from "./Components/MainContent";
import ProfileCard from "./Components/ProfileCard";
import { ViewFullProvider } from "./Components/etc/ViewFull";

import bannerImg from "./assets/about/profile/Banner.png";
import avatarImg from "./assets/about/profile/PP Baru.jpg";

export default function App() {
    return (
        <ViewFullProvider>
            <div className="w-full flex flex-row gap-8 p-8">
                <ProfileCard
                    name="Firjatullah Nabil W.M"
                    email="firjatullahnabil@gmail.com"
                    instagram="@nabil_wm"
                    whatsapp="+62 851-6357-2769"
                    country="Indonesia"
                    bannerUrl={bannerImg}
                    avatarUrl={avatarImg}
                />

                <MainContent />
            </div>
        </ViewFullProvider>
    );
}