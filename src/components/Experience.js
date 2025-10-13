import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ExperienceCard } from './ExperienceCard';
import threevillage_logo from "../assets/img/threevillage_logo.png";

export const Experience = () => {
    const experiences = [
        {
            title: "Three village Central School District",
            subtitle: "Graduate June 2026",
            description: "High school student",
            imgUrl: threevillage_logo,
            justify: "left"
        },
        
    ];
    return (
        <section className="experience" id="experience">
            <Container>
                <Row>
                    <Col size={12}>
                        {/* <h2>Experiences</h2> */}
                        <br />
                    </Col>
                </Row>
                <Row className="experience-row">
                    {
                        experiences.map((experience, index) => {
                            return (
                                <ExperienceCard
                                    key={index}
                                    {...experience}
                                />
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    )
}