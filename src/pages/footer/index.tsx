import IconeLogo from "../../assets/images/logoRt.png";
import githubIcon from "../../assets/images/githubIcon.png";
import linkedinIcon from "../../assets/images/linkedinIcon.png";

export default function Footer() {
  const Divider = () => {
    return (
      <hr
        style={{
          borderTop: "1px solid lightgrey",
          margin: "16px 0",
        }}
      />
    );
  };

  return (
    <div className="w-full h-95 flex flex-col items-center bg-card-gray">
      <div className="flex w-full flex-col items-center mt-5 gap-5">
        <img className="w-28" src={IconeLogo} alt="IconeLogo" />
        <div className="flex justify-center">
          <img className="w-20 cursor-pointer" src={githubIcon} alt="githubIcon" />
          <img className="w-20 cursor-pointer" src={linkedinIcon} alt="linkedinIcon" />
        </div>

        <div className="w-full">
          <Divider />
        </div>

        <p>© 2026 Reverson Thaiam. All Rights Reserved.</p>
      </div>
    </div>
  );
}
