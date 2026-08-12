import {
  beeboxImg,
  nexiventImg,
  SupplersImg,
  tripleChoiceImg,
} from "@/public/assets";
import Image from "next/image";
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
                alt="BeeBox parcel tracking dashboard"
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
              A courier and{" "}
              <span className="text-textGreen">parcel tracking</span> service.
              Senders book a delivery, and anyone holding the tracking number can
              follow the parcel&apos;s{" "}
              <span className="text-textGreen">status and location</span> as it
              moves through the network. I built the REST API, the state machine
              behind each shipment, and the tracking timeline.
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
                src={nexiventImg}
                alt="Nexivent event management platform"
              />
              <div className="absolute w-full h-full rounded-lg top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </a>
          <div className="w-full xl:w-1/2 flex flex-col gap-4 lg:gap-6 justify-between items-start text-left z-10 xl:-mr-16">
            <div>
              <p className="font-titleFont text-textGreen text-sm tracking-wide">
                Featured Project
              </p>
              <h3 className="text-2xl font-bold">Nexivent</h3>
            </div>
            <p className="text-sm md:text-base bg-[#112240] p-2 md:p-6 rounded-md">
              A <span className="text-textGreen">multi-tenant</span> event
              management platform where every organization gets its own domain
              and its own database. I designed the tenancy layer and the GraphQL
              API so teams can host and run their events on a shared codebase
              without ever sharing data.
            </p>
            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex flex-wrap gap-2 md:gap-5 justify-start lg:justify-between text-textDark">
              <li>Django</li>
              <li>GraphQL</li>
              <li>django-tenants</li>
              <li>MySQL</li>
              <li>Firebase</li>
              <li>React</li>
            </ul>
            <div className="text-2xl flex gap-4">
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
                alt="Supplers furniture marketplace"
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
              A global furniture and interior design marketplace. Clients buy a{" "}
              <span className="text-textGreen">membership</span> and order
              through it &mdash; I handled the{" "}
              <span className="text-textGreen">Stripe</span> billing flow,
              subscription webhooks, and Redis caching for the catalogue.
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
                alt="TripleChoice internal product dashboard"
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
              An internal{" "}
              <span className="text-textGreen">product health dashboard</span>.
              Staff can look up any product the company ships, see its current
              status and the details their clients ask about, and catch issues
              before a customer reports them.
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
                href="https://triplechoice.com/"
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
