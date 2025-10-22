import person from "../../assets/images/person.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";
import { motion } from "framer-motion";
import { introText, introImage } from "../../lib/motionVariants";
import { getInViewProps } from "../../lib/motionUtils";

// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "Experience",
    description: "3+ Y.",
  },
  {
    id: 2,
    title: "Projects Completed",
    description: "100+",
  },
  {
    id: 3,
    title: "Happy Clients",
    description: "50+",
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <motion.div
        className="w-full flex flex-col justify-between max-lg:text-center"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
        {...getInViewProps({ amount: 0.3 })}
      >
        <motion.div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500" variants={introText}>
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I'm
            <span className="text-nowrap shrink-0 inline-block w-full">
              Samuel Ndagijimana
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            <span className="bg-highlight">Professional English ↔ Kinyarwanda Translator | Content Writer | Digital Skills Enthusiast | Copywriter</span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            "I help <span className="bg-highlight">businesses, organizations, and individuals</span>{" "} 
            communicate effectively in <span className="bg-highlight">English and
            Kinyarwanda</span> with accurate, culturally appropriate translations."
          </p>
          <p className="text-center lg:text-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href="mailto:sndagijimana20@gmail.com"
            >
              Hire Me / Contact Me
            </a>
          </p>
        </motion.div>

        <motion.div className="mx-auto lg:mx-0 relative" variants={introText}>
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
        variants={introImage}
        {...getInViewProps({ amount: 0.35 })}
      >
        <img
          className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
          src={person}
          alt="person"
        />
      </motion.div>
    </div>
  );
};

export default Introduction;

