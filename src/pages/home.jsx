import React, { Component } from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import Resume from '../assets/resume_full-stack.pdf';
import LinkedInPhoto from '../assets/LinkedInPhoto.jpeg';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="home-top">

                    <img
                        src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                        alt="avatar"
                        id="home-avatar"
                    />
                    <Container>
                        <Row>

                            <Col>
                                <div className="banner">
                                    <h1>
                                        Full Stack Web Developer
                    </h1>
                                    <hr />
                                    <p>HTML5 | CSS3 | Bootstrap | JavaScript | jQuery | React | Node.js | Express | SQL | MongoDB</p>
                                    <Container fluid>
                                        <Row>
                                            <div className="social-links">
                                                <Col >
                                                    <a href="https://www.linkedin.com/in/michael-williams-1b0a1535/" rel="noopener noreferrer" target="_blank">
                                                        <i className="fa fa-linkedin-square fa-fw" aria-hidden="true" />
                                                    </a>
                                                    <a href="https://github.com/mawil583" rel="noopener noreferrer" target="_blank">
                                                        <i className="fa fa-github-square fa-fw" aria-hidden="true" />
                                                    </a>
                                                
                                                    <a href={Resume} rel="noopener noreferrer" target="_blank">
                                                        <i className="fa fa-external-link-square fa-fw" aria-hidden="true" />
                                                    </a>
                                                </Col>
                                                

                                            </div>
                                        </Row>
                                    </Container>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="addPadding">

                    <Container>
                        <Row className="flex-wrap align-items-center">

                            <Col xl={4} lg={5} md={6} sm={12} className="pt-lg-5 pt-xl-3 pt-md-5 align-text-bottom" >
                                <span className="align-bottom d-flex justify-content-center">
                                    <img className="aboutMeImage align-text-bottom" src={LinkedInPhoto} alt="LinkedIn" />
                                </span>
                            </Col>
                            <Col xl={8} lg={7} md={6} sm={12}>

                                <div className="aboutMeImage">
                                    <h2 id="centerMe">About Me</h2>
                                </div>
                                <p>Hello! My name is Michael and I am a chemist turned full-stack software engineer. I have always been drawn
                                    towards technical areas of study. Even during my early high school years, when I was a bad student, I still
                                    excelled in math and science. During my undergrad, philosophy of logic was one of my favorite classes. And
                                    now I found a discipline where I get to work with logic daily. It's a dream come true!
                                </p>
                                <p>Skills of mine include HTML5, CSS3, JavaScript (ES6), Command Terminal, Bootstrap, jQuery, Node.js/Express,
                                    RESTful APIs, SQL/Sequelize, Mongo/Mongoose, React, and NPM packages.</p>
                                <p>This website was created from scratch using JavaScript, Node.js, Express, React, React-Bootstrap, Font-Awesome,
                                    Google Fonts and custom CSS. Because of Bootstrap's grid system, this site is fully responsive. Try it out!
                                    Resize your browser and the content will remain viewable.</p>

                                <p>In my portfolio section you'll be able to see what my skills are able to accomplish. Most of my skills are
                                    showcased there. Feel free to contact me for any inquiries.</p>

                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}
export default Home;