import { Container } from "./styles";
import RobinPic from "../../assets/robin.jpg";
import ScrollAnimation from "react-animate-on-scroll";

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
          Hi, I'm Reajul Islam, a passionate software engineer specializing in web development with over a year of hands-on experience in various tech stacks including <b>Laravel , .NET, MERN </b> etc. I hold a Bachelor's degree in Computer Science and Engineering and currently work at ConnexPay, a US-based virtual payment company. My role involves managing and integrating complex payment systems with major platforms like Visa, Monavate, BlueSnap, and TSYS.  
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
            I am deeply fascinated by the intersection of technology and finance, constantly seeking ways to innovate and improve payment systems. My goal is to use my technical expertise to drive growth and enhance the financial landscape, both globally and in emerging markets like Bangladesh.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            Feel free to explore my portfolio, where I showcase projects that reflect my commitment to driving impactful solutions in fintech.</p>
        </ScrollAnimation>

      </div>
      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={RobinPic} alt="Robin" />
        </ScrollAnimation>
      </div>
    </Container>
  )
}
