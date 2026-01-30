'use client';

import React from "react";

interface SkillCardProps {
  imageURI: string;
  alt: string;
  index: number;
  total: number;
  isPaused?: boolean;
  onClick?: () => void;
}

export const SkillCard = ({ imageURI, alt, index, total, isPaused, onClick }: SkillCardProps) => {
  // Calcula o angulo de rotacao baseado no index
  const angle = (360 / total) * index;
  const radius = 200; // px - distancia do centro
  const radiusMobile = 120; // px - distancia do centro em mobile

  return (
    <div
      className="absolute left-[42%] top-[42%]"
      style={{
        transform: `rotate(${angle}deg) translateX(${radius}px)`,
      }}
    >
      <button
        type="button"
        onClick={onClick}
        className={`
          w-20 h-20
          flex items-center justify-center
          cursor-pointer
          transition-transform duration-300
          hover:scale-125
          focus:outline-none
          ${isPaused ? "animation-paused" : "animate-reverse-wheel"}
        `}
        style={{
          transform: `rotate(${-angle}deg)`,
        }}
      >
        <img
          src={imageURI || "/placeholder.svg"}
          alt={alt}
          className="w-20 h-20 object-contain pointer-events-none"
        />
      </button>
    </div>
  );
};
