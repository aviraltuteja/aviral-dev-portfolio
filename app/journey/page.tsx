import JourneyTimeline from "@/components/journey-page";
import SecondaryBG from "@/components/secondary-bg";

export default function Journey(): React.ReactElement {
  return (
    <div className="w-full min-h-[100vh] flex flex-col">
      <div className="w-full h-[100vh] bg-[#e9e9e9] text-[#111111] flex items-center justify-center">
        <div className="absolute w-full hidden md:block">
          <SecondaryBG />
        </div>
        <div className="flex flex-col text-center">
          <div className="md:text-4xl 2xl:text-5xl font-medium">
            These are the major milestones which will give an idea
          </div>
          <div className="md:text-6xl 2xl:text-7xl">
            of how I became a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-bl from-blue-500 to-[#00cc00] font-medium">
              Problem Solver
            </span>
            .
          </div>
        </div>
      </div>
      <JourneyTimeline />
    </div>
  );
}
