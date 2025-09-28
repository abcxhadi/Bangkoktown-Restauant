import * as React from "react";
import { useRef, useEffect, useState } from "react";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";

interface VideoPlayerProps {
  src: string;
  onClose: () => void;
}

export const VideoPlayer = ({ src, onClose }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true); // New state for controls visibility
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const hideControls = () => {
    controlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 3000); // Hide after 3 seconds of inactivity
  };

  const showAndResetControls = () => {
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    setShowControls(true);
    hideControls();
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);

    // Initial hide after a delay
    hideControls();

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
      showAndResetControls(); // Show controls on play/pause
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
      showAndResetControls(); // Show controls on mute/unmute
    }
  };

  const handleVideoClick = (e: React.MouseEvent<HTMLVideoElement>) => {
    // Prevent clicks on controls from closing the player
    if (e.target instanceof HTMLVideoElement) {
      togglePlay();
    }
    showAndResetControls(); // Show controls on video click
  };

  return (
    <div
      className="video-player-container relative w-full h-full max-w-full max-h-full flex flex-col items-center justify-center bg-black overflow-hidden"
      onMouseEnter={showAndResetControls}
      onMouseLeave={() => {
        if (isPlaying) hideControls(); // Hide controls only if playing
      }}
      onClick={showAndResetControls} // For mobile touch events
    >
      <button
        onClick={onClose}
        className={`close-button absolute top-4 right-4 text-white text-2xl z-10 p-2 rounded-full bg-black/50 hover:bg-black/75 transition-opacity duration-300 ${
          showControls ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <IconContext.Provider value={{ className: "react-icons" }}>
          <FaTimes />
        </IconContext.Provider>
      </button>
      <video ref={videoRef} src={src} onClick={togglePlay} className="w-full h-full object-cover" />
      <div
        className={`controls absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 bg-black/50 p-3 rounded-full transition-opacity duration-300 ${
          showControls ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <button onClick={togglePlay} className="control-button text-white text-xl">
          <IconContext.Provider value={{ className: "react-icons" }}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </IconContext.Provider>
        </button>
        <button onClick={toggleMute} className="control-button text-white text-xl">
          <IconContext.Provider value={{ className: "react-icons" }}>
            {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
};

// Updated InstagramFeed component
interface InstagramFeedProps {
  setIsPlayerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const InstagramFeed = ({ setIsPlayerOpen }: InstagramFeedProps) => {
  const [selectedReel, setSelectedReel] = useState<{
    id: number;
    videoSrc: string;
    imgSrc: string;
    postUrl: string;
  } | null>(null);

  const reels = [
    {
      id: 1,
      videoSrc: "/videos/instagram/video1.mp4",
      imgSrc: "/images/itemImages/pad_thai.jpg",
      postUrl:
        "https://www.instagram.com/reel/DNvLn9Z5pAW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: 2,
      videoSrc: "/videos/instagram/video2.mp4",
      imgSrc: "/images/itemImages/green_curry.jpg",
      postUrl:
        "https://www.instagram.com/reel/DL9lgYxxbxX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: 3,
      videoSrc: "/videos/instagram/video3.mp4",
      imgSrc: "/images/itemImages/mango_sticky_rice.jpg",
      postUrl:
        "https://www.instagram.com/reel/DL44oHJRkoo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
    {
      id: 4,
      videoSrc: "/videos/instagram/video4.mp4",
      imgSrc: "/images/itemImages/tom_yum_soup.jpg",
      postUrl:
        "https://www.instagram.com/reel/DH0PRlGRCn4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    },
  ];

  useEffect(() => {
    setIsPlayerOpen(selectedReel !== null);
  }, [selectedReel, setIsPlayerOpen]);

  return (
    <section id="gallery" className="py-24 bg-company-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="netflix-heading text-5xl lg:text-6xl mb-4 text-company-secondary font-bold">
            Gallery
          </h2>
          <p className="netflix-body text-company-secondary/80 text-lg max-w-3xl mx-auto leading-relaxed font-light">
            When fun meets food, chaos turns into flavor, and laughter never
            leaves the table.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {reels.map((reel) => (
            <div
              key={reel.id}
              onClick={() => setSelectedReel(reel)}
              className="group relative block w-full h-96 overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              <video
                src={reel.videoSrc}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                preload="metadata"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="text-white opacity-100 transition-opacity duration-300 transform group-hover:scale-110">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="https://www.instagram.com/bangkoktownuae/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full px-8 py-3 transition-all duration-300 transform hover:scale-105 font-medium flex items-center justify-center gap-2 mx-auto w-fit"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            View Profile
          </a>
        </div>
      </div>

      {/* Modal Component */}
      {selectedReel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-8 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-h-[90vh] flex flex-col">
            <VideoPlayer
              src={selectedReel.videoSrc}
              onClose={() => {
                setSelectedReel(null);
                setIsPlayerOpen(false); // Ensure nav bar reappears
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
};
