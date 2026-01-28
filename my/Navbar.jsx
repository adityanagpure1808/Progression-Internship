import { useState } from "react";         

const API_URL = "http://localhost:8000/api/random-quote";


import Navbar from "./Navbar";
import Hero from "./Hero";
import Features from "./features";
import Footer from "./Footer";

export default function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </>
  );
}
