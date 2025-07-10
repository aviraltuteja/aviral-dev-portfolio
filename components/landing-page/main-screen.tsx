import myphoto from "../../public/Asset 10.webp";
import Image from "next/image";
import { BackgroundBeams } from "./bg";

export default function MainScreen(): React.ReactElement {
  return (
    <div className="w-[100vw] md:h-[60vh] h-[100vh] flex flex-col relative overflow-hidden">
      <div className="absolute w-full h-full">
        {/* Hover effect circle */}
        {/* {isHovering && (
          <div
            className="absolute 2xl:w-[200px] 2xl:h-[200px] md:w-[160px] md:h-[160px] rounded-full pointer-events-none z-50"
            style={{
              top: pos.y - 80,
              left: pos.x - 80,
              background: "rgba(255,255,255,0.15)",
              mixBlendMode: "overlay",
              backdropFilter:
                "saturate(300%) contrast(150%) hue-rotate(250deg)  ",
              WebkitBackdropFilter: "saturate(200%) contrast(150%)",
              transition: "opacity 0.2s ease",
            }}
          />
        )} */}

        {/* Background images */}
        {/* <Image
          src={background}
          fill
          className="object-contain opacity-55 object-right "
          style={{
            clipPath: "inset(0 8% 0 69%)",
            transform: "translateX(8%)",
          }}
          alt="background"
          placeholder="blur"
          loading="eager"
        />
        <Image
          src={background}
          fill
          className="object-contain opacity-55 object-left"
          style={{
            clipPath: "inset(0 71% 0 6%)",
            transform: "translateX(-6%)",
          }}
          alt="background"
          placeholder="blur"
          loading="eager"
        /> */}
        <BackgroundBeams />
      </div>

      <div className="h-full w-full bg-[#e9e9e9] 2xl:text-6xl md:text-5xl text-2xl text-zinc-900 p-2 flex flex-col justify-center md:justify-end items-center">
        <div className="relative w-20 md:w-48 2xl:w-60 aspect-square my-4">
          <Image
            src={myphoto}
            alt="aviral-tuteja"
            fill
            className="object-contain"
            priority
            placeholder="blur"
            loading="eager"
          />
        </div>

        <div className="text-center font-medium z-20">
          Hi, My name is Aviral Tuteja
        </div>

        <div className="text-center font-medium z-20">
          I am a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-bl from-blue-500 to-[#00cc00] ">
            Full Stack Developer
          </span>
        </div>
      </div>
    </div>
  );
}
