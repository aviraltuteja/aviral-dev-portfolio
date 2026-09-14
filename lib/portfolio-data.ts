/**
 * Single source of content for the redesigned home page. Copy is carried over
 * from the pre-redesign components (`landing-page/projects.tsx`,
 * `about-page/*`, `journey-page/index.tsx`, `contact/page.tsx`) so the
 * redesign restates the same facts rather than inventing new ones.
 */

export const profile = {
  name: "Aviral Tuteja",
  role: "SDE2",
  location: "Delhi, India",
  email: "aviraltuteja@gmail.com",
  resume:
    "https://drive.google.com/file/d/1PTN3Gno-ueNVDeiTq091FEz8It_Vz0mq/view?usp=sharing",
  available: true,
  lede: "I gravitate toward startups, where I get to wear several hats and own a feature end to end — from the first commit to the final polish. Mostly TypeScript and Postgres, occasionally Flask, always closer to what the user actually feels.",
} as const;

export const socials = [
  { label: "GitHub", href: "https://github.com/aviraltuteja" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aviral-tuteja/" },
  { label: "Instagram", href: "https://instagram.com/lankapati_ra.one" },
] as const;

/** The four-cell colophon under the hero. */
export const colophon = [
  {
    label: "Now",
    value: "SDE2 at Unravel.tech, building multi-agent AI systems.",
  },
  {
    label: "Reaching for",
    value: "Next.js, TypeScript, Prisma, Postgres, Docker.",
  },
  {
    label: "Also",
    value: "Screenwriter — 'Nemesis' took best script at four festivals.",
  },
  {
    label: "Since",
    value: "First lines of HTML in a school IT club, 2010.",
  },
] as const;

/**
 * Toolkit grid, which doubles as the filter for the work index below it.
 * `key` maps to an icon in `components/home/selected-work.tsx`.
 */
export const tools = [
  { name: "NextJS", key: "next" },
  { name: "React", key: "react" },
  { name: "TypeScript", key: "typescript" },
  { name: "CSS", key: "css" },
  { name: "Prisma", key: "prisma" },
  { name: "PostgreSQL", key: "postgres" },
  { name: "Jotai", key: "jotai" },
  { name: "Redux", key: "redux" },
  { name: "UI/UX", key: "uiux" },
  { name: "Technical SEO", key: "seo" },
  { name: "Docker", key: "docker" },
  { name: "Flask", key: "flask" },
] as const;

export type Work = {
  id: number;
  title: string;
  role: string;
  period: string;
  link: string;
  /** One line for the collapsed index row. */
  summary: string;
  /** The full account, revealed on expand. */
  detail: string;
  tools: string[];
};

export const work: Work[] = [
  {
    id: 7,
    title: "Unravel.tech",
    role: "SDE2",
    period: "Aug 2025 — Present",
    link: "https://unravel.tech",
    summary:
      "Built production multi-agent AI systems with DSPy, RAG, streaming widgets, and evaluation-led iteration.",
    detail:
      "Designed and shipped a portfolio of DSPy-based agents, including workflow selection, ReAct tool-use orchestration, and domain workflows for CRM context, meeting prep, and hygiene automation. Built Pinecone-backed semantic search and RAG pipelines, shipped streaming inline Chart.js widgets, and improved observability/data infrastructure with Langfuse instrumentation and Snowflake-backed repositories.",
    tools: ["TypeScript", "PostgreSQL", "Flask", "Docker", "API Development"],
  },
  {
    id: 1,
    title: "Surety Seven",
    role: "Full Stack Developer",
    period: "Feb 2024 — Aug 2025",
    link: "https://suretyseven.com",
    summary:
      "Document generation, real-time internal chat, and a landing page that tripled search impressions.",
    detail:
      "Implemented full stack features including document generation, internal chats, and statistical displays. Designed UI components, strategised UX flows, and integrated Pusher, DocX, Framer Motion, Tanstack, and Recharts. Redesigned the landing page and implemented technical SEO, increasing monthly impressions by over 200%.",
    tools: [
      "React",
      "NextJS",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Jotai",
      "CSS",
      "Technical SEO",
      "Docker",
      "UI/UX",
    ],
  },
  {
    id: 2,
    title: "Web Browser Query Agent",
    role: "Personal Project",
    period: "Jun 2025",
    link: "https://github.com/aviraltuteja/WebBrowserQueryAgent",
    summary:
      "An agent that reads intent first, then decides whether it needs to scrape the web at all.",
    detail:
      "An AI-powered agent that streamlines information retrieval by reading user intent up front and returning concise, validated insights. It leans on historical data where it can and performs real-time web scrapes only when it must, which keeps summaries both fast and actionable.",
    tools: ["NextJS", "React", "PostgreSQL", "CSS", "UI/UX"],
  },
  {
    id: 3,
    title: "TodoList",
    role: "Personal Project",
    period: "Apr 2025",
    link: "https://atlabs-todo.vercel.app/",
    summary:
      "The 'hello world' of apps, built deliberately as an excuse to learn Django and Redux properly.",
    detail:
      "Yes, a todo list is the hello world of development — that was the point. I used it to learn Django and Redux end to end: a Django REST API backed by PostgreSQL for persistence, plus JWT authentication, wired to a Redux front end.",
    tools: [
      "Django",
      "Redux",
      "React",
      "PostgreSQL",
      "CSS",
      "UI/UX",
      "JWT Authentication",
    ],
  },
  {
    id: 4,
    title: "CGIAR — IWMI",
    role: "Software Engineer & Consultant",
    period: "Jan 2025 — Mar 2025",
    link: "https://mira-wasca.com",
    summary:
      "Migrated a legacy database and re-hosted a Flask app with near-zero downtime, then added data viz.",
    detail:
      "Migrated data from ElephantDB to Render and re-hosted the Flask app across Render and GoDaddy with minimal downtime. Built a new data visualisation feature with Plotly inside Flask, which cut both load times and hosting costs.",
    tools: [
      "Flask",
      "Plotly",
      "PostgreSQL",
      "CSS",
      "Render",
      "API Development",
    ],
  },
  {
    id: 5,
    title: "Vruent",
    role: "Software Developer",
    period: "Nov 2024 — Feb 2025",
    link: "https://vruent.com",
    summary:
      "High-performance landing pages, a cheaper hosting setup, and the skeleton of an in-house CMS.",
    detail:
      "Developed high-performance landing pages with Next.js and Tailwind, optimised the website infrastructure by migrating to more efficient hosting, and architected the foundational structure for an in-house CMS.",
    tools: ["NextJS", "CSS", "UI/UX", "Technical SEO", "TypeScript"],
  },
  {
    id: 6,
    title: "Kaksha.ai",
    role: "Software Engineer Intern",
    period: "Sep 2023 — Jan 2024",
    link: "https://kaksha.ai",
    summary:
      "Interactive student-demo prototypes: in-browser coding, chatbot, video, and submissions.",
    detail:
      "Contributed to a live product by implementing advanced React features and integrating ReactMUI, CodeMirror, ReactPdf, and ReactYoutube. Collaborated on Python API integration and picked up Docker and Git operations along the way.",
    tools: ["React", "Docker", "CSS", "UI/UX", "Redux"],
  },
];

/* ------------------------------------------------------------------ about */

/**
 * The Learn / Implement / Iterate cycle, which is the about page's one
 * experimental moment. Each phase is justified with something that actually
 * happened rather than a platitude.
 */
export const cycle = [
  {
    phase: "Learn",
    caption: "Pick up whatever the problem needs",
    body: "Pusher, Flask, Figma, Django — none of them were on my CV the week before I shipped something with them. Starting from zero on a tool is not the risky part of a project; pretending you already know it is.",
  },
  {
    phase: "Implement",
    caption: "Own the feature end to end",
    body: "From the first commit to the final polish: schema, API, state, and the pixel the user actually clicks. Handing off half a feature is how the seams show up in the product later.",
  },
  {
    phase: "Iterate",
    caption: "Then measure, and go again",
    body: "The Surety Seven landing page did not gain 200% of its impressions on the first pass. It gained them on the revisit, once there was real search data to design against.",
  },
] as const;

/**
 * Field notes — the six stories from the pre-redesign `explanation.tsx`, each
 * tagged with what it actually cost to learn.
 */
export const fieldNotes = [
  {
    title: "Real-time chat, learned on the job",
    learned: "Pusher · WebSockets",
    body: "Inter-team communication for case-based operations was scattered across platforms. I picked up Pusher from scratch, built dynamic channel communication over WebSockets, and pulled those conversations into one place.",
  },
  {
    title: "Flask, for CGIAR's IWMI platform",
    learned: "Flask",
    body: "An opportunity to contribute to a CGIAR initiative arrived with a stack I had never touched. I upskilled in Flask, implemented the key features, and shipped to the IWMI platform.",
  },
  {
    title: "Redesigning the company's static pages",
    learned: "Figma · Technical SEO",
    body: "Unfamiliar with Figma at the start, I took ownership of the redesign anyway — clean, modern interfaces with technical SEO baked in. That work is the direct ancestor of this portfolio's design.",
  },
  {
    title: "Automating document generation",
    learned: "DocX",
    body: "Built a tool that generates the staple case documents automatically. It removed a standing manual task from the operations team and saved the company a genuinely silly number of hours.",
  },
  {
    title: "Interactive prototypes for student demos",
    learned: "React · Docker",
    body: "As an intern, I built prototypes for a demo platform covering in-browser coding, chatbot interaction, video, and submissions — integrating ReactMUI, CodeMirror, ReactPdf, and ReactYoutube while collaborating on Python API integration.",
  },
  {
    title: "Notifications that point somewhere",
    learned: "WebSockets",
    body: "Added an access-request feature over WebSockets, then tagged notifications so an alert routes to the specific tab and subtab it concerns instead of dumping the user on a dashboard.",
  },
] as const;

/** Closing statement on the about page, carried over from `experience.tsx`. */
export const aboutThesis =
  "I've always gravitated towards startups because I thrive where I can expand my horizons, wear multiple hats, and contribute directly to what users see and feel. I enjoy taking ownership of features end-to-end — from the first commit to the final polish — and making decisions that have real impact. It's about more than just code; it's about crafting experiences that matter.";

/* ---------------------------------------------------------------- journey */

/**
 * Milestones carried over from the pre-redesign `journey-page/index.tsx`,
 * flattened into chronological order and tagged with a track. The tracks are
 * the point of the page: the engineering line and the storytelling line run in
 * parallel for years before either becomes a job.
 */
export type Track = "Engineering" | "Storytelling" | "Learning";

export type Milestone = {
  year: number;
  date: string;
  title: string;
  description: string;
  image: string | null;
  track: Track;
};

export const milestones: Milestone[] = [
  {
    year: 2010,
    date: "2010",
    title: "Joined the school's IT club",
    description:
      "Wrote my first lines of HTML and CSS, and learned the basics of computing.",
    image: null,
    track: "Learning",
  },
  {
    year: 2015,
    date: "2015",
    title: "3rd place, SriTeq Senior Quiz",
    description:
      "Secured third place in the inter-school quiz hosted by The Sriram School.",
    image: null,
    track: "Learning",
  },
  {
    year: 2016,
    date: "2016",
    title: "3rd place, TCS ITWiz Delhi edition",
    description:
      "Third place in the Delhi edition of TCS ITWiz, India's biggest inter-school IT quiz.",
    image: "/TCS.png",
    track: "Learning",
  },
  {
    year: 2019,
    date: "2019",
    title: "Started Java at PepCoding",
    description:
      "Began learning Java, data structures, algorithms, and problem-solving fundamentals.",
    image: null,
    track: "Learning",
  },
  {
    year: 2020,
    date: "Apr 2020 — Jun 2020",
    title: "Content Writing Intern, Wepreneurs",
    description:
      "Took a break from programming to write marketing content remotely, refining writing, editing, and research.",
    image: null,
    track: "Storytelling",
  },
  {
    year: 2021,
    date: "Apr 2021",
    title: "Co-Director and Producer, God in a Metro",
    description:
      "Released a zero-budget web series made with college friends, directing a team of 20+ people across background score, cinematography, and voiceovers.",
    image: "/Godiam.png",
    track: "Storytelling",
  },
  {
    year: 2021,
    date: "Jul 2021 — Sep 2021",
    title: "Jr. Screenwriter & Script Supervisor, Barsaati Films",
    description:
      "Worked on a sitcom set in the South Campus of Delhi University, as screenwriter and script supervisor alongside production and casting tasks.",
    image: null,
    track: "Storytelling",
  },
  {
    year: 2022,
    date: "Aug 2022",
    title: "Capture Films, college project",
    description:
      "Built a React landing page for a college project, and learned the fundamentals of front-end development.",
    image: "/Capture.png",
    track: "Engineering",
  },
  {
    year: 2022,
    date: "Aug 2022",
    title: "Song featured in Rolling Stone India",
    description:
      "One of my songs was mentioned on Rolling Stone India's page as part of the daily top ten.",
    image: null,
    track: "Storytelling",
  },
  {
    year: 2023,
    date: "Dec 2019 — Aug 2023",
    title: "Screenwriter, Nemesis",
    description:
      "The short film 'Nemesis' released on TataPlay Binge and Hungama, and won best script/writer at four film festivals.",
    image: "/Nemesis.png",
    track: "Storytelling",
  },
  {
    year: 2023,
    date: "Jun 2023",
    title: "Saanjh Matrimonial Services, personal project",
    description:
      "Handled frontend and backend with EJS templates, added token-based authentication, and tightened the UX flow.",
    image: null,
    track: "Engineering",
  },
  {
    year: 2023,
    date: "Sep 2023 — Jan 2024",
    title: "Software Engineer Intern, Kaksha.ai",
    description:
      "Worked on React projects, integrated third-party libraries, and collaborated on Python API integrations and Docker setups.",
    image: "/certi1.png",
    track: "Engineering",
  },
  {
    year: 2024,
    date: "Feb 2024 — Aug 2025",
    title: "Full Stack Developer, Surety Seven",
    description:
      "Built full stack features, APIs, and internal tools. Revamped landing pages, integrated libraries, and lifted SEO impressions by 200%.",
    image: "/S7.png",
    track: "Engineering",
  },
  {
    year: 2024,
    date: "Nov 2024 — Feb 2025",
    title: "Software Developer, Vruent",
    description:
      "Developed dynamic landing pages, migrated hosting to cut costs, and laid the foundation for an in-house CMS.",
    image: null,
    track: "Engineering",
  },
  {
    year: 2025,
    date: "Jan 2025 — Mar 2025",
    title: "Software Developer & Consultant, CGIAR",
    description:
      "Migrated legacy databases and deployed Flask apps with near-zero downtime, and delivered new data visualisations with Plotly.",
    image: null,
    track: "Engineering",
  },
  {
    year: 2025,
    date: "Aug 2025 — Present",
    title: "SDE2, Unravel.tech",
    description:
      "Built and shipped multi-agent AI systems with DSPy, ReAct orchestration, eval-driven optimization, semantic-search/RAG pipelines, and streaming widget generation. Location: Pune, India.",
    image: null,
    track: "Engineering",
  },
];

/* ------------------------------------------------------------------- home */

/** Inverted "receipts" strip. Deliberately mixes the engineering and the not. */
export const receipts = [
  {
    figure: "200%+",
    label: "Search impressions",
    note: "Lift after the Surety Seven landing page redesign and technical SEO pass.",
  },
  {
    figure: "6",
    label: "Products shipped",
    note: "Across full stack product work, data visualisation, and CMS foundations.",
  },
  {
    figure: "4",
    label: "Festival awards",
    note: "Best script and best writer, for the short film 'Nemesis'.",
  },
  {
    figure: "16",
    label: "Years in",
    note: "Counting from the first line of HTML written in a school IT club.",
  },
] as const;
