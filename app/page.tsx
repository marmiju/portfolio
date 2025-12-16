import AboutSection from "./components/sections/About";
import ContactSection from "./components/sections/ContactSection";
import Experiences from "./components/sections/Experiences";
import Home from "./components/sections/Home";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";

export default function app() {
  return (
    <main className="flex flex-col ">
      <Home/>
      <Skills/>
      <Projects/>
      <Experiences/>
      <AboutSection/>
      <ContactSection/>
      <footer className="bg-white text-black text-center p-2">
        <p>&copy; {new Date().getFullYear()} Azizar rahman. All rights reserved.</p>
      </footer>
     
    </main>
  );
}
