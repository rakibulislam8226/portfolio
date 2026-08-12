import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import LeftSide from "@/components/LeftSide";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import RightSide from "@/components/RightSide";
import Head from "next/head";
import { motion } from "framer-motion";
import Archive from "@/components/Archive";
import Recognition from "@/components/Recognition";

export default function Home() {
  return (
    <>
      <Head>
        <title>Rakibul Islam | Software Engineer</title>
        <meta
          name="description"
          content="Software Engineer with 4+ years building production backends in Python and Node.js — system architecture, database design, cloud infrastructure, and LLM/RAG powered features."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Rakibul Islam" />
        <meta name="theme-color" content="#0A192F" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Rakibul Islam | Software Engineer"
        />
        <meta
          property="og:description"
          content="Backend-focused Software Engineer working in Python, Django, FastAPI and Node.js — multi-tenant SaaS, cloud infrastructure, and AI features."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight  overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60">
        <Navbar />
        <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
          >
            <LeftSide />
          </motion.div>
          <div className="h-[88vh] mx-auto p-4">
            <Banner />
            <About />
            <Experience />
            <Recognition />
            <Projects />
            <Archive />
            <Contact />
            <Footer />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
          >
            <RightSide />
          </motion.div>
        </div>
      </main>
    </>
  );
}
