
import { useState, useRef, useEffect } from 'react';

interface VideoPlayerProps {
  src: string;
}

export const VideoPlayer = ({ src }: VideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative">
      <video
        ref={videoRef}
        src={src}
        className="w-full h-auto"
        onClick={togglePlay}
        controls
        loop
        playsInline
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          onClick={togglePlay}
          className={`bg-black/50 text-white rounded-full p-4 transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
        </button>
      </div>
    </div>
  );
};
