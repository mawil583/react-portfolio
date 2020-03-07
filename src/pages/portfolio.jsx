import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import ProjectCard from '../components/project-card/card';
import {projectInfo, tabNames} from '../projectInfo';

class Portfolio extends Component {

    render() {
        return (
                <Tabs className='justify-content-center' defaultActiveKey={tabNames[0]} >
                    {tabNames.map(tabName => (
                        <Tab eventKey={tabName} title={tabName} key={tabNames} >
                            <ProjectCard projectInfo={projectInfo.filter(project => (
                                project.technologies.includes(tabName)
                            ))} />
                        </Tab>
                    ))}
                </Tabs>
        )
    }
}
export default Portfolio;