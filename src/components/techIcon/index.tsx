import reactIcon from "../../assets/images/reactIcon.png";
import javascriptLogo from "../../assets/images/javascriptLogo.png";
import rubyLogo from "../../assets/images/rubyLogo.png";
import tailwindLogo from "../../assets/images/tailwindLogo.png";
import htmlLogo from "../../assets/images/htmlLogo.png";
import cssLogo from "../../assets/images/cssLogo.png";
import nodeLogo from "../../assets/images/nodeLogo.png";
import vueJsLogo from "../../assets/images/vueJsLogo.png";
import nextJsLogo from "../../assets/images/nextJsLogo.png";
import type { FC } from "react";

interface TechIconProps {
  name: string;
  className?: string;
}

const iconMap: Record<string, string> = {
  React: reactIcon,
  Javascript: javascriptLogo,
  "Ruby on Rails": rubyLogo,
  Tailwind: tailwindLogo,
  HTML: htmlLogo,
  CSS: cssLogo,
  "Node.js": nodeLogo,
  "Vue.js": vueJsLogo,
  "Next.js": nextJsLogo,
};

export const TechIcon: FC<TechIconProps> = ({ name, className = "w-10" }) => {
  const icon = iconMap[name] || "/placeholder.png";
  
  return (
    <img
      className={className}
      src={icon}
      alt={name}
      title={name}
    />
  );
};