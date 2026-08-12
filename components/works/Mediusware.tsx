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
        Aug 2022 - Jan 2024 &middot; Mohammadpur, Dhaka
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Shipped a highly scalable distributed system that improved overall
          system performance by 30%.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Built a multi-tenant event management platform with per-client domains
          and databases, designed for maintainability.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Worked in depth with Python, Django, and GraphQL, plus web scraping
          with Selenium and Scrapy.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Collaborated with cross-functional teams, engaging closely with the
          frontend and design teams to hit project milestones.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Guarded code quality through reviews, and mentored trainees learning
          Python and Django on their first real projects.
        </li>
      </ul>
    </motion.div>
  );
};

export default Mediusware;
