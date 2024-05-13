import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import banner from "./images/school.jpeg";
import "./about.css";
import Typewriter from "typewriter-effect";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import kid from "./images/kid.png";
import kid2 from "./images/kid2.png";
import kid3 from "./images/kid6.png";
import kid6 from "./images/kid4.png";
import kid7 from "./images/kid5.png";
import kid5 from "./images/kid3.png";
import AnimatedTextCharacter from "./AnimatedTextCharacter";

const OurMissionVision = () => {
  return (
    <div className="about-us">
      <motion.div
        className="banner mb-5"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        style={{ backgroundImage: `url(${banner})` }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className='typewriter-over' style={{ fontSize: "4rem" }}>
            <Typewriter
              options={{
                strings: ["Our Mission & Vision"],
                autoStart: true,
                loop: true,
                cursor: '<span style="font-size: 4rem;">|</span>',
              }}
            />
          </div>
          {/* <h1 className="fw-bolder z-1 position-relative our-hrading">
            <motion.span
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Our Mission & Vision
            </motion.span>
          </h1> */}
        </motion.div>
        <motion.div
          className="overlay position-absolute top-0 start-0 w-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        ></motion.div>
      </motion.div>
      <Container>
        <Row className="flex-column flex-sm-row">
          {/* <p className="fw-bolder fs-2 heading">
            <AnimatedTextCharacter text="Our Mission" />
          </p> */}
          <h2 className='mt-5 fs-1 fw-bold'><span className='head-frist'>Our</span><span className='head-second ms-3'>Mission</span> </h2>

          <Col>
            <p className="fs-5 pt-3">
              <motion.span
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                At Super School our mission is to cultivate a nurturing and
                inspiring environment where every student is empowered to
                achieve their full potential. We strive to foster a love for
                learning by providing a comprehensive education that focuses on
                academic excellence, character development, and personal growth.
                Our dedicated educators are committed to creating engaging and
                inclusive learning experiences that cater to the individual
                needs of each student. We aim to instill in our students a
                strong sense of responsibility, integrity, and compassion,
                preparing them to become thoughtful and contributing members of
                society. Through innovative teaching methods, meaningful
                extracurricular activities, and a supportive community, we aim
                to equip our students with the skills and knowledge they need to
                succeed in an ever-changing world.
              </motion.span>
            </p>
          </Col>
          <Col sm={6}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.div
                className="kid1"
                initial={{ y: -40, opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 270, 270, 0],
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                  repeatDelay: 0,
                }}
              >
                <img className="w-100" src={kid} />
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
      <div className="our-mission">
        <Container>
          <Row className="flex-column-reverse flex-sm-row">
            <Col>
              <motion.div
                className="kid2"
                initial={{ y: -40, opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 270, 270, 0],
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                  repeatDelay: 0,
                }}
              >
                <img className="w-75" src={kid2} />
              </motion.div>
            </Col>
            <Col>
              <ul className="fs-4">
                <li>
                  Further and support the legacy of ancient Indian education
                  systems through simultaneous inclusions of modern practices in
                  global school education
                </li>
                <li>
                  Prosper the spirit of continuous and comprehensive academic
                  excellence among all learners and institutions.
                </li>
                <li>
                  Inspire educators, parents, and all stakeholders to contribute
                  towards holistic development of young learners.
                </li>
                <li>
                  Involve eminent contributors from all walks of life to
                  participate in the process of nation-building through the
                  medium of education.
                </li>
                <li>
                  Create an inclusive school where all learners in Primary &
                  Middle Grades are provided equal yet customized learning
                  opportunities irrespective of their learning requirements,
                  limitations, and demographics.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="our-mission2 mt-1">
        <Container>
          <Row className="flex-column flex-sm-row">
            <Col>
              <p className="fs-3 mt-3">
                We create a world where every child has the opportunity to learn
                and grow in a supportive and engaging online environment.
              </p>
            </Col>
            <Col>
              <motion.div
                className="ms-5 kid3"
                initial={{ y: -40, opacity: 1 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  scale: [1, 1.1, 1, 1.15],
                  rotate: [1, 0, 2, 0],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                  repeatDelay: 0,
                }}
              >
                <img className="w-50 ms-5" src={kid3} />
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container className="mt-5">
        <Row className="flex-column-reverse flex-sm-row Our-vision">
          <Col>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.div
                initial={{ y: -40, opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 270, 270, 0],
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                  repeatDelay: 0,
                }}
              >
                <img className="w-100" src={kid6} />
              </motion.div>
            </motion.div>
          </Col>
          <Col>
            {/* <p className="fw-bolder fs-2 mt-1">
              <AnimatedTextCharacter text="Our Vision" />
              
            </p> */}
            <h2 className='mt-5 fs-1 fw-bold'><span className='head-frist'>Our</span><span className='head-second ms-3'>Vision</span> </h2>

            <p className="fs-5 pt-3">
              <motion.span
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                We envision a dynamic learning community where creativity,
                innovation, and critical thinking are nurtured. We aspire to
                cultivate a love for learning that lasts a lifetime, equipping
                our students with the skills, knowledge, and values they need to
                thrive in a globally interconnected world. Our commitment to
                continuous improvement drives us to adapt and innovate, ensuring
                that our educational practices remain relevant and effective.
                Through strong partnerships with parents, the community, and
                industry leaders, we aim to create a supportive and enriching
                environment that empowers every student to reach their full
                potential and become responsible citizens and leaders of
                tomorrow.
              </motion.span>
            </p>
          </Col>
        </Row>
      </Container>
      <div className="our-vision">
        <Container>
          <Row className="flex-column flex-sm-row">
            <Col>
              <ul className="fs-4">
                <li>
                  Embrace technology as an enabler for education, integrating
                  digital tools and resources to enhance learning outcomes.
                </li>
                <li>
                  Foster a culture of environmental sustainability and social
                  responsibility, instilling values of conservation and
                  community engagement.
                </li>
                <li>
                  Ensure inclusive education for students with disabilities,
                  providing necessary support and accommodations for their
                  learning needs.
                </li>
                <li>
                  Engage parents and caregivers as active partners in the
                  education process, promoting a strong home-school partnership.
                </li>
              </ul>
            </Col>
            <Col>
              <motion.div
                initial={{ y: -40, opacity: 1 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  scale: [1, 2, 2, 1, 1],
                  rotate: [0, 0, 270, 270, 0],
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                  repeatDelay: 0,
                }}
              >
                <img className="w-75 ms-5" src={kid7} />
              </motion.div>{" "}
            </Col>
          </Row>
        </Container>
      </div>
      <div className="our-vision">
        <Container>
          <Row className="flex-column-reverse flex-sm-row">
            <Col className="ms-5">
              <motion.div
                className="ms-5 kid5"
                initial={{ y: -40, opacity: 1 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  scale: [1, 1.1, 1, 1.15],
                  rotate: [1, 0, 2, 0],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                  repeatDelay: 0,
                }}
              >
                <img className="w-50" src={kid5} />
              </motion.div>{" "}
            </Col>
            <Col>
              <p className="fs-3 mt-3">
                We aim to provide high quality education and childcare in a
                safe, respectful and inclusive environment that builds a
                foundation for life-long learning.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className='For_Background_Image'>

        <div className="imagefix1"><h4>Tell Us What Are You Looking For</h4>
          <h6>It strives to deliver value-based quality education and imbibe top-class management skills</h6>
          <button className='contact_us_button'> <a href="/contact-us" target="_self"> CONTACT US </a></button>
        </div>

      </div>
    </div>
  );
};

export default OurMissionVision;
