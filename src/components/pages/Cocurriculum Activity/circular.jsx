import { useEffect } from 'react';
import "./circular.css";
import Boarding from './images/day-boarding-1.jpg';
import "animate.css/animate.min.css";

function Circular(){

  useEffect(() => {
    const circularleft = document.querySelector(".Co-Curricular-left");
    const circularright = document.querySelector(".Co-Curricular-right");
    const text = document.querySelector(".paraText");
    const img = document.querySelector(".Intro-image");

    if (circularleft && circularright && text && img) {
      circularleft.classList.add("animate__animated", "animate__fadeInLeft");
      circularright.classList.add("animate__animated", "animate__fadeInRight");
      text.classList.add("animate__animated", "animate__fadeInDown");
      img.classList.add("animate__animated", "animate__fadeInDown");
    }
  }, []);

  return(
    <>    
    <div className="container-fluid p-0">
       <img className="Intro-image animate__animated animate__fadeInDown" src="https://laureatehighschool.com/wp-content/uploads/2021/12/The-Importance-of-Co-Curricular-Activities-in-School-Laureate-High-School.jpg"></img>
    </div>
    <container>
      <main className="wrapper bg-lightgrey co-curricular-wrapper">
       {/*<section className="branch-banner cocurricular-banner hideme load-fadein"></section>*/}
        <section className="intro-txt">
        
          {/* <h1>Co-Curricular</h1> */}
          <div className="container">
           
            <p className="paraText animate__animated animate__fadeInDown">
              <span className="big-alpha ">A</span>t Centre Point, we cater to the
              interests, skills and multiple intelligence of our students andequip
              them with life skills, and engage them in various co-curricular
              activities. Students participate in art and craft competitions and
              exhibitions of their artwork are held in the city art galleries.
              Talented and trained faculties mentor students in Performing Arts who
              in turnwin accolades at the local and national level.Our students have
              regularly excelled at the national and international levels invarious
              sports.Day Boardingoffers skill-based activities like Aeromodelling
              and students opt for them to hone their talents and skills to
              perfection.
            </p>
          
          </div>
        </section>
  
        <section className="Co-Curricular-main">
          <div className="container">
            <div className="Co-Curricular-content">
    
              <div className="Co-Curricular-left animate__animated animate__fadeInLeft">
                <div className="visual-art-wrap">
                  <h2>
                    <span>
                      <img
                        src="https://centrepointschools.com/images/curricular/visual-art.png"
                        loading="lazy"
                        alt=""
                      />
                    </span>{" "}
                    <h2 className='text-center mt-5 fs-1 fw-bold'><span className='head-frist'>visual</span><span className='head-second ms-3'>Art</span> </h2>
                  </h2>
                  <div className="single-image-carousal owl-carousel">
                    <div className="item">
                      <img
                        src="https://chscommunicator.com/wp-content/uploads/2013/05/1-IMG_9810-0011-1024x681.jpg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                   
                  </div>
                  <div className="whitebox">
                    <p>
                      <span className="big-alpha">A</span>rt and Craft open up a
                      whole new world of color and creativity to the ones blessed
                      with Visual Intelligence. Therefore right from the very young
                      to the seniors, Visual Arts form a regular in the school
                      time-table. Students have won innumerable laurels in national
                      and international scenarios.
                    </p>
                  </div>
                </div>
                <div className="visual-art-wrap day-boarding">
                  <h2>
                    <span>
                      <img
                        src="https://centrepointschools.com/images/curricular/day-boarding.png"
                        loading="lazy"
                        alt=""
                      />
                    </span>{" "}
                    <h2 className='text-center fs-1 fw-bold'><span className='head-frist'>Day</span><span className='head-second ms-3'>Boarding</span> </h2>
                  </h2>
                  <div className="single-image-carousal owl-carousel">
                    <div className="item">
                      <img
                        src={Boarding}
                        loading="lazy"
                        alt=""
                      />
                    </div>
                   
                  </div>
                  <div className="whitebox">
                    <p>
                      <span className="big-alpha">D</span>AY BOARDING is optional
                      and held in the school premises beyond school hours. The
                      objective is to allow students to choose and develop a hobby
                      within safe environs and without more commuting.
                    </p>
                    <p className="second-p">
                      It greatly helps in personality development.
                    </p>
                    <ul className="disc-style-list">
                      <li>Commercial Art</li>
                      <li>Photography</li>
                      <li>Screen Printing and batik</li>
                      <li>Hindustani Classical Vocal</li>
                      <li>Keyboard</li>
                      
                    </ul>
                  </div>
                </div>
                <div className="visual-art-wrap Excursions-camps">
                  <h2>
                    <span>
                      <img
                        src="https://centrepointschools.com/images/curricular/excursion.png"
                        loading="lazy"
                        alt=""
                      />
                    </span>{" "}
                  
                    <h2 className='text-center fs-1 fw-bold'><span className='head-frist'>Excursions </span><span className='head-second ms-3'>Camps</span> </h2>
                  </h2>
                  <div className="">
                    <div className="item">
                      <img
                        src="https://s3.amazonaws.com/lws_lift/timbercreek_trinity_hills/images/blog/1596138779_hiking_-_resized.jpg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="whitebox">
                    <p>
                      {" "}
                      <span className="big-alpha">D</span>ay boarders wait for the
                      red letter days when they leave the familiar environs of home
                      and school and spend a few idyllic days in the wild. However
                      it is not all fun and play. Training by experts is imparted to
                      help them learn the tricks of survival, collaborative work,
                      problem solving, etc
                    </p>
                  </div>
                </div>
              </div>
              <div className="Co-Curricular-right animate__animated animate__fadeInRight">
                <div className="visual-art-wrap sports-wrap">
                  <h2>
                    <span>
                      <img
                        src="https://centrepointschools.com/images/curricular/sport.png"
                        loading="lazy"
                        alt=""
                      />
                    </span>{" "}
                    <h2 className='text-center mt-5 fs-1 fw-bold'><span className='head-frist'>Sports in</span><span className='head-second'>School</span> </h2>
                  </h2>
                  <div className="">
                    <div className="item">
                      <img
                        src="https://akashik.net/wp-content/uploads/2020/01/Kids-Should-Begin-To-Play-Sports.jpg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="whitebox">
                    <p>
                      <span className="big-alpha">S</span>ports are a necessary and
                      important component of school upbringing-so feels CPS. Thus
                      the emphasis on Sports is tremendous as a means of all round
                      development of body and mind.
                    </p>
                    
                    <p className="second-p">
                      The following facilities are given to all students :
                    </p>
                    <ul className="disc-style-list">
                    
                      <li>Standard size skating rink</li>
                      <li>Basketball courts ·Football field· Lawn Tennis Courts</li>
                      <li>Cricket ground ·Table tennis courts· Badminton Courts</li>
                      <li>200 meter athletic track on 2 acres open ground</li>
                      <li>
                        Play areas with swings, slides and other outdoor equipment
                      </li>
                     
                      <li>Chess and Carom room.</li>
                    </ul>
                  </div>
                </div>
                <div className="visual-art-wrap performing-art-wrap">
                  <h2>
                    <span>
                      <img
                        src="https://centrepointschools.com/images/curricular/sport.png"
                        loading="lazy"
                        alt=""
                      />
                    </span>{" "}
                    <h2 className='text-center fs-1 fw-bold'><span className='head-frist'>Performing</span><span className='head-second ms-3'>Art</span> </h2>
                  </h2>
                  <div className="">
                    <div className="item">
                      <img
                        src="https://www.jagranimages.com/images/21_06_2019-kids_art_development_19331541_12454190.jpg"
                        loading="lazy"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="whitebox">
                    <ul className="disc-style-list">
                      <li>
                        Well – equipped music rooms for Western and Indian music
                      </li>
                      <li>Indoor auditoriums &amp; Outdoor amphitheaters</li>
                    </ul>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
        </section>
             
      </main>
      </container>
      <div className='For_Background_Image'>
      
      <div className="imagefix1"><h1>Tell Us What Are You Looking For</h1>
      <h3>It strives to deliver value-based quality education and imbibe top-class management skills</h3>
      <button className='contact_us_button'> <a href="/contact-us" target="_self"> CONTACT US </a></button>
      </div>
      
    </div>
    </>
    );
}

export default Circular;