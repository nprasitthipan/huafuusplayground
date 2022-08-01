import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../../components/header'
import './resume.css'



class Resume extends Component {
  render() {
    return (
      <div className="">
        <Header />

        <section className='Middle'>
        <h1 style={{textAlign: "center"}}>Resume</h1>
          
        </section>
      </div >
    );
  }

}

export default Resume;
