import logoRT from "../../assets/images/logoRt.png";
import changeColor from "../../assets/images/changeColor.png";

export default function Header() {
  return (
    <div className="flex items-center justify-center h-45">
      <div className="container flex justify-between items-center">
        <div>
          <img className="w-50" src={logoRT} alt="logo" />
        </div>
        <div className="flex gap-8">
          <a href="#about" rel="noopener noreferrer">
            <button className="h-14 w-32 bg-primary rounded-md text-black text-2xl cursor-pointer">
              About
            </button>
          </a>
          <a href="#projects">
            <button className="h-14 w-32 bg-primary rounded-md text-black text-2xl cursor-pointer">
              Projects
            </button>
          </a>
          <a href="#contact">
            <button className="h-14 w-32 bg-primary rounded-md text-black text-2xl cursor-pointer">
              Contact
            </button>
          </a>
        </div>
        <div>
          <img className="w-10" src={changeColor} alt="changeColor" />
        </div>
      </div>
    </div>
  );
}
