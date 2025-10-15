import { motion } from "framer-motion";
import Roles from "./Roles";

const rolesData = [
	{
		id: 1,
		title: "English ↔ Kinyarwanda Translation",
		description:
			"Accurate and culturally relevant translations for documents, websites, educational materials, and business communications.",
	},
	{
		id: 2,
		title: "Transcription & Interpretation",
		description:
			"Turning audio/video into text and providing live meeting support with professional interpretation services.",
	},
	{
		id: 3,
		title: "Content Writing & Social Media Marketing",
		description:
			"Clear and engaging business, academic, and blog writing, plus helping businesses grow online through strategic social media marketing.",
	},
	{
		id: 4,
		title: "Business Support & Digital Skills",
		description:
			"Stock management, accounting basics, EBM management, virtual assistance, and online work strategies for modern businesses.",
	},
	{
		id: 5,
		title: "Nonprofit Collaboration",
		description:
			"Youth leadership, communication support, and climate change awareness initiatives through Dream 'n Dare Africa partnership.",
	},
];

const colVariant = {
	hidden: { opacity: 0, y: 12 },
	show: {
		opacity: 1,
		y: 0,
		transition: { type: "spring", stiffness: 90, damping: 16 },
	},
};
const roleVariant = {
	hidden: { opacity: 0, y: 8, scale: 0.995 },
	show: (i) => ({
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { delay: i * 0.05, duration: 0.45 },
	}),
};

const Profession = () => {
	return (
		<motion.div
			className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
			id="services"
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.18 }}
			variants={colVariant}
		>
			<motion.div
				className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto"
				variants={colVariant}
			>
				<p className="section-title max-md:text-center">Services</p>
				<div className="mt-6 text-[14px]">
					<p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
						I offer professional and reliable services including translation,
						content writing, business support, and digital skills training.
					</p>
					<p className="text-xs sm:text-lg font-normal text-gray-400">
						My approach combines linguistic expertise with cultural understanding
						to deliver solutions that are both accurate and culturally appropriate
						for clients worldwide.
					</p>
				</div>
				<a
					href="#contact"
					className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
				>
					Hire Me!
				</a>
			</motion.div>

			<motion.div className="" variants={colVariant}>
				{rolesData.map((role, index) => (
					<motion.div
						key={index}
						custom={index}
						variants={roleVariant}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true, amount: 0.2 }}
					>
						<Roles role={role} />
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	);
};

export default Profession;
