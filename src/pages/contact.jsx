import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

function Contact() {

    return (
        <Container>
            <Row>
                <Col className="column">
                    <h2>Michael Williams</h2>
                    <img 
                    src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                    alt="avatar"
                    className="contact-avatar"
                     />
                    <p className="contactP">Certified Full-Stack Developer at your service. Please 
                    feel free to contact me about assignments, employment opportunities or for collaboration. 
                    I love what I do and I'm excited to take on another project!</p>
                </Col>
                <Col className="column">
                    <h2>Contact Me</h2>
                    <hr />
                    <ListGroup className="contact-me" variant="flush">

                        <ListGroup.Item className="contact-item">
                            <i className="fa fa-phone-square" aria-hidden="true" />
                            Phone: (602) 448-5588
                        </ListGroup.Item>
                        <ListGroup.Item className="contact-item"><a target="_blank" rel="noopener noreferrer" href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=mwilliams2964@gmail.com"><i className="fa fa-envelope-square" aria-hidden="true" />Email: mwilliams2964@gmail.com</a></ListGroup.Item>
                        <ListGroup.Item className="contact-item"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/michael-williams-1b0a1535/"><i className="fa fa-linkedin-square" aria-hidden="true" />LinkedIn</a></ListGroup.Item>
                    </ListGroup>
                    
                </Col>
            </Row>
        </Container>
    )

}
export default Contact;