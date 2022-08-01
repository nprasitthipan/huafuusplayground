import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

class Footer extends Component {
    render() {
        const footerstyle = {
            bottom: "0px",
            left: "0px",
            padding: "0px",
        }
        return (
            <div class="text-center text-dark p-3">
                <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css'/>
                <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/uicons-brands/css/uicons-brands.css'/>


                <footer class="text-center text-white" style={footerstyle}>
                    <div class="container pt-4">
                        <section class="mb-4">
                            <a
                                class="btn btn-link btn-floating btn-lg text-dark m-1"
                                href="https://mail.google.com/mail/u/0/?tab=rm#inbox"
                                role="button"
                                data-mdb-ripple-color="dark"
                            ><i class="fi fi-rr-envelope"></i>
                            </a>
                            <a
                                class="btn btn-link btn-floating btn-lg text-dark m-1"
                                href="https://github.com/nprasitthipan"
                                role="button"
                                data-mdb-ripple-color="dark"
                            ><i class="fi fi-brands-github"></i>
                            </a>
                            <a
                                class="btn btn-link btn-floating btn-lg text-dark m-1"
                                href="https://www.linkedin.com/in/natacha-prasitthipan-63556b225/"
                                role="button"
                                data-mdb-ripple-color="dark"
                            ><i class="fi fi-brands-linkedin"></i>
                            </a>
                        </section>
                    </div>
                </footer>
            </div>
        );
    }

}

export default Footer;