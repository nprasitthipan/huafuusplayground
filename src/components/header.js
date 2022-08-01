import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div className="App">
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item" role="presentation" style={{margin: "0 0 1% 10%"}}>
                        <Link to="/" class="nav-link" data-bs-toggle="tab" href="#home" aria-selected="false" role="tab">About</Link>
                    </li>
                    <li class="nav-item" role="presentation" >
                        <Link to="/Resume" class="nav-link" data-bs-toggle="tab" href="#profile" aria-selected="false" role="tab" tabindex="-1">Resume</Link>             
                    </li>
                    <li class="nav-item" role="presentation">
                    <Link to="/Contact" class="nav-link" data-bs-toggle="tab" href="#profile" aria-selected="false" role="tab" tabindex="-2">Contact</Link>                       </li>
                </ul>
            </div>
        );
    }

}

export default Header;