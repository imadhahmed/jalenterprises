// animation.js

export const slideUpVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Fixed spelling from staggerChildern
      duration: 1.5,
      ease: "easeOut",
    },
  },
};

export const zoomInVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Fixed spelling
      duration: 1.2,
      ease: "easeOut",
    },
  },
};
