// Shared framer-motion variants to avoid duplicated objects and enable reuse
export const pageContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.06 } },
};

export const enterUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 14 } },
};

export const gentle = {
  hidden: { opacity: 0, y: 8, scale: 0.995 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] } },
};

// Introduction variants
export const introText = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.55 } } };
export const introImage = { hidden: { opacity: 0, y: 18, scale: 0.995 }, show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80, damping: 14 } } };

// Profile variants
export const imgVariant = { hidden: { opacity: 0, y: 12, scale: 0.995 }, show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 80, damping: 12 } } };
export const socialVariant = { hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } };
export const milestoneItem = {
  hidden: { opacity: 0, y: 10 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.48, ease: [0.2, 0.8, 0.2, 1] } }),
};

// WorkProcess / generic list items
export const sectionVariant = { hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 16 } } };
export const itemVariant = { hidden: { opacity: 0, y: 8, scale: 0.995 }, show: (i) => ({ opacity: 1, y: 0, scale: 1, transition: { delay: i * 0.06, duration: 0.45 } }) };

// Portfolio
export const portfolioSection = sectionVariant;
export const card = { hidden: { opacity: 0, y: 10, scale: 0.995 }, show: (i) => ({ opacity: 1, y: 0, scale: 1, transition: { delay: i * 0.06, duration: 0.45 } }) };

// Profession
export const colVariant = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 16 } } };
export const roleVariant = { hidden: { opacity: 0, y: 8, scale: 0.995 }, show: (i) => ({ opacity: 1, y: 0, scale: 1, transition: { delay: i * 0.05, duration: 0.45 } }) };

// HappyClients / Education cards
export const cardVariant = { hidden: { opacity: 0, y: 12 }, show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.45 } }) };

// Testimonial
export const testimonialSection = sectionVariant;

// Contact
export const leftVariant = { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
export const formVariant = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 16 } } };
