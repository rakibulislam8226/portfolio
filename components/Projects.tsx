import {
  beeboxImg,
  dsiImg,
  SupplersImg,
  tripleChoiceImg,
} from "@/public/assets";
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import SectionTitle from "./SectionTitle";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section
      id="project"
      className="max-w-container mx-auto px-4 lgl:px-20 py-24"
    >
      <SectionTitle title="Some Things I have Built" titleNo="03" />
      {/* ============ project One Start here ================ */}
      <div className="w-full flex flex-col items-center justify-center gap-16 lg:gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://www.beeboxbd.com/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-auto object-cover"
                src={beeboxImg}
                alt="beeboxImg"
              />
              <div className="absolute w-full h-full rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-4 lg:gap-6 justify-between items-start lg:items-end text-left lg:text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">BeeBox</h3>
            </div>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              Beebox for{" "}
              <span className="text-textGreen">parcel tracking </span>
              made easy! Users can deliver their parcels and
              <span className="text-textGreen"> track their parcel </span> by
              entering the tracking number. They can also view details and the
              location of their parcel.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex flex-wrap gap-2 md:gap-5 justify-start lg:justify-between text-textDark">
              <li>Python</li>
              <li>Django REST Framework</li>
              <li>Postgres</li>
              <li>NextJS</li>
              <li>Tailwind CSS</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="#"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="#"
                target="_blank"
              >
                <AiOutlineYoutube />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://www.beeboxbd.com/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project One End here ================== */}
        {/* ============ project Two Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="http://nexivent.com/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-auto object-cover"
                src={dsiImg}
                alt="dsiImg"
              />
              <div className="absolute w-full h-full rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-4 lg:gap-6 justify-between items-start text-left z-10 xl:-mr-16">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">DSI</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
              A full-featured{" "}
              <span className="text-textGreen">event management platform</span>,
              where clients can create and manage their events. Admins and users
              each have their own dashboards.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex flex-wrap gap-2 md:gap-5 justify-start lg:justify-between text-textDark">
              <li>Django</li>
              <li>GraphQL</li>
              <li>Django REST Framework</li>
              <li>Multi-tenant</li>
              <li>MySQL</li>
              <li>React</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="#"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="#"
                target="_blank"
              >
                <AiOutlineYoutube />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="http://nexivent.com/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Two End here ================== */}
        {/* ============ project Three Start here ============== */}
        <div className="flex flex-col xl:flex-row gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://www.supplers.com/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-auto object-cover"
                src={SupplersImg}
                alt="Supplers"
              />
              <div className="absolute w-full h-full rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-4 lg:gap-6 justify-between items-start lg:items-end text-left lg:text-right xl:-ml-16 z-10">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Supplers</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
              A global furniture and interior design platform where clients can
              obtain
              <span className="text-textGreen"> membership </span> and make
              purchases using <span className="text-textGreen">Stripe</span>.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex flex-wrap gap-2 md:gap-5 justify-start lg:justify-between text-textDark">
              <li>REST Framework</li>
              <li>Redis</li>
              <li>Stripe</li>
              <li>Nextjs</li>
              <li>Tailwind CSS</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="#"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="#"
                target="_blank"
              >
                <AiOutlineYoutube />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://www.supplers.com/"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
        {/* ============ project Three End here ================== */}
        {/* ============ project Four Start here ================ */}
        <div className="flex flex-col xl:flex-row-reverse gap-6">
          <a
            className="w-full xl:w-1/2 h-auto relative group"
            href="https://triplechoice.com/"
            target="_blank"
          >
            <div>
              <Image
                className="w-full h-auto object-cover"
                src={tripleChoiceImg}
                alt="tripleChoiceImg"
              />
              <div className="absolute w-full h-full rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-4 lg:gap-6 justify-between items-start text-left z-10 xl:-mr-16">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">TripleChoice</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
              This is{" "}
              <span className="text-textGreen">
                {" "}
                a project details platform{" "}
              </span>{" "}
              where an employee of an organization can view their own products
              with information for their clients. Its mainly managed for
              internal products by checking the products health.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex flex-wrap gap-2 md:gap-5 justify-start lg:justify-between text-textDark">
              <li>Django</li>
              <li>Django REST Framework</li>
              <li>MySQL</li>
              <li>HTML</li>
              <li>Bootstrap</li>
            </ul>
            <div className="text-2xl flex gap-4">
              <a
                className="hover:text-textGreen duration-300"
                href="#"
                target="_blank"
              >
                <TbBrandGithub />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="#"
                target="_blank"
              >
                <AiOutlineYoutube />
              </a>
              <a
                className="hover:text-textGreen duration-300"
                href="https://triplechoice.com//"
                target="_blank"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>

        {/* ============ project Four End here ================== */}
      </div>
    </section>
  );
};

export default Projects;
