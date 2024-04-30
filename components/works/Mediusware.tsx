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
        Aug 2022 - Jun 2023
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Implemented Event Tenant System based on GraphQL.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Website scraping using Selenium Webdriver and Scrapy.
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
          Leveraged in-depth expertise in Python, Django, and associated tools to deliver robust and scalable solutions.
        </li>
      </ul>
    </motion.div>
  );
};

export default Mediusware;
