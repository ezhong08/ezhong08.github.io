import { Container, Col, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg4 from "../assets/img/platformer.gif";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
    const projects = [
        {
            title: "Platformer Without Platform",
            description: "This project, A Platformer Without Platforms, is a 2D platformer. However, unlike traditional platformers, there are no platforms for the player to rest on.",
            imgUrl: projImg4,
            projUrl: "https://github.com/ezhong08/Platformer-Without-Platform"
        },
    ];
    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Projects</h2>
                        <p>Click on each card for more detail</p>
                    </Col>
                </Row>
                <Row className="project-row">
                    {
                        projects.map((project, index) => {
                            return (
                                <ProjectCard
                                    key={index}
                                    {...project}
                                />
                            )
                        })
                    }
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="sharp2"></img>
        </section >
    )
}