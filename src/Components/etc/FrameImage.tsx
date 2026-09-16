
import type React from "react";
import { useViewFull } from "./ViewFull";
import { isVideoUrl } from "./helper/MediaType";

type BorderSides = [left: number, top: number, right: number, bottom: number];

interface FrameImageProps {
    imageUrl?: string | null;
    imageHeight?: string;
    className?: string;
    children?: React.ReactNode;
    border?: BorderSides;
    clickable?: boolean;
}

function FrameImage({
    imageUrl = null,
    imageHeight = "h-100",
    className = "",
    children,
    border = [2, 2, 6, 6],
    clickable = true,
}: FrameImageProps) {
    const [left, top, right, bottom] = border;
    const { open } = useViewFull();
    const isVideo = imageUrl ? isVideoUrl(imageUrl) : false;

    const handleClick = () => {
        if (clickable && imageUrl) open(imageUrl);
    };

    return (
        <div
            className={`w-full rounded-sm overflow-hidden ${className}`}
            style={{
                borderStyle: "solid",
                borderColor: "black",
                borderLeftWidth: left,
                borderTopWidth: top,
                borderRightWidth: right,
                borderBottomWidth: bottom,
            }}
        >
            {imageUrl ? (
                isVideo ? (
                    <video
                        src={imageUrl}
                        muted
                        loop
                        autoPlay
                        playsInline
                        onClick={handleClick}
                        className={`w-full ${imageHeight} object-cover ${
                            clickable ? "cursor-zoom-in" : ""
                        }`}
                    />
                ) : (
                    <img
                        src={imageUrl}
                        alt="image-url"
                        onClick={handleClick}
                        className={`w-full ${imageHeight} object-cover ${
                            clickable ? "cursor-zoom-in" : ""
                        }`}
                    />
                )
            ) : (
                <div className={`w-full ${imageHeight} bg-gray-100`} />
            )}

            {children}
        </div>
    );
}

export default FrameImage;