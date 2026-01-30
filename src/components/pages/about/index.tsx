import whoAmI from "../../../assets/images/whoAmI.png";
import reactIcon from "../../../assets/images/reactIcon.png";
import javascriptLogo from "../../../assets/images/javascriptLogo.png";
import tailwindLogo from "../../../assets/images/tailwindLogo.png";
import htmlLogo from "../../../assets/images/htmlLogo.png";
import cssLogo from "../../../assets/images/cssLogo.png";
import rubyLogo from "../../../assets/images/rubyLogo.png";
import nodeLogo from "../../../assets/images/nodeLogo.png";
import mysqlLogo from "../../../assets/images/mysqlLogo.png";
import vueJsLogo from "../../../assets/images/vueJsLogo.png";
import nextJsLogo from "../../../assets/images/nextJsLogo.png";
import { SkillsWheel } from "../../skillWheels";

export default function About() {
  return (
    <>
      <div id="about" className="flex items-center justify-center mb-37.5">
        <div className="flex container justify-center gap-16">
          <div className="min-h-screen flex items-center justify-center p-4">
            <SkillsWheel />
          </div>
          <div className="flex flex-col w-150 gap-16">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col w-55">
                <h1 className="text-white text-5xl font-bold">About Me</h1>
                <div className="flex flex-row items-center justify-end">
                  <img className="h-1 w-8" src={whoAmI} alt="whoAmI" />
                  <p className="text-end text-primary"> Who Am I?</p>
                </div>
              </div>
              <p className="text-justify text-text-gray text-2xl">
                I am currently a master’s student in Applied Geoinformatics at
                the University of Salzburg, Austria. I have a keen interest in
                front-end and GIS development. My goal is to use my expertise in
                building exciting and functional user interfaces. Additionally,
                employ my geospatial analysis, modeling, and process automation
                skills to engineer innovative, customizable, and sustainable
                software solutions. The following are tech stacks that I use
                regularly:
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex justify-around">
                  <div className="flex flex-col items-center gap-1">
                    <img className="w-16" src={reactIcon} alt="ReactIcon" />
                    <p>React Js</p>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <img className="w-24" src={rubyLogo} alt="rubyLogo" />
                    <p>Ruby on Rails</p>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <img
                      className="w-15"
                      src={javascriptLogo}
                      alt="javascriptLogo"
                    />
                    <p>Javascript</p>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <img className="w-13" src={nodeLogo} alt="nodeLogo" />
                    <p>Node Js</p>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <img className="w-16" src={mysqlLogo} alt="mysqlLogo" />
                    <p>MySql</p>
                  </div>
                </div>

                <div className="flex justify-around">
                  <div className="flex flex-col items-center gap-1">
                    <img className="w-17" src={nextJsLogo} alt="nextJsLogo" />
                    <p>Next Js</p>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <img
                      className="w-15"
                      src={tailwindLogo}
                      alt="tailwindLogo"
                    />
                    <p>Tailwind</p>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <img className="w-15" src={vueJsLogo} alt="vueJsLogo" />
                    <p>Vue Js</p>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <img className="w-16" src={htmlLogo} alt="htmlLogo" />
                    <p>Html</p>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <img className="w-16" src={cssLogo} alt="cssLogo" />
                    <p>CSS</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button className="text-primary text-2xl border-4 w-55 h-14 ml-10">
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
