import React from "react";
import MidSectionOne from "./components/MidSectionOne";
import MidSectionTwo from "./components/MidSectionTwo";
import TopSection from "./components/TopSection";
import WhyChoose from "./components/WhyChoose";
import OurClient from "./components/OurClient";
import TheWayWeWork from "./components/TheWayWeWork";
import { motion } from "motion/react";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Team from "./components/Team";
import ShippingDiscounts from "./components/ShippingDiscounts";

function App() {
  return (
    <div className="relative overflow-hidden">
      <header className="sticky top-0 z-20 dark:bg-white/80 backdrop-blur-sm">
        <NavBar />
      </header>
      <main className="relative">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className=""
        >
          <TopSection />
        </motion.div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <section className="py-0 md:py-20">
            <MidSectionOne />
          </section>

          <section className="py-0 md:py-10">
            <MidSectionTwo />
          </section>

          <section className="py-0 md:py-20">
            <WhyChoose />
          </section>
          <section className="py-0 md:py-20">
            <OurClient />
          </section>
          <section className="py-0 md:py-20">
            <TheWayWeWork />
          </section>
          <section className="py-0 md:py-20">
            <ShippingDiscounts />
          </section>
          <section className="py-0 md:py-20">
            <Team />
          </section>
        </div>
      </main>

      <Footer />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl -z-10" />
    </div>
  );
}

export default App;
