import React, { Component } from 'react';
import './about.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ProfilePic from '../images/profile1.png'
import Header from '../../components/header'
import { Link } from 'react-router-dom';

class About extends Component {
    render() {
        return (
            <div className="About">
                <Header />
                <div style={{ background: "white" }}>
                    <section class="container">
                        <div class="row">
                            <div class="col-4">
                                <img src={ProfilePic} alt='' style={{ width: "300px", margin: "0 0 0 10%" }}></img>
                            </div>
                            <div class="col-7" style={{ margin: "5% 0 0 0" }}>
                                <p>Hello, My name is</p>
                                <h1>Natacha Prasitthipan</h1>
                                <p>
                                    I'm a full-stack developer specialised in frontend and backend development for complex scalable web apps.
                                    I write about web development on my blog and regularly speak at various web conferences and meetups.
                                    Want to know how I may help your project? Check out my project case studies and resume.
                                </p>
                                <Link to={"/Contact"}>
                                    <button>Hire Me</button>
                                </Link>
                            </div>
                            <div class="col-4"></div>
                        </div>
                    </section>
                    <section style={{textAlign: "center", margin: "5% 10% 0 10%"}}>
                        <h1>Skill Overview</h1>
                        <p>I have more than 8 years' experience building rich web applications for clients all over the world. 
                            Below is a quick overview of my main technical skill sets and tools I use. 
                            Want to find out more about my experience? Check out my online resume.
                            Want to find out more about my experience? Check out my online resume.
                            Want to find out more about my experience? Check out my online resume.</p>
                        <div className='row'>

                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default About;