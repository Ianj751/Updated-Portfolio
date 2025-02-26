import { motion } from "framer-motion";

type PageProps = {
  children: React.ReactNode;
};

const PageTransition = ({ children }: PageProps) => {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 30,
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
