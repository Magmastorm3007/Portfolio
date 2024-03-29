import { forwardRef } from "react";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Projects2 from "./Projects2";
import Contact from "./Contact";

export const DivSpinner = () => <div>Loading...</div>;

export const DivContainer = () => (
  <>
    <div className="fixed top-0 left-0 outline-none"></div>
    <section className="flex items-center h-[100vh] relative text-lg uppercase pl-[10%] pr-[10%] pt-[100px] font-neue text-[#ffeded]">
      <Hero />
    </section>

    <section id="about" className="flex items-center h-[100vh] relative text-lg uppercase pl-[10%] pr-[10%] text-[#ffeded] justify-end">
      <About />
    </section>

    <section id='skill'className="flex items-center h-[40vh] relative text-lg uppercase pl-[10%] pr-[10%] pt-[100px] font-neue text-[#ffeded]">
      <Skills />
    </section>

    <section id="project" >
      <Projects />
    
    </section>

  

    <section id="contact" className="flex items-center h-[270vh] relative text-lg uppercase pl-[10%] pr-[10%]text-[#ffeded]">
      <Contact />
    </section>
  </>
);

const Loader = () => {
  return (
   <>
      <DivSpinner />
    <DivContainer/>
    </>
  );
};
export default Loader;