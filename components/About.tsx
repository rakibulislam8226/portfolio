import { profileImg1, profileImg2 } from "@/public/assets";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaDocker, FaNodeJs, FaPython, FaReact, FaVuejs } from "react-icons/fa";
import {
  TbApi,
  TbBrandDjango,
  TbBrandGraphql,
  TbBrandNextjs,
  TbBrandTailwind,
  TbCloudComputing,
} from "react-icons/tb";
import {
  SiCelery,
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiFlask,
  SiGithubactions,
  SiJenkins,
  SiMysql,
  SiNestjs,
  SiNginx,
  SiOpenai,
  SiPostgresql,
  SiRedis,
  SiSelenium,
  SiWagtail,
} from "react-icons/si";

// Grouped so the stack reads as a system rather than a wall of buzzwords.
const stack = [
  {
    group: "Languages & Frameworks",
    items: [
      { name: "Python", icon: <FaPython /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Django", icon: <TbBrandDjango /> },
      { name: "Django REST Framework", icon: <TbApi /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "Nest.js", icon: <SiNestjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "GraphQL", icon: <TbBrandGraphql /> },
      { name: "Celery", icon: <SiCelery /> },
      { name: "Wagtail CMS", icon: <SiWagtail /> },
    ],
  },
  {
    group: "AI & Automation",
    items: [
      { name: "LangChain", icon: <SiOpenai /> },
      { name: "RAG pipelines", icon: <AiFillThunderbolt /> },
      { name: "Web scraping", icon: <SiSelenium /> },
    ],
  },
  {
    group: "Frontend",
    items: [
      { name: "React", icon: <FaReact /> },
      { name: "Vue.js", icon: <FaVuejs /> },
      { name: "Next.js", icon: <TbBrandNextjs /> },
      { name: "Tailwind CSS", icon: <TbBrandTailwind /> },
    ],
  },
  {
    group: "Data",
    items: [
      { name: "PostgreSQL", icon: <SiPostgresql /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "Redis", icon: <SiRedis /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Multi-tenant design", icon: <AiFillThunderbolt /> },
    ],
  },
  {
    group: "Infrastructure & Practice",
    items: [
      { name: "Docker", icon: <FaDocker /> },
      { name: "Jenkins", icon: <SiJenkins /> },
      { name: "GitHub Actions", icon: <SiGithubactions /> },
      { name: "Nginx", icon: <SiNginx /> },
      { name: "CI/CD & DevOps", icon: <TbCloudComputing /> },
      { name: "Test-Driven Development", icon: <AiFillThunderbolt /> },
    ],
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hello! My name is{" "}
            <span className="text-textGreen">Rakibul Islam</span>, and I have
            spent the last five years building the parts of an application most
            users never see &mdash; the APIs, the data models, and the
            infrastructure they run on.
          </p>
          <p>
            I started out writing Django views and gradually took on the harder
            questions: how do you keep a{" "}
            <span className="text-textGreen">multi-tenant system</span> fast when
            every client wants their own domain and database? Where does a
            background job belong, and what happens when it fails at 3 a.m.?
            These days I spend as much time on{" "}
            <span className="text-textGreen">system and database design</span> as
            I do writing the code &mdash; the schema and the boundaries are
            usually where a project is won or lost.
          </p>
          <p>
            At <span className="text-textGreen">Riseup Labs</span> I architect
            and deploy the cloud infrastructure behind our platforms, automate
            releases with Jenkins and GitHub Actions, and own the DevOps
            lifecycle end to end &mdash; containerization, monitoring, and
            performance work. I have shipped Stripe billing, AI-generated
            summaries with <span className="text-textGreen">LangChain</span> and{" "}
            <span className="text-textGreen">RAG</span> over open-source models,
            and an ERP suite wired into IoT devices.
          </p>
          <p>
            I write tests first when it matters, review carefully, and prefer the
            boring solution that survives a year in production over the clever
            one that does not. I also enjoy giving back &mdash; I mentor junior
            developers and maintain{" "}
            <a
              href="https://www.npmjs.com/package/nest-debug-panel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textGreen underline decoration-textGreen/40 hover:decoration-textGreen duration-300"
            >
              nest-debug-panel
            </a>
            , an open-source debugging tool for NestJS applications.
          </p>

          {/* skills sections  */}
          <p>The tools I reach for most, grouped by where they live:</p>
          <div className="flex flex-col gap-6 mt-4">
            {stack.map(({ group, items }) => (
              <div key={group}>
                <h3 className="text-xs font-titleFont uppercase tracking-[0.15em] text-textGreen/80">
                  {group}
                </h3>
                <ul className="text-sm font-titleFont grid grid-cols-1 sml:grid-cols-2 gap-x-6 gap-y-2 mt-3">
                  {items.map(({ name, icon }) => (
                    <li key={name} className="flex items-center gap-2">
                      <span className="text-textGreen shrink-0">{icon}</span>
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lgl:w-1/3 flex flex-col gap-16">
          {/* profile image section  */}
          <div className="w-full h-80 relative group">
            {/* Carousel Container */}
            <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
              <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
                <Carousel
                  showThumbs={false}
                  autoPlay
                  infiniteLoop
                  interval={3000}
                  showStatus={false}
                  className="h-full"
                >
                  <div className="h-80">
                    <img
                      className="rounded-lg h-full object-cover"
                      src={profileImg1.src}
                      alt="Rakibul Islam"
                    />
                  </div>
                  <div className="h-80">
                    <img
                      className="rounded-lg h-full object-cover"
                      src={profileImg2.src}
                      alt="Rakibul Islam"
                    />
                  </div>
                </Carousel>
                {/* Overlay for hover effect */}
                <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
              </div>
            </div>

            {/* Border with hover effect */}
            <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
          </div>

          {/* education & open source  */}
          <div className="w-full flex flex-col gap-5 text-sm">
            <div>
              <h3 className="text-xs font-titleFont uppercase tracking-[0.15em] text-textGreen/80">
                Education
              </h3>
              <p className="mt-3 font-titleFont text-textLight font-medium">
                BSc in Computer Science &amp; Engineering
              </p>
              <p className="text-textDark">Green University of Bangladesh</p>
              <p className="text-textDark text-xs mt-1">
                2019 &ndash; 2022 &middot; Dhaka, Bangladesh
              </p>
            </div>
            <div>
              <h3 className="text-xs font-titleFont uppercase tracking-[0.15em] text-textGreen/80">
                Open Source
              </h3>
              <a
                href="https://www.npmjs.com/package/nest-debug-panel"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block font-titleFont text-textLight font-medium hover:text-textGreen duration-300"
              >
                nest-debug-panel ↗
              </a>
              <p className="text-textDark">
                A published npm package for debugging Nest.js applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
