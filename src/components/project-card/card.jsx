import React from 'react';
import { Card, Button, Container, Row, Col, CardDeck } from 'react-bootstrap';

const ProjectCard = (props) => {
    return (
        <Container>
            <Row className='mt-3'>
                <CardDeck>

                {props.projectInfo.map(project => (
                    
                        <Card key={project.projectTitle} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={project.imageUrl} />
                            <Card.Body>

                                <Card.Title>{project.projectTitle}</Card.Title>

                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
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