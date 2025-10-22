import { LazyMotion, domAnimation, motion } from "framer-motion";
import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import WorkProcess from "../components/workProcess/WorkProcess";
import Portfolio from "../components/portfolio/Portfolio";
// import WorkTogether from "../components/workTogether/WorkTogether";
// import Blog from "../components/blog/Blog";
import Profession from "../components/profession/Profession";
import EducationCertifications from "../components/happyClients/HappyClients";
import Testimonial from "../components/testimonial/Testimonial";
import Contact from "../components/contact/Contact";
import { getInViewProps } from "../lib/motionUtils";

const pageContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.06 } },
};

const enterUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 14 } },
};

const gentle = {
  hidden: { opacity: 0, y: 8, scale: 0.995 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] } },
};

const MotionDiv = motion.div;
const MotionSection = motion.section;

const Home = () => {
  return (
    <>
    {/* <LazyMotion features={domAnimation}> */}
      <motion.div
        className="relative"
        variants={pageContainer}
        {...getInViewProps({ amount: 0.12 })}
      >
        <div className="introduction-profile-background">
          <div className="content">
            <motion.section variants={enterUp} className="overflow-hidden">
              <Introduction />
            </motion.section>

            <motion.section variants={gentle} className="mt-6">
              <Profile />
            </motion.section>
          </div>
        </div>

        <motion.section variants={enterUp} className="bg-soft-white pt-30">
          <WorkProcess />
        </motion.section>

        <motion.section variants={enterUp}>
          <Portfolio />
        </motion.section>

        {/* <div className="bg-gray-900">
          <WorkTogether />
        </div>
        <div className="blog-background">
          <Blog />
        </div> */}
        <motion.section variants={enterUp} className="bg-soft-white">
          <Profession />
        </motion.section>

        <motion.section variants={gentle}>
          <EducationCertifications />
        </motion.section>

        <motion.section variants={enterUp}>
          <Testimonial />
        </motion.section>

        <motion.section variants={gentle}>
          <Contact />
        </motion.section>
      </motion.div>
    {/* </LazyMotion> */}
    </>
  );
};

export default Home;
