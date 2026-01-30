"use client";

import React, { useRef, useState } from "react";
import { Modal } from "../modal";
import { SkillCard } from "../skillCard";
import type { Tech } from "../../types";
import { technologies } from "../../lib/utils";

export const SkillsWheel = () => {
  const [tech, setTech] = useState<Tech | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  function handleTechSelect(techName: string) {
    const found = technologies.find((t) => t.name === techName);
    if (found) setTech(found);
  }

  const wheelRef = useRef<HTMLDivElement>(null);

  function stopWheelAnimation() {
    setIsPaused(true);
  }

  function returnWheelAnimation() {
    setIsPaused(false);
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Modal
        tech={tech}
        onClose={() => {
          setTech(null);
          returnWheelAnimation();
        }}
      />
      
      <div
        ref={wheelRef}
        className={`
          relative w-[450px] h-[450px]
          ${isPaused ? "" : "animate-wheel"}
        `}
      >
     
        <div className="absolute inset-0 m-auto w-[85%] h-[85%] rounded-full border-[3px] border-dotted border-white pointer-events-none" />
        
        {technologies.map((t, index) => (
          <SkillCard
            key={t.name}
            imageURI={t.imageURI}
            alt={t.name}
            index={index}
            total={technologies.length}
            isPaused={isPaused}
            onClick={() => {
              stopWheelAnimation();
              handleTechSelect(t.name);
            }}
          />
        ))}
      </div>
    </div>
  );
};
