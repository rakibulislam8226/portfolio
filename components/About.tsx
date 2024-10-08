import { profileImg1, profileImg2 } from "@/public/assets";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";
import {
  FaFlask,
  FaPython,
  FaReact,
  FaRedditSquare,
  FaVuejs,
} from "react-icons/fa";
import {
  TbBrandDjango,
  TbBrandGraphql,
  TbBrandTailwind,
  TbFlask,
  TbFlask2,
} from "react-icons/tb";
import { SlChart } from "react-icons/sl";

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
            <span className="text-textGreen">Rakibul Islam </span> and I enjoy
            creating things that live on the internet.
          </p>
          <p>
            I have solid background in{" "}
            <span className="text-textGreen">Computer Science, </span>I approach
            every challenge as an opportunity to learn and grow. I am dedicated
            to <span className="text-textGreen">solving problems </span>
            and continuously expanding my knowledge, prioritizing a lifelong
            learning mindset in everything I do.
          </p>
          <p>
            As a Software Engineer,
            <span className="text-bold">
              I firmly believe in the power of collaboration and teamwork to
              create innovative solutions.{" "}
            </span>
            I thrive in environments where I can apply my skills to solve
            complex problems and make a positive impact.
          </p>
          <span className="text-textGreen">
            I thoroughly enjoy sharing my knowledge and engaging in insightful
            discussions with like-minded individuals. Lets exchange ideas and
            learn from each other!
          </span>
          <p>
            Programming languages and frameworks are simply tools in my arsenal.
            The true challenge lies in critical thinking and arriving at elegant
            solutions. Lets tackle problems together and make a difference in
            the world of technology.
          </p>

          {/* skills sections  */}
          <p>Here are a few technologies I have been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <FaPython />
              </span>
              Python
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <FaReact />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <TbBrandDjango />
              </span>
              Django
            </li>

            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <FaVuejs />
              </span>
              Vue.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Django REST Framework
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <TbBrandTailwind />
              </span>
              Tailwind CSS
            </li>

            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Flask
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <TbBrandGraphql />
              </span>
              GraphQL
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              FastAPI
            </li>

            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Wagtail CMS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Web Scraping
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Redis
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Multi-tenant
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <SlChart />
              </span>
              Chart.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Test-Driven Development
            </li>
          </ul>
        </div>

        {/* profile image section  */}
        <div className="w-full lgl:w-1/3 h-80 relative group">
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
                    alt="Profile"
                  />
                </div>
                <div className="h-80">
                  <img
                    className="rounded-lg h-full object-cover"
                    src={profileImg2.src}
                    alt="Image 2"
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
      </div>
    </section>
  );
};

export default About;
