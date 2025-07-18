import React from "react";
import Header from "@/components/layout/header";
import CustomCursor from "@/components/ui/custom-cursor";
import About from "@/components/sections/about";
import Works from "@/components/sections/values";
import Process from "@/components/sections/clients";
import Team from "@/components/sections/services";
import Footer from "@/components/layout/footer";
import BackgroundManager from "@/components/backgrounds/background-manager";

const Page = () => {
  return (
    <div>
      <BackgroundManager />
      <CustomCursor />
      <Header />
      <main className="relative py-20 px-6 md:px-8">
        <About />
        <Works />
        <Process />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default Page;
