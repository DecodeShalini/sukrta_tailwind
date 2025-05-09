import { Contact } from "lucide-react";
import ContactHeader from "../Components/Headers/ContactHeader";
import NavHeader from "../Components/Headers/NavHeader";
import HeroCaraousel from "../Components/HeroCarousel";
import Introduction from "../Components/Introduction";
import Cards from "../Components/Cards";

export default function Home() {
    return (
        <>
        <ContactHeader />
        <NavHeader />
        <HeroCaraousel />
        <Introduction />
        <Cards />
        </>
    )
}