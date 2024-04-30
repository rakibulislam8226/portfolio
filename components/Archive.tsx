import { useState } from "react";
import ArchiveCard from "./ArchiveCard";
import { motion } from "framer-motion";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
        <p className="text-sm font-titleFont text-textGreen">
          View the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        <ArchiveCard
          title="Versatile INN"
          des="Versatile INN is a microservice-based restaurant management system. It simplifies the management of a parent restaurant, and its child restaurants. "
          listItem={["gRPC", "Flask", "Docker"]}
          link="https://github.com/rakibulislam8226/Versatile-INN"
        />
        <ArchiveCard
          title="Octous."
          des="It's a messaging app where you can chat with your friends. It's a real-time chat application."
          listItem={["WebSocket", "REST Framework"]}
          link="https://github.com/rakibulislam8226/Octous"
        />
        <ArchiveCard
          title="Tution-media"
          des="Using tuition media, students can easily find their desired tutors and tutors can easily find their desired students."
          listItem={["Python", "Django", "Jinja2"]}
          link="https://github.com/rakibulislam8226/Tution-media/"
        />
        <ArchiveCard
          title="MedicineEasy"
          des="MedicineEasy is mainly to help users for any medicine's with additional data. It's a medicine search engine."
          listItem={["Python", "Django REST", "Docker"]}
          link="https://github.com/rakibulislam8226/MedicineEasy"
        />
        <ArchiveCard
          title="B2B-Ecommerce"
          des="B2B-Ecommerce model that refers to a transaction between businesses, 
          such as a manufacturer and a retailer."
          listItem={["Django REST Framework", "PostgreSQL"]}
          link="https://github.com/rakibulislam8226/B2B-Ecommerce"
        />
        <ArchiveCard
          title="Thiefy"
          des="Scraping data from the web and storing it in a database. It's a web scraping project."
          listItem={["Scrapy", "mysqlclient", "cryptography"]}
          link="https://github.com/rakibulislam8226/Scraping-with-Scrapy"
        />

        {showMore && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <ArchiveCard
                title="Kindergarten"
                des="Kindergarten Management System is a web-based application that helps to manage the kindergarten's daily activities."
                listItem={["Reactjs", "Django REST", "Tailwind CSS"]}
                link="https://github.com/rakibulislam8226/Kindergarten"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <ArchiveCard
                title="BestEats"
                des=" It is an e-commerce website where you can order food from your favorite restaurant. It's a food delivery system."
                listItem={["Reactjs", "Tailwind CSS", "netlify deploy"]}
                link="https://rakib-besteats.netlify.app/"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ArchiveCard
                title="Weather-detector"
                des=" Weather detector is a web-based application that helps to detect the weather of any city."
                listItem={["Python", "Django", "HTML"]}
                link="https://github.com/rakibulislam8226/Weather-detector"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ArchiveCard
                title="Needs-Health-Care"
                des="Find doctor system and Design and implementation of an automatic prescription generation and management system."
                listItem={["Django", "SSLCOMMERZ", "Jinja2"]}
                link="https://github.com/rakibulislam8226/Needs-Health-Care"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <ArchiveCard
                title="Versatile Recruit"
                des=" This is an recruitment system where a company can post a job and a candidate can apply for a job. All the recruitment process is done here."
                listItem={["Django Rest Framework", "Celery"]}
                link="https://github.com/rakibulislam8226/versatile-recruit"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <ArchiveCard
                title="Play-with-React"
                des=" It is a landing page where you can play with Reactjs and Tailwind CSS. It's a simple landing page."
                listItem={["Reactjs", "Tailwind CSS", "vercel deploy"]}
                link="https://rakib-play-landing.netlify.app/"
              />
            </motion.div>
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Archive;
