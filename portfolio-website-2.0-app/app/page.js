import Intro from "./components/intro/intro.comp";
import AboutMe from "./components/aboutMe/aboutMe.comp";
import Skills from "./components/skills/skills.comp";
import LinkGridArt from "./components/LinkGridArt/linkGridArt.comp";

export default function Home() {
  return (
    <div className="">
      <Intro />
      <AboutMe />
      <Skills />
      <LinkGridArt />
    </div>
  );
}
