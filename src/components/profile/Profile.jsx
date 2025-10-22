/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { imgVariant, socialVariant, milestoneItem } from "../../lib/motionVariants";
import person from "../../assets/images/person.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";
import { getInViewProps } from "../../lib/motionUtils";

const Profile = () => {
  const milestones = [
    {
      title: "Freelance Translator",
      period: "2025 – Present",
      description:
        "Translating documents, websites, and educational materials",
    },
    {
      title: "Store Manager",
      period: "Present",
      description: "Precious Metal Link Company",
    },
    {
      title: "Dream 'n Dare Africa",
      period: "2024",
      description: "Rwanda Representative for international nonprofit",
    },
    {
      title: "Journalism Training",
      period: "2023",
      description: "Media training at Kimisagara Youth Center",
    },
    {
      title: "Entrepreneurship",
      period: "2022",
      description: "Online fruit and vegetable delivery business",
    },
  ];

  return (
    <div
      className="relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4"
      id="profile"
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <motion.div
            className="md:w-1/3 shrink-0"
            variants={imgVariant}
            {...getInViewProps({ amount: 0.4 })}
          >
            <div className="rounded-xl overflow-hidden">
              <motion.img
                className="w-full h-auto object-cover"
                src={person}
                alt="Profile"
                variants={imgVariant}
              />
            </div>

            <motion.div
              className="relative -mt-6"
              variants={socialVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="flex justify-center">
                <div className="px-6 py-3 bg-white rounded-[4px] shadow-2xl">
                  <SocialMedia />
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:w-2/3"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
            {...getInViewProps({ amount: 0.35 })}
          >
            <motion.p
              className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed"
              variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            >
              I am a native Kinyarwanda speaker and fluent English user with a
              strong background in translation, business management, and digital
              freelancing.
            </motion.p>

            <motion.p
              className="mt-6 text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed"
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } }}
            >
              I am currently pursuing a Bachelor's Degree in Business Management
              at Brigham Young University – Insign College (2025 – Present),
              after having studied Accounting at École Secondaire Association des
              Parents Adventistes de Gitwe (2018–2021).
            </motion.p>
          </motion.div>
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-6">My Professional Journey</h3>
          <div className="relative">
            {/* Horizontal line */}
            <div className="absolute h-1 bg-gradient-to-r from-picto-primary to-gray-200 top-3 left-0 right-0"></div>

            {/* Timeline items */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {milestones.map((item, index) => (
                <motion.div
                  key={index}
                  className="relative group pt-8"
                  custom={index}
                  variants={milestoneItem}
                  {...getInViewProps({ amount: 0.4 })}
                >
                  <motion.div
                    className="absolute w-6 h-6 bg-white rounded-full -top-1 left-1/2 -ml-3 border-[3px] border-picto-primary shadow-md"
                    whileHover={{ scale: 1.06 }}
                  />
                  <motion.div className="absolute w-3 h-3 bg-picto-primary rounded-full -top-0.5 left-1/2 -ml-1.5" layout />
                  <div className="text-center">
                    <strong className="block text-gray-800 mb-1">{item.title}</strong>
                    <span className="text-sm text-picto-primary">{item.period}</span>
                    <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.p
          className="mt-6 text-gray-600"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          Throughout these experiences, my focus has been clarity, accuracy, and
          cultural relevance, with a strong commitment to reliability and
          professionalism.
        </motion.p>

        <motion.div
          className="flex justify-center gap-4 mt-8"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
          {...getInViewProps({ amount: 0.3 })}
        >
          <motion.a
            className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 btn-primary text-xs xxs:text-[14px] sm:text-[16px]"
            href="#portfolio"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            My Portfolio
          </motion.a>
          <motion.a
            className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 hover:border-picto-primary bg-white duration-300 transition-all hover:text-picto-primary text-xs xxs:text-[14px] sm:text-[16px]"
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default Profile;

