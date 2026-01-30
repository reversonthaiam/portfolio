import type { Tech } from "../types";
import ReactIcon from '../assets/images/reactIcon.png'
import TypescriptIcon from '../assets/images/typescriptIcon.png'
import JavascriptIcon from '../assets/images/javascriptLogo.png'
import NodeIcon from '../assets/images/nodeLogo.png'
import RubyIcon from '../assets/images/rubyLogo.png'
import NextIcon from '../assets/images/nextJsLogo.png'
import VueIcon from '../assets/images/vueJsLogo.png'
import MySqlIcon from '../assets/images/mysqlLogo.png'

export const technologies: Tech[] = [
  {
    name: "React",
    imageURI: ReactIcon,
    description: "Uma biblioteca JavaScript para construir interfaces de usuário.",
    link: "https://react.dev",
  },
  {
    name: "TypeScript",
    imageURI: TypescriptIcon,
    description: "TypeScript é JavaScript com sintaxe para tipos.",
    link: "https://www.typescriptlang.org",
  },
  {
    name: "JavaScript",
    imageURI: JavascriptIcon,
    description: "A linguagem de programação da web.",
    link: "https://developer.mozilla.org/docs/Web/JavaScript",
  },
  {
    name: "MySql",
    imageURI: MySqlIcon,
    description: "Um framework CSS utility-first para desenvolvimento rápido.",
    link: "https://tailwindcss.com",
  },
  {
    name: "Node.js",
    imageURI: NodeIcon,
    description: "Um ambiente de execução JavaScript server-side.",
    link: "https://nodejs.org",
  },
  {
    name: "Ruby on Rails",
    imageURI: RubyIcon,
    description: "Sistema de controle de versão distribuído.",
    link: "https://git-scm.com",
  },
  {
    name: "Next.js",
    imageURI: NextIcon,
    description: "O framework React para produção.",
    link: "https://nextjs.org",
  },
  {
    name: "VueJs",
    imageURI: VueIcon,
    description: "Uma solução de gerenciamento de estado pequena e rápida.",
    link: "https://zustand-demo.pmnd.rs/",
  },
];