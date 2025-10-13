import { Container, Col, Row } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg4 from "../assets/img/gptreadingbuddy.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
    const projects = [
        {
            title: "ChatGPT Chrome Plugin",
            description: "Coming soon! A Chrome extension that uses OpenAI's API to define/explain user-selected text so users never have to leave the webpage to learn what something means.",
            imgUrl: projImg4,
            projUrl: "https://github.com/"
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