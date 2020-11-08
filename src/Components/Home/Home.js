import React from 'react';
import './Home.css'
import './images/header-bg.png'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faWifi, faMobile, faArrowUp } from '@fortawesome/free-solid-svg-icons'

const Home = () => {

  return (
    <div>
      <div class="header" id="topheader">
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top ">
          <div class="container text-uppercase p-2 ">
            <a class="navbar-brand font-weight-bold text-white" href="#">Krazy IT</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse"
              data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ml-auto text-uppercase">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#servicediv">Service</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/imagepreview">Image Preview</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/tshirt">T-Shirt</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#contact">Login</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section class="header-section">
          <div class="center-div">
            <h1 class="font-weight-bold">We are The Web Devlopers</h1>
            <p>We create world class website.</p>
            <div class="header-buttons">
              <a href="#newsletterid">About us</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </section>
      </div>
      <section class="header-extradiv">
        <div class="container">
          <div class="row">
            <div class="extra-div col-lg-4 col-md-4 col-12">
              <a href="#"><i class="fa-3x fa fa-desktop" aria-hidden="true"></i></a>
              <h2>EASY TO USE</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id velit aut omnis repellat blanditiis
                        quis quo suscipit .</p>

            </div>
            <div class="extra-div col-lg-4 col-md-4 col-12">
              <a href="#"><i class="fa-3x fa fa-trophy" aria-hidden="true"></i></a>
              <h2>AWESOME DESIGN</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id velit aut omnis repellat blanditiis
                        quis quo suscipit .</p>

            </div>
            <div class="extra-div col-lg-4 col-md-4 col-12">
              <a href="#"><i class="fa-3x fa fa-magic" aria-hidden="true"></i></a>
              <h2>EASY TO CUSTOMIZE</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id velit aut omnis repellat blanditiis
                        quis quo suscipit .</p>

            </div>
          </div>
        </div>

      </section>

      {/* <section class="service-offers" id="servicediv">
        <div class="container headings text-center">
            <h1 class="text-center font-weight-bold">MY SKILL AREA</h1>
            <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, architecto.</p>

        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-6  col-md-12 col-10 offset-1 offset-lg-0">
                    <div class="names my-3">
                        <h1>Html</h1>
                        <div class="progress w-75">
                            <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar"
                                aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 100%">100%</div>
                        </div>

                    </div>
                    <div class="names my-3">
                        <h1>css</h1>
                        <div class="progress w-75">
                            <div class="progress-bar progress-bar-striped bg-success progress-bar-animated"
                                role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
                                style="width: 90%">90%</div>
                        </div>

                    </div>
                    <div class="names my-3">
                        <h1>Bootstrap</h1>
                        <div class="progress w-75">
                            <div class="progress-bar progress-bar-striped bg-warning progress-bar-animated"
                                role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
                                style="width: 95%">95%</div>
                        </div>

                    </div>
                    <div class="names my-3">
                        <h1>JavaScript</h1>
                        <div class="progress w-75">
                            <div class="progress-bar progress-bar-striped bg-danger progress-bar-animated"
                                role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
                                style="width: 70%">70%</div>
                        </div>

                    </div>
                    <div class="names my-3">
                        <h1>React</h1>
                        <div class="progress w-75">
                            <div class="progress-bar progress-bar-striped  bg-info progress-bar-animated"
                                role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
                                style="width: 60%">60%</div>
                        </div>

                    </div>

                </div>

                <div class="col-lg-6 col-md-12 col-12 service-div">
                    <div class="row">
                        <div class="col-lg-2 col-2 service-icons">
                            <i class="fa-3x fa fa-desktop" aria-hidden="true"></i>
                        </div>
                        <div class="col-lg-10 col-10">
                            <h2>Website Devlopment</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, natus</p>

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-2 col-2 service-icons">
                            <i class="fa-3x fa fa-mobile" aria-hidden="true"></i>
                        </div>
                        <div class="col-lg-10 col-10">
                            <h2>Single page application Devlopment</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, natus</p>

                        </div>
                        <div class="row">
                            <div class="col-lg-2 col-2 service-icons">
                                <i class="fa-3x fa fa-wifi" aria-hidden="true"></i>
                            </div>
                            <div class="col-lg-10 col-10">
                                <h2>Machine learning</h2>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, natus</p>
                            </div>
                        </div>
                    </div>
                </div>  
    </section> */}
     


      <section class="project-work">
        <div class="container headings text-center">
            <p class="text-center font-weight-bold">WE SERVE MORE THEN YOU EXPECT</p>
        </div>

        <div class="container d-flex justify-content-around  align-items-center text-center">
            <div>
                <h1 class="count">1500</h1>
                <p>CMS Installation</p>
            </div>
            <div>
                <h1 class="count">2500</h1>
                <p>Boosting</p>
            </div>
            <div>
                <h1 class="count">500</h1>
                <p>Clients</p>
            </div>
            <div>
                <h1 class="count">700</h1>
                <p>CMS Installation</p>
            </div>
        </div>
    </section>


    <section class="pricing" id="pricingdiv">
        <div class="container headings text-center text-white">
            <h1 class="text-center font-weight-bold">OUR BEST PRICING</h1>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-12">
                    <div class="card text-center">
                        <div class="card-header">BASIC</div>
                        <div class="card-body">
                            <li> $ <span class="money">20</span>/Website</li>
                            <li>Responsive Websites</li>
                            <li>Domain name Free</li>
                            <li>Mobile Friendly </li>
                            <li>Webmail Support</li>
                            <li>Customer Support 24/7</li>
                        </div>
                        <div class="card-footer "><a href="">Purchase</a></div>
                    </div>
                </div>
                <div class="col-lg-4 col-12 card-second">
                    <div class="card text-center">
                        <div class="card-header">STANDARD</div>
                        <div class="card-body">
                            <li> $ <span class="money">40</span>/Website</li>
                            <li>Responsive Websites</li>
                            <li>Domain name Free</li>
                            <li>Mobile Friendly </li>
                            <li>Webmail Support</li>
                            <li>Customer Support 24/7</li>
                        </div>
                        <div class="card-footer"><a href="">Purchase</a></div>
                    </div>
                </div>
                <div class="col-lg-4 col-12">
                    <div class="card text-center">
                        <div class="card-header">UNLIMITED</div>
                        <div class="card-body">
                            <li> $ <span class="money">60</span>/Website</li>
                            <li>Responsive Websites</li>
                            <li>Domain name Free</li>
                            <li>Mobile Friendly </li>
                            <li>Webmail Support</li>
                            <li>Customer Support 24/7</li>
                        </div>
                        <div class="card-footer"><a href="">Purchase</a></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="happyclients">
        <div class="container headings text-center ">
            <h1 class="text-center font-weight-bold">OUR HAPPY CLIENTS</h1>
            <p class="text-capitalized pt-1">Our satisfied customer says</p>
        </div>
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-12">
                            <div class="box">
                                <a href="#"><img src='https://ibb.co/bWw1QM5' class="img-fluid img-thumbnail" alt=""/></a>

                                <p class="m-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas quisquam,
                                    odit
                                    fugit aperiam atque nobis nulla voluptatibus dicta! </p>
                                <h1> Asif Hasan</h1>
                                <h2>Web Devloper</h2>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-12">
                            <div class="box">
                                <a href="#"><img src='./images/header-bg.png' class="img-fluid img-thumbnail" alt=""/></a>

                                <p class="m-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas quisquam,
                                    odit
                                    fugit aperiam atque nobis nulla voluptatibus dicta! </p>
                                <h1> Asif Hasan</h1>
                                <h2>Web Devloper</h2>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-12">
                            <div class="box">
                            <a href="#"><img src="images/header-bg.png" class="img-fluid img-thumbnail" alt=""/></a>

                                <p class="m-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas quisquam,
                                    odit
                                    fugit aperiam atque nobis nulla voluptatibus dicta! </p>
                                <h1> Asif Hasan</h1>
                                <h2>Web Devloper</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-12">
                            <div class="box">
                                <a href="#"><img src="images/header-bg.png" class="img-fluid img-thumbnail" alt=""/></a>

                                <p class="m-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas quisquam,
                                    odit
                                    fugit aperiam atque nobis nulla voluptatibus dicta! </p>
                                <h1> Asif Hasan</h1>
                                <h2>Web Devloper</h2>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-12">
                            <div class="box">
                                <a href="#"><img src="images/header-bg.png" class="img-fluid img-thumbnail" alt=""/></a>

                                <p class="m-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas quisquam,
                                    odit
                                    fugit aperiam atque nobis nulla voluptatibus dicta! </p>
                                <h1> Asif Hasan</h1>
                                <h2>Web Devloper</h2>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-12">
                            <div class="box">
                                <a href="#"><img src="images/header-bg.png" class="img-fluid img-thumbnail" alt=""/></a>

                                <p class="m-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas quisquam,
                                    odit
                                    fugit aperiam atque nobis nulla voluptatibus dicta! </p>
                                <h1> Asif Hasan</h1>
                                <h2>Web Devloper</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-12">
                            <div class="box">
                                <a href="#"><img src="images/header-bg.png" class="img-fluid img-thumbnail" alt=""/></a>

                                <p class="m-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas quisquam,
                                    odit
                                    fugit aperiam atque nobis nulla voluptatibus dicta! </p>
                                <h1> Asif Hasan</h1>
                                <h2>Web Devloper</h2>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-12">
                            <div class="box">
                                <a href="#"><img src="images/header-bg.png" class="img-fluid img-thumbnail" alt=""/></a>

                                <p class="m-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas quisquam,
                                    odit
                                    fugit aperiam atque nobis nulla voluptatibus dicta! </p>
                                <h1> Asif Hasan</h1>
                                <h2>Web Devloper</h2>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-12">
                            <div class="box">
                                <a href="#"><img src="images/header-bg.png" class="img-fluid img-thumbnail" alt=""/></a>

                                <p class="m-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas quisquam,
                                    odit
                                    fugit aperiam atque nobis nulla voluptatibus dicta! </p>
                                <h1> Asif Hasan</h1>
                                <h2>Web Devloper</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </section>
    <section class="contactus" id="contact">
        <div class="container headings text-center ">
            <h1 class="text-center font-weight-bold">CONTACT US</h1>
            <p class="text-capitalized pt-1">We are here to help you and provide you the best solution</p>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-8 col-10  offset-lg-2 offset-md-2 offset-1">
                    <form>
                        <div class="form-group">

                            <input type="text" class="form-control" id="username" required autocomplete="off"
                                placeholder="Enter your Name"/>

                        </div>
                        <div class="form-group">

                            <input type="email" class="form-control" id="exampleInputEmail1" required autocomplete="off"
                                placeholder="Enter your email"/>

                        </div>
                        <div class="form-group">

                            <input type="number" class="form-control" id="mobile" required autocomplete="off"
                                placeholder="Enter your mobile number"/>

                        </div>
                        <div class="form-group">
                            <textarea class="form-control" rows="5" id="comment"
                                placeholder="Enter your Message"></textarea>
                        </div>
                        <div class="d-flex justify-content-center form-button">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </section>
    <section class="newsletter" id="newsletterid">
        <div class="container headings text-center ">
            <h1 class="text-center font-weight-bold">SUBSCRIBE TO OUR NEWSLETTER</h1>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-8  offset-lg-2 col-12">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control news-input" placeholder="Your Email"/>
                        <div class="input-group-append">
                            <span class="input-group-text">Subscribe</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <footer class="footersection" id="footerdiv">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-12 footer-div ">
                    <div>
                        <h3>About Learn with Asif </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quas, reiciendis vero autem
                            a
                            eaque quaerat error rerum explicabo! Cumque nulla quis magni modi praesentium quae accusamus
                            explicabo nisi dicta.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-12 footer-div  text-center">
                    <div>
                        <h3>NAVIGATION LINKS </h3>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Serive</a></li>
                        <li><a href="#">Price</a></li>
                        <li><a href="#">About</a></li>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 col-12 footer-div ">
                    <div>
                        <h3>NEWSLETTER</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deserunt veritatis reiciendis
                            explicabo qui exercitationem ullam adipisci quos, excepturi neque</p>
                        <div class="container newsletter-main">
                            <div class="row">
                                <div class="col-lg-12  col-12">
                                    <div class="input-group mb-3">
                                        <input type="text" class="form-control news-input" placeholder="Your Email"/>
                                        <div class="input-group-append">
                                            <span class="input-group-text">Subscribe</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-5 text-center">
                <p>copyright © 2020 All rights reserved by Learn with Asif.</p>
            </div>
     
        </div>
    </footer>

        </div>
  );
};

export default Home;