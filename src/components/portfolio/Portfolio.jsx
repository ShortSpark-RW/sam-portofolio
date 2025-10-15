import { motion } from "framer-motion";
import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-11.png";
import card2 from "../../assets/images/portfolio-images/card-22.png";
import card3 from "../../assets/images/portfolio-images/card-33.png";
// import card4 from "../../assets/images/portfolio-images/card-4.png";
// import card5 from "../../assets/images/portfolio-images/card-5.png";
// import card6 from "../../assets/images/portfolio-images/card-6.png";

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
  // {
  //   id: 4,
  //   image: card4,
  //   category: "CONTENT WRITING",
  //   title: "Blog Content Creation",
  //   description:
  //     "Created engaging blog posts and articles for businesses, focusing on SEO optimization and audience engagement.",
  //   link: "#!",
  // },
  // {
  //   id: 5,
  //   image: card5,
  //   category: "SOCIAL MEDIA",
  //   title: "Social Media Marketing",
  //   description:
  //     "Developed and managed social media strategies for local businesses, increasing online presence and customer engagement.",
  //   link: "#!",
  // },
  // {
  //   id: 6,
  //   image: card6,
  //   category: "NONPROFIT SUPPORT",
  //   title: "Dream 'n Dare Africa Projects",
  //   description:
  //     "Provided translation and communication support for international nonprofit organization, facilitating cross-cultural collaboration.",
  //   link: "#!",
  // },
];

const section = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 92, damping: 15 },
  },
};
const card = {
  hidden: { opacity: 0, y: 10, scale: 0.995 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.06, duration: 0.45 },
  }),
};

const Portfolio = () => {
  return (
    <motion.div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.18 }}
      variants={section}
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
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={card}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Projects data={data} />
            </motion.div>
          ))}
        </div>
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
