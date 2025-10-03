import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "TRANSLATION",
    title: "Health Education Article Translation",
    description:
      "Translated comprehensive health education materials from English to Kinyarwanda, ensuring cultural appropriateness and medical accuracy.",
    link: "#!",
  },
  {
    id: 2,
    image: card2,
    category: "ACADEMIC TRANSLATION",
    title: "Educational Document Translation",
    description:
      "Provided accurate translation of academic documents, research papers, and educational materials for international students and institutions.",
    link: "#!",
  },
  {
    id: 3,
    image: card3,
    category: "BUSINESS TRANSLATION",
    title: "Business Communication Translation",
    description:
      "Translated business proposals, contracts, and corporate communications ensuring professional tone and cultural sensitivity.",
    link: "#!",
  },
  {
    id: 4,
    image: card4,
    category: "CONTENT WRITING",
    title: "Blog Content Creation",
    description:
      "Created engaging blog posts and articles for businesses, focusing on SEO optimization and audience engagement.",
    link: "#!",
  },
  {
    id: 5,
    image: card5,
    category: "SOCIAL MEDIA",
    title: "Social Media Marketing",
    description:
      "Developed and managed social media strategies for local businesses, increasing online presence and customer engagement.",
    link: "#!",
  },
  {
    id: 6,
    image: card6,
    category: "NONPROFIT SUPPORT",
    title: "Dream 'n Dare Africa Projects",
    description:
      "Provided translation and communication support for international nonprofit organization, facilitating cross-cultural collaboration.",
    link: "#!",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here's a selection of my recent work, showcasing my expertise in
            translation, content creation, and business support services.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="#contact"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          Request a Quote
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
