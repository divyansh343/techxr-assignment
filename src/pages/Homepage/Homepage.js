import React, { Component } from 'react'
import AfterSection from '../../components/sections/After-section';
import CourseStructure from '../../components/sections/CourseStructure-section';
import FrontSection from '../../components/sections/Front-section'
import ProgramSection from '../../components/sections/Program-section'
import UserDirectory from '../../components/sections/User-section/user-directory';
import './Homepage.css'
import videos from '../../data/video-data';
import VideoSection from '../../components/sections/Videos-section/video-section';

export class Homepage extends Component {
    constructor() {
        super();
        this.state = {
            students: [],
            videos: videos,
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(Response => Response.json()).then(users => this.setState({ students: users }))
    }
    render() {
        const { students,videos } = this.state;
        return (
            <div className='container'>
                <FrontSection />
                <ProgramSection />
                <CourseStructure />
                <AfterSection />
                <VideoSection videos={videos} />
                <UserDirectory students={students} />
            </div>
        )
    }
}

export default Homepage