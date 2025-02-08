import NavBar from "./components/NavBar";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Banner from "./components/Banner";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Banner></Banner>
      <About></About>
      <Skill></Skill>
      <Project></Project>
      <Contact></Contact>
    </div>
  );
}