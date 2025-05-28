import myphoto from "../../public/Asset 10.png";
import Image from "next/image";
export default function MainScreen(): React.ReactElement {
  return (
    <div className="w-[100vw] md:h-[60vh] h-[80vh] flex flex-col">
      <div className="h-full w-full bg-[#e9e9e9] md:text-6xl text-4xl text-zinc-900 p-2 flex flex-col justify-end items-center">
        <div className="relative w-20 md:w-48 2xl:w-60 aspect-square my-4">
          <Image
            src={myphoto}
            alt="aviral-tuteja"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="text-center font-medium">
          Hi, My name is Aviral Tuteja
        </div>

        <div className="text-center font-medium">
          I am a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-bl from-blue-500 to-[#00cc00] ">
            Full Stack Developer
          </span>
        </div>
      </div>
    </div>
  );
}
