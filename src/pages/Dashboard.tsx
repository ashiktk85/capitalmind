import { motion } from "framer-motion";
import HomeCard from "@/components/Homecard";
import LatestPosts from "@/components/LatestPosts";
import Homecards from "@/data/HomeCards";

const Dashboard = () => {
  return (
    <main className="px-3 sm:px-6 md:px-12 lg:px-20 xl:px-32 py-6">
      <motion.h1
        className="font-bold text-xl mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Home
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2, 
            },
          },
        }}
      >
        {Homecards.map((card, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <HomeCard
              title={card.title}
              description={card.description}
              link={card.link}
            />
          </motion.div>
        ))}
      </motion.div>


      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-8"
      >
        <LatestPosts />
      </motion.div>
    </main>
  );
};

export default Dashboard;
