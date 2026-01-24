import React from "react";
import logoRT from "../../assets/images/logoRt.png"
import changeColor from "../../assets/images/changeColor.png"

export default function Header() {
  return (
    <div className="flex items-center justify-center h-45">
      <div className="container flex justify-between items-center">
        <div>
          <img className="w-50" src={logoRT} alt="logo" />
        </div>
        <div className="flex gap-8">
          <button className="h-14 w-32 bg-primary rounded-2xl text-black text-2xl" >About</button>
          <button className="h-14 w-32 bg-primary rounded-2xl text-black text-2xl">Projects</button>
          <button className="h-14 w-32 bg-primary rounded-2xl text-black text-2xl">Contact</button>
        </div>
        <div>
          <img className="w-10" src={changeColor} alt="changeColor" />
        </div>
      </div>
    </div>
  );
}
