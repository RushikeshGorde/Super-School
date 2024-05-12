import React, { useEffect } from 'react'
import './Achievement.css'
import AOS from "aos";
import "aos/dist/aos.css";
export default function Achievement() {

    useEffect(() => {
        AOS.init({
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    }, []);

    return (
        <div>
            <div className="container-fluid p-0 achive" data-aos="zoom-y-out">
                <div> <img className='img-2' src=" https://static.vecteezy.com/system/resources/previews/035/775/563/large_2x/ai-generated-golden-trophy-cup-with-star-on-dark-blue-background-3d-rendering-champion-golden-trophy-with-gold-stars-on-a-dark-blue-background-ai-generated-free-photo.jpg" alt="" />

                </div>
            </div>
            <div class="container-fluid">
                <div>
                    <h2 className='text-center mt-5 fs-1 fw-bold'><span className='head-frist'>Student</span><span className='head-second ms-3'>Achievement</span> </h2>
                </div>
                <div class="row">
                    <div class="col-sm">
                        <div className="school-card" data-aos="fade-right">
                            <img className="img-1" src="https://kairosinternationalschool.com/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-27-at-3.10.13-PM-768x768.jpeg" alt="" />
                        </div>
                    </div>
                    <div class="col-sm">
                        <div className="col" data-aos="fade-left">
                            <div className="school-card" data-aos="fade-right">
                                <h2 className='text-center p-3 m-2' >Best School Achievement</h2>
                                <p className='text-center p-3 m-2'>The winner of the Worlds' Best School Prize for Innovation 2023: The Super School, an independent international school in Maharashtra, which has gained worldwide recognition for its groundbreaking, student-centric approach to education with its I CAN pedagogical model.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm">
                    <div className="school-card" data-aos="fade-right">
                                <h2 className='text-center p-3 m-2'>Best Education Achievement</h2>
                                <p className="text-center p-3 m-2">
                                    Achievement points are used in lessons to identify and reward student achievement and effort. Students who contribute to the positive ethos of the school are recognised and rewarded.Ultimately, the measure of success after completing education depends on individual goals, values, and aspirations.
                                </p>
                            </div>
                    </div>
                    <div class="col-sm">
                    <div className="school-card " data-aos="fade-left">
                                <img className="img-1" src="https://www.ipwspv.com/pages/AM_VJY.jpg" alt="" />
                            </div>
                    </div>
                </div>
            </div>

            <div className="container-school-achievement">
                <div>
                    <h2 className='text-center mt-5 fs-1 fw-bold'><span className='head-frist'>Collage</span><span className='head-second ms-3'>Achievement</span> </h2>
                </div>
                <div className="school-achievement ">
                    <div className="row m-5">
                        <div className="col">
                            <div className="school-card" data-aos="fade-right">
                                <img className="img-1" src="https://www.mercyhome.org/wp-content/uploads/2022/07/Academic_Awards_Michael_and_Sayyid.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col" data-aos="fade-left">
                            <div className="school-card" data-aos="fade-right">
                                <h3 className='text-center  p-3 m-2' data-aos="fade-up"> <strong>Recipient:</strong>Starcatchers</h3>
                                <p className="text-center" data-aos="fade-up">I feel overwhelmed and emotional and I am at a loss for words, this is a very special moment in my life. It already felt like a win when I found out that I am even being considered for this honorary award.</p>
                            </div>

                        </div>
                    </div>
                    <div className="row m-5">
                        <div className="col">
                            <div className="school-card" data-aos="fade-right">
                                <h2 className='text-center p-3 m-2'>Best Education Achievement</h2>
                                <h3 className='text-center  p-3 m-2' data-aos="fade-up"> <strong>Recipient:</strong> Pom Squad</h3>
                                <p className="text-center" data-aos="fade-up">It is a great honour to be standing here today to receive this award for my solo dance performance.It's a special moment to celebrate success, acknowledge hard work, and appreciate everyone's contributions.</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="school-card " data-aos="fade-left">
                                <img className="img-1" src="https://img.chmedia.ch/2023/01/20/ae9e8d42-b9fc-4bdd-889a-7b2e48d660e0.jpeg?width=1360&height=907&fit=bounds&quality=75&auto=webp&crop=8192,5462,x0,y0" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-school-achievement">

                <div className="school-achievement ">
                    <div className="row m-5">
                        <div className="col">
                            <div className="school-card" data-aos="fade-right">
                                <img className="img-1" src="https://rockytopsportsworld.com/wp-content/uploads/2018/10/A-group-of-boys-on-a-soccer-team-hoisting-a-trophy-in-the-air.jpg" alt="" />
                            </div>
                        </div>
                        <div className="col" data-aos="fade-left">
                            <div className="school-card" data-aos="fade-right">
                                <h3 className='text-center  p-3 m-2' data-aos="fade-up"> <strong>Recipient:</strong> Pom Squad</h3>
                                <p className="text-center" data-aos="fade-up">It is a great honour to be standing here today to receive this award for my solo dance performance.It's a special moment to celebrate success, acknowledge hard work, and appreciate everyone's contributions.</p>
                            </div>

                        </div>
                    </div>
                    <div className="row m-5">
                        <div className="col">
                            <div className="school-card" data-aos="fade-right">
                                <h3 className='text-center p-3 m-2' data-aos="fade-up"><strong>Recipient:</strong> John Doe</h3>
                                <p className='text-center' data-aos="fade-left">Student exemplifies our school motto of Excellence, Honour and Service and is highly recommended and extremely deserving of this award. </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="school-card " data-aos="fade-left">
                                <img className="img-1" src="https://i.pinimg.com/originals/95/33/b8/9533b8b9c945f47ca6a82b0a38cff0f1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='For_Background_Image'>

                <div className="imagefix1"><h1>Tell Us What Are You Looking For</h1>
                    <h3>It strives to deliver value-based quality education and imbibe top-class management skills</h3>
                    <button className='contact_us_button'> <a href="/contact-us" target="_self"> CONTACT US </a></button>                </div>

            </div>
        </div>
    )
}
