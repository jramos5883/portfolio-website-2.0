import Intro from "./components/intro/intro.comp";
import AboutMe from "./components/aboutMe/aboutMe.comp";
import Skills from "./components/skills/skills.comp";
import Projects from "./components/projects/projects.comp";
import ContactForm from "./components/contactForm/contactForm.comp";
import Footer from "./components/footer/footer.comp";

export default function Home() {
  return (
    <div className="">
      <Intro />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
}
