import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { leftVariant, formVariant } from "../../lib/motionVariants";
import Address from "./Address";
import Form from "./Form";
import SocialMedia from "../common/socialMedia/SocialMedia";

const addressData = [
  {
    icon: faLocationDot,
    title: "Address",
    description: "Kigali, Rwanda",
  },
  {
    icon: faEnvelope,
    title: "My Email",
    description: "sndagijimana20@gmail.com",
  },
  {
    icon: faPhone,
    title: "Call Me Now",
    description: "+250 788 260 008",
  },
];

const Contact = () => {
  return (
    <div className="relative -bottom-15 -mt-15 z-10 px-2">
      <motion.div
        className="content p-4 md:p-10 lg:p-22 bg-white rounded-2xl shadow-[0px_0px_90px_9px_rgba(0,_0,_0,_0.1)]"
        id="contact"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.18 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
      >
        <div className="flex flex-col-reverse lg:gap-5 xl:gap-25.75 lg:flex-row justify-between">
          <motion.div variants={leftVariant}>
            <div>
              <p className="text-[35px] max-lg:hidden font-semibold text-nowrap text-[#132238]">
                Let's discuss your Translation Project
              </p>
              <p className="text-[12px] xs:text-[14px] sm:text-lg md:text-lg max-lg:text-center pt-4 font-normal text-soft-dark">
                I'm available for translation, content writing, and business support services. 
                Contact me for accurate English ↔ Kinyarwanda translations and professional digital services.
              </p>
            </div>
            <div className="my-8.75 sm:max-lg:flex justify-between items-center">
              {addressData.map((item, index) => (
                <Address item={item} key={index} />
              ))}
            </div>
            <div className="w-full max-lg:text-center max-md:mb-4">
              <SocialMedia />
            </div>
          </motion.div>

          <motion.div className="w-full overflow-y-scroll py-6.5" variants={formVariant}>
            <p className="text-xl mb-2 xs:text-2xl sm:text-2xl md:text-[38px] font-semibold text-[#132238] lg:hidden text-center">
              Let's discuss your Translation Project
            </p>
            <Form />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
