import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import ProjectCard from '../components/project-card/card';
import projectInfo from '../projectInfo';

class Portfolio extends Component {

    render() {
        return (

                <Tabs className='justify-content-center' defaultActiveKey="react">
                    <Tab eventKey="react" title="React">
                        <ProjectCard projectInfo={projectInfo} />
                    </Tab>
                    <Tab eventKey="jQuery" title="jQuery">This is jQuery</Tab>
                    <Tab eventKey="mongoDB" title="MongoDB">This is MongoDB</Tab>
                </Tabs>
            
        )
    }
}
export default Portfolio;