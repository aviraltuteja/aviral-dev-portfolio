import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

export default function Explanation(): React.ReactElement {
  const stories = [
    {
      title: "Learning Pusher & WebSockets",
      description:
        "Faced with a challenge of improving inter-team communication for case-based operations, I picked up Pusher from scratch, built dynamic channel communication using WebSockets, and streamlined conversations that were previously scattered across platforms.",
    },
    {
      title: "Flask for CGIAR's IWMI Project",
      description:
        "When presented with an opportunity to contribute to a CGIAR initiative, I quickly upskilled in Flask, implemented key features, and successfully shipped code for the IWMI platform, despite having no prior experience with it.",
    },
    {
      title: "Redesigned Company's Static Pages with Figma",
      description:
        "Though unfamiliar with Figma initially, I took ownership of redesigning the company’s static pages, created clean, modern interfaces, and integrated technical SEO best practices. This experience directly influenced my current portfolio’s design.",
    },
    {
      title: "Automating Document Generation",
      description:
        "Built a document generation tool that automated the creation of staple case documents, significantly reducing manual effort for the operations team and saving countless man-hours for the company.",
    },
    {
      title: "Developed Interactive Prototypes for Student Demos",
      description:
        "As an intern, I developed prototypes for a student demo platform enabling coding, chatbot interaction, video viewing, and work submission. I applied advanced React skills, integrating libraries like ReactMUI, CodeMirror, ReactPdf, and ReactYoutube, while collaborating on Python API integration and gaining hands-on experience with Docker and Git operations.",
    },
    {
      title: "Enhanced Platform Operations with Notifications",
      description:
        "Accelerated platform operations by implementing an access request feature using WebSockets for real-time communication. I also added tagged notifications, directing alerts to specific tabs and subtabs, improving user experience and platform efficiency.",
    },
  ];

  return (
    <div className="w-full h-auto bg-[#e9e9e9] p-8 md:p-20 2xl:p-28 overflow-y-auto">
      <div className="max-w-5xl mx-auto space-y-8">
        {stories.map((story, index) => (
          <div
            key={index}
            className="relative border rounded-2xl p-6 shadow-md bg-[#e9e9e9]">
            <div className="absolute inset-x-0 bottom-0 h-1 w-full bg-gradient-to-r z-10 from-blue-500 via-[#00cc00] to-blue-500 blur-sm"></div>
            <div className="flex items-center space-x-3 mb-3">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-[#00aa00] text-xl"
              />
              <h2 className="text-xl 2xl:text-2xl font-semibold text-[#222222]">
                {story.title}
              </h2>
            </div>
            <p className="text-[#333333] text-base 2xl:text-lg leading-relaxed">
              {story.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
