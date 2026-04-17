import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row>
          <div className="about-bx">
            <h2>About Me</h2>
            <Col>
              <p>
                Hi, my name is <b>Eric Zhong</b>. I really enjoyed building
                <a href="/projects"> various unique games</a> in the early
                2020s, which motivated me to start exploring game development in
                C++ and web technologies like React (this website :))!
              </p>
              <p>
                Outside of class, I play tennis (usually casually with my
                parents), drive for{" "}
                <a
                  href="https://www.spiritracingsystems.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Spirit Racing Systems
                </a>
                , and assist others in creating forum games on{" "}
                <a
                  href="https://artofproblemsolving.com/community"
                  target="_blank"
                  rel="noreferrer"
                >
                  Art of Problem Solving's forums
                </a>
                .
              </p>
              <p>
                Be sure to check out my other <a href="/projects"> Projects</a>{" "}
                and <a href="/experience"> Experiences</a>!
              </p>
            </Col>
          </div>
        </Row>
      </Container>
    </section>
  );
};
