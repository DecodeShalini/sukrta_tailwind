import React from "react";
import { Outlet } from "react-router-dom";
import ContactHeader from "./Headers/ContactHeader";
import NavHeader from "./Headers/NavHeader";
import Footer from "./Footer/Footer";

const Layout = () => (
  <>
    <ContactHeader />
    <NavHeader />
    <main>
      <Outlet /> {/* This is where nested routes will be rendered */}
    </main>
    <Footer />
  </>
);

export default Layout;
