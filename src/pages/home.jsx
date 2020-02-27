import React, { Component } from 'react';
import Resume from '../assets/resume_full-stack.pdf'

class Home extends Component {
    render() {
        return (
            <div className="gradient landing-grid">
                {/* <h1>Not Home</h1> */}
                <img 
                    src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                    alt="avatar"
                />
                <div className="banner">
                    <h1>
                    Full Stack Web Developer
                    </h1>
                    <hr />
                    <p>HTML5 | CSS3 | Bootstrap | JavaScript | jQuery | React | Node.js | Express | SQL | MongoDB</p>
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/michael-williams-1b0a1535/" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                        </a>
                        <a href="https://github.com/mawil583" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square" aria-hidden="true" />
                        </a>
                        <a href={Resume} rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-file" id="resume-icon" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home;