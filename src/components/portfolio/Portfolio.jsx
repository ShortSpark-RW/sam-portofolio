import { motion } from "framer-motion";
import { portfolioSection as section, card } from "../../lib/motionVariants";
import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-11.png";
import card2 from "../../assets/images/portfolio-images/card-22.png";
import card3 from "../../assets/images/portfolio-images/card-33.png";
import { getInViewProps } from "../../lib/motionUtils";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "TRANSLATION",
    title: "Health Education Article Translation",
    description:
      "Translated comprehensive health education materials from English to Kinyarwanda, ensuring cultural appropriateness and medical accuracy.",
    link: "#contact",
  },
  {
    id: 2,
    image: card2,
    category: "ACADEMIC TRANSLATION",
    title: "Educational Document Translation",
    description:
      "Provided accurate translation of academic documents, research papers, and educational materials for international students and institutions.",
    link: "#contact",
  },
  {
    id: 3,
    image: card3,
    category: "BUSINESS TRANSLATION",
    title: "Business Communication Translation",
    description:
      "Translated business proposals, contracts, and corporate communications ensuring professional tone and cultural sensitivity.",
    link: "#contact",
  },
];

const Portfolio = () => {
  return (
    <motion.div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
      variants={section}
      {...getInViewProps({ amount: 0.18 })}
    >
      <div className="xl:mb-17.5 mb-5">
        <motion.div
          className="max-sm:px-2 text-center mx-auto max-w-144.25"
          variants={section}
        >
          <p className="section-title ">Portfolio</p>
          <motion.p
            className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400"
            variants={section}
          >
            Here's a selection of my recent work, showcasing my expertise in
            translation, content creation, and business support services.
          </motion.p>
        </motion.div>
      </div>
      <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
        {projectData.map((data, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={card}
            {...getInViewProps({ amount: 0.2 })}
          >
            <Projects data={data} />
          </motion.div>
        ))}
      </div>
      <div className="text-center">
        <motion.a
          href="#contact"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.18 }}
        >
          Request a meeting
        </motion.a>
      </div>
    </motion.div>
  );
};

export default Portfolio;

