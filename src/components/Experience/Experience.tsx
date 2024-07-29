import React, { Fragment } from "react";
import { Timeline, Event } from "react-timeline-scribble";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

export function Experience() {
  return (
<Container>
  <Fragment>
    <h1>Work Experience</h1>
    <Timeline>
        <ScrollAnimation animateIn="fadeInRight">
      <Event interval={"2016 – 2018"} title={"ConnexPay"} subtitle={"Software Developer"}>
        dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum.
      </Event>
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeInRight">
      <Event interval={"2015 – 2016"} title={"Teton Private Ltd"} subtitle={"Engineer I , Software"}>
        dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum.
      </Event>
      </ScrollAnimation>
    </Timeline>
  </Fragment>
</Container>
)
}


