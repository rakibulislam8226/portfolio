import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";


const Repliq = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Junior Software Engineer
        <span className="text-textGreen tracking-wide">@Repliq</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Jul 2023 - Jan 2024
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Maintained a strong focus on delivering high-quality code and adhering to best practices for software development.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Implementing Agile methodologies and Test-Driven Development (TDD) to ensure robust software quality throughout the project lifecycle
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Collaborated on CardiCheck project for health diagnostics.
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

export default Repliq;
