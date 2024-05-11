import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Team.css'

export default function Team() {

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
        })
    }, [])

    return (
        <div>
            <div class="container-fluid team">
            <h2 className='text-center mt-5 fs-1 fw-bold'><span className='head-frist'>Our</span><span className='head-second'>Team</span> </h2>
                <div class="row team-2">
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div class="our-team shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                            <div class="picture">
                                <img class="img-fluid" src="https://andersonbenefitpartners.com/wp-content/uploads/dummy-member6.jpg" />
                            </div>
                            <div class="team-content">
                                <h3 class="name">Mr. Deepak</h3>
                                <h4 class="title">Pre Primary <br />Ex- Mount litera Zee School, <br /> (Pune)<br />
                                    Experience: 10 years+</h4>
                            </div>
                            <ul class="social">
                                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-linkedin"></i></a></li>

                            </ul>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div class="our-team shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                            <div class="picture">
                                <img class="img-fluid" src="http://www.spaciodevelopers.com/wp-content/uploads/team/team1.jpg" />
                            </div>
                            <div class="team-content">
                                <h3 class="name">Nitesh</h3>
                                <h4 class="title">EVS - Primary <br />Ex- Potdar Internation
                                <br />(Pune)<br />
                                Experience: 6 years+</h4>
                            </div>
                            <ul class="social">
                                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-linkedin"></i></a></li>

                            </ul>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div class="our-team shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                            <div class="picture">
                                <img class="img-fluid" src="https://bestbeachbars.net/wp-content/uploads/2020/10/team-square-1.jpg" />
                            </div>
                            <div class="team-content">
                                <h3 class="name">Ankit</h3>
                                <h4 class="title">Pre Primary <br />Ex- Mount litera Zee School,  <br />(Pune)<br />
                                    Experience: 10 years+</h4>
                            </div>
                            <ul class="social">
                                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-linkedin"></i></a></li>

                            </ul>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 ">
                        <div class="our-team shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                            <div class="picture">
                                <img class="img-fluid" src="https://bestbeachbars.net/wp-content/uploads/2020/10/team-3-1.jpg" />
                            </div>
                            <div class="team-content">
                                <h3 class="name">Sneha</h3>
                                <h4 class="title">Hindi - Primary<br />Ex- S. T. Thomas Public School <br/> (Nagpur)<br />
                                Experience: 6 years​+</h4>
                            </div>
                            <ul class="social">
                                <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                                <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i class="fab fa-linkedin"></i></a></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
