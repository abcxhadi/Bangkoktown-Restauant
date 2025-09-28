
import { useState, useRef, useEffect } from 'react';

interface VideoPlayerProps {
  src: string;
  onClose: () => void;
}

export const VideoPlayer = ({ src, onClose }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      setIsPlaying(false);
      setShowControls(true);
    };

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setShowControls(true);
    } else {
      video.play();
      setShowControls(false);
    }
  };

  const handleVideoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    togglePlayPause();
  };

  return (
    <div className="relative w-full aspect-[9/16] bg-black rounded-lg overflow-hidden shadow-2xl">
      {/* Close button */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-20 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-all duration-200 hover:scale-110"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      )}

      <video
        ref={videoRef}
        src={src}
        className="w-full h-auto object-cover"
        onClick={handleVideoClick}
        playsInline
        preload="metadata"
        style={{ cursor: "pointer" }}
      />

      {/* Overlay with play/pause button */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          showControls || !isPlaying ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleVideoClick}
        style={{ cursor: "pointer" }}
      >
        <div className="bg-black/60 rounded-full p-4 transform transition-all duration-200 hover:scale-110 hover:bg-black/70">
          {isPlaying ? (
            // Pause icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="white"
            >
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            // Play icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="white"
            >
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};
