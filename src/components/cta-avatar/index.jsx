"use client";
import { useRef, useEffect } from "react";

const CtaAvatar = () => {
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {  
        if (entry.isIntersecting) {
          videoRef.current.currentTime = 0;
          videoRef.current.play();
        }
      },
      { threshold: 0.3 }
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => observer.disconnect();
  }, []);

  const onVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <div
      id="right"
      onClick={onVideoClick}
      className="rounded-full w-2/5 border-primary-300 border-4 shadow-lg"
    >
      <video
        className="rounded-full w-3/2"
        ref={videoRef}
        src="cta-avatar.webm"
        autoPlay
        muted
        playsInline
      />
    </div>
  );
};

export default CtaAvatar;
