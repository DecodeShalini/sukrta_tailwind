import { motion } from "framer-motion";
import HeroCaraousel from "../Components/HeroCarousel";
import Introduction from "../Components/Introduction";
import Cards from "../Components/Cards";

export default function Home() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                type: "spring",
                stiffness: 60,
                damping: 15,
                delay: 0.2,
            }}
        >
            <HeroCaraousel />
            <Introduction />
            <Cards />
        </motion.div>
    );
}
