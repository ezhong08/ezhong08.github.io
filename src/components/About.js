import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const About = () => {
    return (
        <section className="about" id="about">
            <Container>
                <Row>
                    <div className="about-bx">
                        <h2>About Me</h2>
                        <Col>
                            <p>Hi, my name is Eric Zhong,
                                For example, I really enjoyed building my first
                                <a href="/projects/songassociation"> web application</a> in late 2023,
                                which motivated me to start exploring game development in C++ and
                                web technologies like React (this website :))!</p>
                            <p>
                                Outside of class, I dance in <a href="https://www.youtube.com/@CMUKPDC" target="_blank" rel="noreferrer">KPDC</a>,
                                drive for <a href="https://www.spiritracingsystems.com/" target="_blank" rel="noreferrer">Spirit Racing Systems</a>,
                                and improve the campus dining experience in Dining Student Advisory Council.
                            </p>
                            <p>
                                Be sure to check out my other <a href="/projects"> Projects</a> and <a href="/experience"> Experiences</a>!
                            </p>
                        </Col>
                    </div>
                </Row>
            </Container>
        </section>
    )
}