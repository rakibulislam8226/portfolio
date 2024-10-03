import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Riseup = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Software Engineer
        <span className="text-textGreen tracking-wide">@Riseup Labs</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">
        Feb 2024 - Present
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Write modern, performant, maintainable code for a diverse array of
          client and internal projects.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Collaborating seamlessly with cross-functional teams and engaging
          closely with front-end and desig teams to achieve project milestones.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Collaborated on developing a comprehensive EMS solution integrated
          with an IoT.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Maintained delivering high-quality code and adhering to best practices
          for software development with Test Driven Development (TDD).
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Developing Django-based back-end systems and RESTful APIs utilizing
          Django, the Django REST Framework, and PostgreSQL, contributing to the
          design, development, and testing phases.
        </li>
      </ul>
    </motion.div>
  );
};

export default Riseup;
