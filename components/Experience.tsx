import { useState } from "react";
import SectionTitle from "./SectionTitle";
import Mediusware from "./works/Mediusware";
import Repliq from "./works/Repliq";
import Riseup from "./works/Riseup";

const Experience = () => {
  const [workRiseup, setWorkRiseup] = useState(true);
  const [workRepliq, setWorkRepliq] = useState(false);
  const [workMediusware, setWorkMediusware] = useState(false);

  const handleRiseup = () => {
    setWorkRiseup(true);
    setWorkRepliq(false);
    setWorkMediusware(false);
  };

  const handleRepliq = () => {
    setWorkRiseup(false);
    setWorkRepliq(true);
    setWorkMediusware(false);
  };

  const handleMediusware = () => {
    setWorkRiseup(false);
    setWorkRepliq(false);
    setWorkMediusware(true);
  };
  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-5 lgl:py-10 px-2"
    >
      <SectionTitle title="Where I have Worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-80 flex flex-col">
          <li
            onClick={handleRiseup}
            className={`${workRiseup
              ? "border-l-textGreen text-textGreen"
              : "border-l-hoverColor text-textDark"
              } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Riseup Labs
          </li>
          <li
            onClick={handleRepliq}
            className={`${workRepliq
              ? "border-l-textGreen text-textGreen"
              : "border-l-hoverColor text-textDark"
              } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Repliq Limited
          </li>
          <li
            onClick={handleMediusware}
            className={`${workMediusware
              ? "border-l-textGreen text-textGreen"
              : "border-l-hoverColor text-textDark"
              } border-l-2 bg-transparent hover:bg-[#112240] py-3 text-sm  cursor-pointer duration-300 px-8 font-medium`}
          >
            Mediusware
          </li>

        </ul>
        {workRiseup && <Riseup />}
        {workRepliq && <Repliq />}
        {workMediusware && <Mediusware />}
      </div>
    </section>
  );
};

export default Experience;
