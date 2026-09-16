
const VIDEO_EXTENSIONS = [".mp4", ".webm", ".ogg", ".mov"];

export function isVideoUrl(url: string): boolean {
    return VIDEO_EXTENSIONS.some((ext) => url.toLowerCase().endsWith(ext));
}