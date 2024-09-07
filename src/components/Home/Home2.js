import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home-main.svg";
import Tilt from "react-parallax-tilt";

import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { DiDocker } from "react-icons/di";
import { BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

function Home2() {
  return (
    <Container fluid  className="home-about-section" id="about">
      <Container >
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a programmer  and problem solver with a background in computer science, seeking new opportunities to leverage my skills and
expertise, experience a steep learning curve, and contribute to the organization’s growth while pursuing personal and professional development.<br/>
              <br />I have keen understanding in
              <i>
                <b className="purple"> C, C++, database management systems, Data structures and algorithms.  </b>
              </i>
              <br />
              <br />
              My field of Interest's are developing solutions as form of  &nbsp;
              <i>
                <b className="purple"> Software Application</b>
              </i>
              <br />
              <br />
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} style={{borderRadius:"70% 70% 70% 70%"}} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Shiva0krishna"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/_krishnasangati"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shiva-krishna-sangati-04b599251/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/krishna__sangati/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/shiva_sangati/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <BsLinkedin />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://hub.docker.com/shivasangati"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                <DiDocker />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/shiva_sangati/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                <SiLeetcode />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
