
import { createContext, useContext, useState, type ReactNode } from "react";
import { isVideoUrl } from "./helper/MediaType";

interface ViewFullContextType {
    open: (url: string) => void;
    close: () => void;
}

const ViewFullContext = createContext<ViewFullContextType | null>(null);

export function useViewFull() {
    const ctx = useContext(ViewFullContext);
    if (!ctx) {
        throw new Error("useViewFull harus dipakai di dalam <ViewFullProvider>");
    }
    return ctx;
}

export function ViewFullProvider({ children }: { children: ReactNode }) {
    const [mediaUrl, setMediaUrl] = useState<string | null>(null);

    const open = (url: string) => setMediaUrl(url);
    const close = () => setMediaUrl(null);

    return (
        <ViewFullContext.Provider value={{ open, close }}>
            {children}

            {mediaUrl && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                    onClick={close}
                >
                    {isVideoUrl(mediaUrl) ? (
                        <video
                            src={mediaUrl}
                            controls
                            autoPlay
                            className="max-w-full max-h-full object-contain"
                            onClick={(e) => e.stopPropagation()}
                        />
                    ) : (
                        <img
                            src={mediaUrl}
                            alt="full-view"
                            className="max-w-full max-h-full object-contain cursor-zoom-out"
                        />
                    )}

                    <button
                        onClick={close}
                        className="absolute top-4 right-4 text-white text-3xl font-bold hover:opacity-70"
                        aria-label="Tutup"
                    >
                        ×
                    </button>
                </div>
            )}
        </ViewFullContext.Provider>
    );
}