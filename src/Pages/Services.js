import { motion } from "framer-motion";
import ServicesBanner from "../Components/ServicesBanner";
import UpgradeSection from "../Components/UpgradeSection";

export default function Services() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <ServicesBanner />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <UpgradeSection />
      </motion.div>
    </>
  );
}
