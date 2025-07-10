import JourneyTimeline from "@/components/journey-page";

export default function Journey(): React.ReactElement {
  return (
    <div className="w-screen min-h-[100vh] flex flex-col bg-[#111111]">
      <div className="w-full h-[100vh] bg-[#e9e9e9] text-[#111111] flex items-center justify-center">
        <div className="absolute w-full hidden md:block"></div>
        <div className="flex flex-col text-center">
          <div className="md:text-4xl 2xl:text-5xl font-medium text-2xl">
            These are the major milestones which will give an idea
          </div>
          <div className="md:text-6xl 2xl:text-7xl text-3xl">
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
