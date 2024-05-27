import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";

const Mediusware = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Junior Software Engineer
        <span className="text-textGreen tracking-wide">@Mediusware</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Aug 2022 - Jan 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Leveraged in-depth expertise in Python, Django, and associated tools to deliver robust and scalable solutions.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Website scraping using Selenium webdriver and Scrapy also implemented Event Tenant System based on GraphQL with best practice.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Ensured code quality, collaborated across teams, and embraced continuous learning.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Adapted to both remote and on-site work environments.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Leveraged in-depth expertise in Python, Django, and associated tools to deliver robust and scalable solutions.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Demonstrated leadership and mentoring skills by guiding and supporting trainees in acquiring proficiency in Python and
          Django while assisting them in developing their own projects.
        </li>
      </ul>
    </motion.div>
  );
};

export default Mediusware;
