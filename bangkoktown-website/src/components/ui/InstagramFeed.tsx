import { useState, useRef, useEffect } from "react";

export const VideoPlayer = ({ src, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef(null);

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

  const handleVideoClick = (e) => {
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
        className="w-full h-full object-cover"
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
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

// Updated InstagramFeed component
export const InstagramFeed = () => {
  const [selectedReel, setSelectedReel] = useState(null);

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

  return (
    <section id="gallery" className="py-24 bg-company-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="netflix-heading text-5xl lg:text-6xl mb-4 text-company-secondary font-bold">
            Gallery
          </h2>
          <p className="netflix-body text-company-secondary/80 text-lg max-w-3xl mx-auto leading-relaxed font-light">
            capturing the chaotic fun and delicious chaos of restaurant life
            with endless laughs!
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
                <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110">
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-8 bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-md w-full max-h-[90vh] flex flex-col">
            <VideoPlayer
              src={selectedReel.videoSrc}
              onClose={() => setSelectedReel(null)}
            />
          </div>
        </div>
      )}
    </section>
  );
};
