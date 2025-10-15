import { motion } from "framer-motion";

const cardVariant = {
  hidden: { opacity: 0, y: 12 },
  show: i => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.45 } }),
};

const EducationCertifications = () => {
  const educationData = [
    {
      title: "Diploma in Accounting",
      institution: "École Secondaire Association des Parents Adventistes de Gitwe",
      period: "2018–2021",
      description: "Foundation in accounting principles and business fundamentals"
    },
    {
      title: "BYU–Pathway Academic Progress",
      institution: "Brigham Young University",
      period: "February 2025",
      description: "Academic progress in business management studies"
    },
    {
      title: "Freelancing & Digital Skills Training",
      institution: "ALX Academy",
      period: "2025",
      description: "Practical skills in freelancing, digital work, and online entrepreneurship"
    }
  ];

  return (
    <motion.div className="content py-10 md:py-25 flex flex-col items-center px-2" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.18 }}>
      <div className="max-w-144.25 text-center mb-10">
        <p className="section-title mb-6">Education & Certifications</p>
        <p className="text-[14px] sm:text-lg text-soft-dark font-normal">
          My educational background and professional certifications that support my expertise in translation and business services.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 w-full max-w-4xl">
        {educationData.map((item, index) => (
          <motion.div key={index} className="bg-white p-6 rounded-lg shadow-md border" custom={index} variants={cardVariant} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h3>
            <p className="text-sm font-medium text-blue-600 mb-1">{item.institution}</p>
            <p className="text-xs text-gray-500 mb-3">{item.period}</p>
            <p className="text-sm text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default EducationCertifications;