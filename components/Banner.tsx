import { motion } from "framer-motion";
import Link from "next/link";

const Banner = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const { href } = e.currentTarget;
    const targetId = href.replace(/.*\#/, "");
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-lg font-titleFont tracking-wide text-textGreen"
      >
        Hi, this is
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col"
      >
        Rakibul Islam.
        <motion.span className="text-textDark mt-2 lgl:mt-4">
          I build the systems behind the product.
        </motion.span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        I am a Software Engineer with 5+ years of experience designing and
        shipping production systems in{" "}
        <span className="text-textGreen">Python</span> and{" "}
        <span className="text-textGreen">Node.js</span>. I work across system
        architecture, database design, and the cloud infrastructure that keeps
        it all running &mdash; lately building{" "}
        <span className="text-textGreen">LLM and RAG</span> powered features
        into multi-tenant SaaS platforms.
      </motion.p>

      {/* ============ quick facts ============ */}
      <motion.ul
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.85 }}
        className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-titleFont text-textDark"
      >
        <li>
          <span className="text-textLight font-semibold">5+ yrs</span> building
          for production
        </li>
        <li>
          <span className="text-textLight font-semibold">Python</span> &middot; <span className="text-textLight font-semibold">Node.js</span> &middot; 
          Django &middot; FastAPI
        </li>
        <li>
          <span className="text-textLight font-semibold">Currently</span>{" "}
          <span className="text-textGreen">@Riseup Labs</span>
        </li>
      </motion.ul>

      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.9 }}
        className="flex flex-wrap items-center gap-4 mt-2"
      >
        <Link href="#project" onClick={handleScroll}>
          <button className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300">
            Check out my work!
          </button>
        </Link>
        <a
          href="/assets/rakibul_islam.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="h-14 px-0 sml:px-6 text-sm font-titleFont text-textDark tracking-wide hover:text-textGreen duration-300">
            Or read the Resume →
          </button>
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Banner;
