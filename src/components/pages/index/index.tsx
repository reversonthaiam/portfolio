import React from "react";
import face from "../../../assets/images/face.png";
import availableIcon from "../../../assets/images/availableIcon.png";

export default function Index() {
  return (
    <>
      <div className="flex justify-center items-center h-220 gap-14">
        <div className="flex flex-col w-148.5 gap-10">
          <div className="flex flex-col mb-10 gap-2">
            <h1 className="text-white text-2xl font-bold mb-2">
              Reverson Thaiam
            </h1>
            <p className="text-primary text-5xl font-bold mb-2">
              Frontend & Ruby on Rails Developer
            </p>
            <p className="text-justify">
              I specialize in crafting immersive user experiences using the
              latest frontend technologies and frameworks to bring your vision
              to life. Additionally, my expertise extends to geoinformatics,
              where I excel in harnessing the power of spatial data to uncover
              actionable insights.
            </p>
          </div>
          <div className="flex items-center gap-12">
            <button className="h-14 w-38 bg-primary rounded-2xl text-black text-2xl">
              Get in Touch
            </button>
            <div className="flex gap-2 items-center">
              <img src={availableIcon} className="w-5 h-5" alt="availableIcon" />
              <p className="text-2xl text-text-gray">Available now</p>
            </div>
          </div>
        </div>

        <div className="relative w-78 h-97.5 overflow-hidden rounded-[70px] bg-background">
          <img
            src={face}
            className="w-full h-full object-cover"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 90% 98%, 10% 98%)",
            }}
            alt="profilePhoto"
          />
        </div>
      </div>
    </>
  );
}
