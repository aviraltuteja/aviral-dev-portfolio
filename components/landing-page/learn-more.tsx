import { ReactElement } from "react";

export default function LearnMore(): ReactElement {
  return (
    <div className="w-full h-[20vh] md:h-[10vh] bg-[#e9e9e9] flex flex-col items-center justify-center">
      <div className="w-full h-full text-[#111111] bg-[#00cc00] flex items-center justify-center text-4xl cursor-pointer">
        Available for Hire
      </div>
    </div>
  );
}
