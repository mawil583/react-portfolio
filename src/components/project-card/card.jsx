import React from 'react';
import { Card, Button, Container, Row, Col, CardDeck } from 'react-bootstrap';

const ProjectCard = (props) => {
    return (
        <Container>
            <Row className='mt-3'>
                <CardDeck>

                {props.projectInfo.map(project => (
                    
                        <Card className="shadow" key={project.projectTitle} style={{ width: '18rem' }}>
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
                    
                    ))}
                    </CardDeck>
            </Row>
        </Container>
    );
};

export default ProjectCard;