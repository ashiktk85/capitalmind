import { motion } from "framer-motion";

const SlackArchives = () => {
  return (
    <main className="px-3 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-6">
      <motion.h1
        className="font-bold text-xl mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Slack Archives
      </motion.h1>
    </main>
  );
};

export default SlackArchives;
