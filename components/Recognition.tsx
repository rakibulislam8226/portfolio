import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { FaAward, FaTrophy } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";

interface Award {
  title: string;
  org: string;
  period: string;
  awarded: string;
  des: string;
  image: StaticImageData;
  icon: JSX.Element;
}

import { aiExcellenceAward, bestEmployeeAward } from "@/public/assets";

const awards: Award[] = [
  {
    title: "AI Excellence Award",
    org: "Riseup Labs",
    period: "Q1 2026",
    awarded: "April 2026",
    des: "Recognized for the LangChain and RAG work — taking an AI application built on open-source models from retrieval pipeline to production endpoints.",
    image: aiExcellenceAward,
    icon: <FaTrophy />,
  },
  {
    title: "Outstanding Employee of the Quarter",
    org: "Riseup Labs",
    period: "Q1 – Q3 2025",
    awarded: "September 2025",
    des: "Company-wide in-house recognition for three consecutive quarters of delivery across system architecture, cloud infrastructure, and multi-tenant SaaS features.",
    image: bestEmployeeAward,
    icon: <FaAward />,
  },
];

const Recognition = () => {
  // The certificate is the proof, so it stays viewable at full size rather than
  // living only as a thumbnail.
  const [preview, setPreview] = useState<Award | null>(null);

  useEffect(() => {
    if (!preview) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPreview(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [preview]);

  return (
    <section id="recognition" className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">Recognition</h2>
        <p className="text-sm font-titleFont text-textGreen">
          Awards from the teams I shipped with
        </p>
      </div>

      <div className="grid grid-cols-1 lgl:grid-cols-2 gap-6 mt-10 lgl:px-10">
        {awards.map((award) => (
          <motion.button
            key={award.title}
            type="button"
            onClick={() => setPreview(award)}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="w-full text-left rounded-lg bg-[#112240] p-6 flex gap-6 hover:-translate-y-2 transition-transform duration-300 group"
          >
            <div className="hidden sml:block shrink-0 w-24 lgl:w-28 rounded-md overflow-hidden border border-textDark/20 group-hover:border-textGreen/60 duration-300">
              <Image
                src={award.image}
                alt={`${award.title} certificate from ${award.org}`}
                placeholder="blur"
                sizes="112px"
                className="w-full h-auto"
              />
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-3xl text-textGreen">{award.icon}</span>
              <div>
                <h3 className="text-lg lgl:text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen duration-300">
                  {award.title}
                </h3>
                <p className="text-sm font-titleFont text-textDark mt-1">
                  <span className="text-textGreen">@{award.org}</span> &middot;{" "}
                  {award.period}
                </p>
              </div>
              <p className="text-sm text-textDark">{award.des}</p>
              <span className="text-xs font-titleFont text-textGreen mt-auto">
                View certificate &rarr;
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      {preview && (
        <div
          onClick={() => setPreview(null)}
          className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4"
        >
          <MdOutlineClose className="text-3xl text-textGreen hover:text-red-500 cursor-pointer absolute top-4 right-4" />
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col items-center gap-3"
          >
            <Image
              src={preview.image}
              alt={`${preview.title} certificate from ${preview.org}`}
              placeholder="blur"
              sizes="(max-width: 768px) 90vw, 600px"
              className="w-auto max-h-[80vh] object-contain rounded-md"
            />
            <p className="text-sm font-titleFont text-textDark text-center">
              {preview.title} &middot;{" "}
              <span className="text-textGreen">{preview.org}</span> &middot;
              awarded {preview.awarded}
            </p>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Recognition;
