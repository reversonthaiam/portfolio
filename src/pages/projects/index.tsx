import { useState } from "react";
import projectImage1 from "../../assets/images/projectImage1.png";
import { TechIcon } from "../../components/techIcon";

const projects = [
  {
    id: 1,
    title: "Projeto de Ruby",
    about:
      "Working closely with the ONORI-B team, I collaborated to ensure that the website not only met but exceeded their expectations.",
    tecnologiesUsed: ["React", "Javascript"],
    category: ["Ruby on Rails"],
    link: "#",
    image: "",
  },
  {
    id: 2,
    title: "Projeto de frontend",
    about:
      "Working closely with the ONORI-B team, I collaborated to ensure that the website not only met but exceeded their expectations.",
    tecnologiesUsed: ["React", "Ruby on Rails"],
    category: ["Frontend"],
    link: "#",
    image: "",
  },
  {
    id: 3,
    title: "Projeto de frontend",
    about:
      "Working closely with the ONORI-B team, I collaborated to ensure that the website not only met but exceeded their expectations.",
    tecnologiesUsed: ["React", "Ruby on Rails"],
    category: ["Frontend"],
    link: "#",
    image: "",
  },
  {
    id: 4,
    title: "Projeto de frontend",
    about:
      "Working closely with the ONORI-B team, I collaborated to ensure that the website not only met but exceeded their expectations.",
    tecnologiesUsed: ["React", "Ruby on Rails"],
    category: ["Frontend"],
    link: "#",
    image: "",
  },
  {
    id: 5,
    title: "Projeto de frontend",
    about:
      "Working closely with the ONORI-B team, I collaborated to ensure that the website not only met but exceeded their expectations.",
    tecnologiesUsed: ["React", "Ruby on Rails"],
    category: ["Frontend"],
    link: "#",
    image: "",
  },
];

type ProjectFilter = "all Projects" | "Frontend" | "Ruby on Rails" | "none";

export default function Projects() {
  const [buttonSelected, setButtonSelected] =
    useState<ProjectFilter>("all Projects");
  const [itemsToShow, setItemsToShow] = useState(2);

  const filteredProjects = projects.filter(
    (item) =>
      buttonSelected === "all Projects" ||
      item.category.includes(buttonSelected),
  );

  const displayedProjects = filteredProjects.slice(0, itemsToShow);
  const hasMoreProjects = itemsToShow < filteredProjects.length;

  const loadMore = () => {
    setItemsToShow((prev) => prev + 2);
  };

  return (
    <>
      <div id="projects" className="flex items-center justify-center flex-col">
        <h1 className="text-white font-medium text-5xl mb-12.5">Projects</h1>
        <div className="flex flex-row gap-16 mb-28">
          <button
            onClick={() => setButtonSelected("all Projects")}
            className={`${buttonSelected == "all Projects" ? "bg-primary text-black" : "bg-background text-white"} w-40 h-14 text-2xl border-2 border-primary hover:opacity-80 transition cursor-pointer"`}
          >
            All Projects
          </button>
          <button
            onClick={() => setButtonSelected("Frontend")}
            className={`${buttonSelected == "Frontend" ? "bg-primary text-black" : "bg-background text-white"} w-40 h-14 text-2xl border-2 border-primary hover:opacity-80 transition cursor-pointer"`}
          >
            Frontend
          </button>
          <button
            onClick={() => setButtonSelected("Ruby on Rails")}
            className={`${buttonSelected == "Ruby on Rails" ? "bg-primary text-black" : "bg-background text-white"} w-40 h-14 text-2xl border-2 border-primary hover:opacity-80 transition cursor-pointer"`}
          >
            Ruby on Rails
          </button>
        </div>
        <div className="flex mb-32">
          <div className="grid grid-cols-2 gap-20">
            {displayedProjects.map(
              (item) =>
                (buttonSelected === "all Projects" ||
                  item.category.includes(buttonSelected)) && (
                  <div
                    key={item.id}
                    className="flex flex-col items-center gap-4 w-141.25 h-157.5 rounded-md bg-card-gray"
                  >
                    <div className="w-full h-63.75">
                      <img src={projectImage1} alt="projectImage1" />
                    </div>
                    <div className="text-white text-5xl font-bold">
                      {item.title}
                    </div>
                    <div className="text-text-gray text-justify font-medium text-[18px] h-20 mx-8 text-ellipsis">
                      {item.about}
                    </div>
                    <div className="flex items-center flex-col gap-3 mb-5">
                      <p>Technologies Used</p>
                      <div className="flex flex-row gap-4">
                        {item.tecnologiesUsed.map((tech, index) => (
                          <TechIcon key={index} name={tech} />
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-row gap-8">
                      <button className="w-40 h-14 bg-primary text-black text-[18px] font-medium hover:opacity-80 transition cursor-pointer">
                        View Live Demo
                      </button>

                      <button className="w-40 h-14 border-2 border-white text-white text-[18px] font-medium hover:opacity-80 transition cursor-pointer">
                        Visit Site
                      </button>
                    </div>
                  </div>
                ),
            )}
          </div>
        </div>

        {hasMoreProjects && (
          <div className="flex justify-center mt-12">
            <button
              onClick={loadMore}
              className="w-40 h-14 bg-primary text-black text-[18px] font-medium mb-32 cursor-pointer hover:opacity-80 transition"
            >
              View All Projects
            </button>
          </div>
        )}
      </div>
    </>
  );
}
