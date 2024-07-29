import Particles from "react-tsparticles"
import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Project } from "../Project/Project";
import { Experience } from "../Experience/Experience";

export function Main() {
  return (
    <Container>
      <Hero></Hero>
      <About></About>
      <Experience></Experience>
      <Project></Project>
      <Contact></Contact>
    </Container>
  );
}