import { motion } from "framer-motion";

const Banner = () => {
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
          I build things for the web.
        </motion.span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        I am a full-stack developer with 5 years of experience in Python and Node.js. I have
        a strong foundation in back-end and front-end development and am
        skilled in creating user-friendly and responsive web applications using
        Python, Node.js, React and Vue, Tailwind CSS, and server management. 
      </motion.p>
      <motion.a
        href="https://github.com/rakibulislam8226"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.button
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="w-52 h-14 text-sm font-titleFont border border-textGreen rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300"
        >
          Check out my projects!
        </motion.button>
      </motion.a>
    </motion.section>
  );
};

export default Banner;
