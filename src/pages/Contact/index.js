import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../../components/header'
import Footer from '../../components/footer'


class Contact extends Component {
  render() {
    return (
      <div className="">
        <Header />
        <section className='Middle'>
          <div class="card text-white bg-success mb-3">
            <div class="card-header"><h4>About Me</h4></div>
            <div class="card-body">
              <h2>Personal Information</h2>
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content. AAA
              </p>
            </div>
          </div>
        </section>

        <section className='Footer'>
          <Footer />
        </section>


      </div >


    );
  }

}

export default Contact;
