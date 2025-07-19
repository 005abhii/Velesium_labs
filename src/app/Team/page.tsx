"use client";

import Image from "next/image";
import Header from "@/components/layout/header";
import CustomCursor from "@/components/ui/custom-cursor";
import Footer from "@/components/layout/footer";
import BackgroundManager from "@/components/backgrounds/background-manager";
const team = [
  {
    name: "Karri Saarinen",
    role: "Co-founder, CEO",
    img: "/team/karri.png",
  },
  {
    name: "Jori Lallo",
    role: "Co-founder",
    img: "/team/jori.png",
  },
  {
    name: "Tuomas Artman",
    role: "Co-founder, CTO",
    img: "/team/tuomas.png",
  },
  {
    name: "Tom Moor",
    role: "Head of Engineering",
    img: "/team/tom.png",
  },
  {
    name: "Nan Yu",
    role: "Head of Product",
    img: "/team/nan.png",
  },
  {
    name: "Cristina Cordova",
    role: "COO",
    img: "/team/cristina.png",
  },
  {
    name: "Casey Bertenthal",
    role: "Head of Sales",
    img: "/team/casey.png",
  },
];

export default function OurTeam() {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">
      <Header />
      <CustomCursor />
      <BackgroundManager />
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet the Team</h1>
        <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto">
          Our small but mighty team is distributed across North America and
          Europe. We are all makers at heart and care deeply about every detail
          — from code to copy.
        </p>
        <button className="mt-6 px-5 py-2 rounded-md bg-white text-black font-medium hover:bg-gray-200 transition">
          We’re hiring
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {team.map((member, index) => (
          <div key={index} className="text-center">
            <div className="relative w-24 h-24 mx-auto mb-4 rounded-md overflow-hidden grayscale hover:grayscale-0 transition-all">
              <Image
                src={member.img}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-sm font-medium">{member.name}</h3>
            <p className="text-xs text-gray-400">{member.role}</p>
          </div>
        ))}
      </div>
      <Footer />
    </section>
  );
}
