import React from 'react';
import { Card, Button, Container, Row, Col, CardDeck } from 'react-bootstrap';

const ProjectCard = (props) => {
    return (
        <Container>
            <Row className='justify-content-center mt-3'>
                <CardDeck className="mt-3">

                    {props.projectInfo.map(project => (
                        <Col xs={12} sm={12} md={6} lg={6} xl={4}>

                            <Card className="shadow mt-3 mb-4" key={project.projectTitle} >
                                <a rel="noopener noreferrer" target="_blank" href={project.deployedUrl}>
                                    <Card.Img variant="top" src={project.imageUrl} />
                                </a>
                                <Card.Body>

                                    <Card.Title>{project.projectTitle}</Card.Title>

                                    <Card.Text>
                                        {project.summary}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button href={project.deployedUrl} target="_blank" className='btn-block' variant="primary">Deployed</Button>
                                    <Button href={project.githubUrl} target="_blank" className='btn-block' variant="primary">GitHub</Button>

                                </Card.Footer>
                            </Card>

                        </Col>
                    ))}
                </CardDeck>
            </Row>
        </Container>
    );
};

export default ProjectCard;