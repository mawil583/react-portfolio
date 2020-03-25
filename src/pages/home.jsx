import React, { Component } from 'react';
import { Container, Row, Col, } from 'react-bootstrap';
import LinkedInPhoto from '../assets/LinkedInPhoto.jpeg';
import { Link } from 'react-router-dom';

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
                                    <p>React | JavaScript | Bootstrap | Node.js | Express | jQuery | MongoDB | SQL | CSS3 | HTML5</p>
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

                                                    <a href="https://drive.google.com/open?id=1whG6WH0AgOyOM79xBv_nvpCgrFtFx-ic" rel="noopener noreferrer" target="_blank">
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
                                <span className="align-bottom justify-content-center">
                                    <img className="aboutMeImage align-text-bottom" src={LinkedInPhoto} alt="LinkedIn" />
                                </span>
                            </Col>
                            <Col xl={8} lg={7} md={6} sm={12}>

                                <div className="aboutMeImage">
                                    <h2 id="centerMe">About Me</h2>
                                </div>
                                <p>Hello! My name is Michael and I am a chemist turned full-stack software engineer. I have always been drawn
                                    towards technical areas of study. As far back as I can remember, I've always
                                    excelled in math and science. During my undergrad, philosophy of logic was one of my favorite classes. And
                                    now I found a discipline where I get to work with logic daily. It's a dream come true!
                                </p>
                                <p>Skills of mine include React, React-Bootstrap, JavaScript (ES6), Mongo/Mongoose, SQL/Sequelize, Node.js/Express, RESTful APIs,
                                    Command Terminal, Bootstrap, jQuery, HTML5, and CSS3.</p>
                                <p>This website was created from scratch using JavaScript, Node.js, Express, React, React-Bootstrap, Font-Awesome,
                                    Google Fonts and custom CSS. Because of Bootstrap's grid system, this site is fully responsive. Try it out!
                                    Resize your browser and the content will remain viewable.</p>

                                <p>In my <Link to='/portfolio'>portfolio</Link> section you'll be able to see what my skills are able to accomplish. Most of my skills are
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