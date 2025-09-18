import { motion } from "framer-motion";
import PortfolioDashboard from "@/components/Portfolio";

const Portfolio = () => {
  return (
    <main className="px-3 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-6">
      <motion.h1
        className="font-bold text-xl mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Portfolios
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <PortfolioDashboard />
      </motion.div>
    </main>
  );
};

export default Portfolio;
