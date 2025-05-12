import { motion } from "framer-motion";
import AboutBanner from "../Components/AboutBanner";
import TeamSection from "../Components/TeamSection";
import CustomersSection from "../Components/CustomerSection";
import MissionSection from "../Components/MissionSection";
export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 20,
        delay: 0.1,
      }}
    >
      <AboutBanner />
      <MissionSection />
      <TeamSection />
      <CustomersSection />
    </motion.div>
  );
}
