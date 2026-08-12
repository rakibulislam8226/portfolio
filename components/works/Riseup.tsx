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
        Feb 2024 - Present &middot; Uttara, Dhaka
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Built an AI application on top of open-source models using LangChain
          and RAG, from retrieval pipeline to production endpoints.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Designed the system architecture and databases behind several products
          &mdash; including a ride-sharing platform and multi-tenant SaaS
          applications &mdash; with performance as a first-class constraint.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Architected and deployed scalable cloud infrastructure, automating
          CI/CD with Jenkins and GitHub Actions for reliable, low-downtime
          releases.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Owned the full DevOps lifecycle: containerization, monitoring, and
          ongoing performance optimization.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Delivered Stripe payments, AI-powered summaries, and the core
          background processing for a SaaS platform.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Wrote high-quality, reusable code through Test-Driven Development
          while designing for low latency and high availability.
        </li>
        <li className="text-base flex gap-2 text-textDark">
          <span className="text-textGreen mt-1">
            <TiArrowForward />
          </span>
          Collaborated on a comprehensive ERP solution integrated with IoT
          devices.
        </li>
      </ul>
    </motion.div>
  );
};

export default Riseup;
