import React, { useEffect } from "react";
import "./FacultyStaff.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FacultyStaff() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div>
      <div className="container-fluid f-0">
        <img
          src="https://shared.ontariotechu.ca/shared/department/student-life/images/sl_staff-and-faculty-banner-illustrator-banner.jpg"
          className="img-1"
          alt=""
        />
      </div>
      <h2 className="text-center mt-5 fs-1 fw-bold">
        <span className="head-frist">FOUN</span>
        <span className="head-second">DER</span>{" "}
      </h2>
      <div className="container-heading">
        <div className="row m-3">
          <div className="col" data-aos="fade-in">
            <div className="card-faculty">
              <img
                className="faculty-img"
                src="https://img.freepik.com/free-photo/3d-portrait-businessman_23-2150793877.jpg?t=st=1717493362~exp=1717496962~hmac=4f4b319c253d0a9dedcba185f41d6de18deaaba8f2b68b24159d9cb05f7251d3&w=360"
                alt=""
              />
              <div className="intro">
                <h3 className="text-center">Raj Mishra</h3>
                <p className="para text-center">Co-Founder & CTO</p>
              </div>
            </div>
          </div>
          <div className="col" data-aos="fade-in">
            <div className="card-faculty">
              <img
                className="faculty-img"
                src="https://img.freepik.com/free-photo/3d-portrait-businessman_23-2150793879.jpg?t=st=1717492671~exp=1717496271~hmac=17d0813eb195cf25070093e919c9530d35fb11efec5117188412c4244284c7ec&w=360"
                alt=""
              />
              <div className="intro">
                <h3 className="text-center">Mukesh Sharma</h3>
                <p className="para text-center"> Co-founder CEO</p>
              </div>
            </div>
          </div>
          <div className="col" data-aos="fade-in">
            <div className="card-faculty">
              <img
                className="faculty-img"
                src="https://img.freepik.com/free-photo/view-3d-businessman_23-2150709814.jpg?t=st=1717492774~exp=1717496374~hmac=be93e59eb540f43554ce48c35a8639768f6a15713930af62928858861fb3ec82&w=740"
                alt=""
              />
              <div className="intro">
                <h3 className="text-center">Sachin Patil</h3>
                <p className="para text-center">Chief Rvenue Office</p>
              </div>
            </div>
          </div>
          <div className="col" data-aos="fade-in">
            <div className="card-faculty">
              <img
                className="faculty-img"
                src="https://img.freepik.com/free-photo/portrait-young-female-professor-education-day_23-2150980022.jpg?t=st=1717493291~exp=1717496891~hmac=145dafd20ed1a69d1be22eef3408e4183ad562f4765381ba23f0398a2e777e85&w=996"
                alt=""
              />
              <div className="intro">
                <h3 className="text-center">Sonali Wagh</h3>
                <p className="para text-center">Director Academics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-center mt-5 fs-1 fw-bold">
        <span className="head-frist">FACULTY</span>
        <span className="head-second">& STAFF</span>{" "}
      </h2>
      <div className="container-heading">
        <div className="row m-3">
          <div className="col" data-aos="fade-in">
            {" "}
            <div className="card-faculty">
              <img
                className="faculty-img"
                src="https://img.freepik.com/free-photo/portrait-senior-male-teacher-education-day_23-2150980011.jpg?t=st=1717492518~exp=1717496118~hmac=953a2d8e4437e95fb2e57eda1342e6ae58d7f2bee7cba42adc1ad31bdf0c5146&w=996"
                alt=""
              />
              <div className="intro">
                <h3 className="text-center">Nilesh Kumar</h3>
                <p className="para text-center">M.A., B.ED., MLISc., P.hD</p>
              </div>
            </div>
          </div>
          <div className="col" data-aos="fade-in">
            <div className="card-faculty">
              <img
                className="faculty-img"
                src="https://img.freepik.com/free-photo/portrait-senior-female-professor-education-day_23-2150980087.jpg?t=st=1717492469~exp=1717496069~hmac=94814f7a642c7f05f0681f25569b4984950766500f46b75e1d9de6694b2667a4&w=740"
                alt=""
              />
              <div className="intro">
                <h3 className="text-center">Roshani Gughe</h3>
                <p className="para text-center">B.A., C.Lib.</p>
              </div>
            </div>
          </div>
          <div className="col" data-aos="fade-in">
            <div className="card-faculty">
              <img
                className="faculty-img"
                src="https://img.freepik.com/free-photo/portrait-young-male-professor-education-day_23-2150980067.jpg?t=st=1717492819~exp=1717496419~hmac=3a7990d01d678c3bc0c367669fc6e1ccf19ab79d43ee0ad5b68d141a83d9a419&w=1060"
                alt=""
              />
              <div className="intro">
                <h3 className="text-center">Aniket Sharma</h3>
                <p className="para text-center">
                  Ex-Trio World School, Bangalore Experience: 13 years+
                </p>
              </div>
            </div>
          </div>
          <div className="col" data-aos="fade-in">
            <div className="card-faculty">
              <img
                className="faculty-img"
                src="https://img.freepik.com/free-photo/portrait-young-female-professor-education-day_23-2150980046.jpg?t=st=1717493051~exp=1717496651~hmac=655ea919b5ab77b63eef8dd76ab2fc8b561e550991494cf3b241a6a10c0bee95&w=740"
                alt=""
              />
              <div className="intro">
                <h3 className="text-center">Khushi Joshi</h3>
                <p className="para text-center">
                  Ex - Jaipur Engineering college and research centre
                  Experience: 1 + years
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-3">
          <div className="col" data-aos="fade-in">
            {" "}
            <div className="card-faculty">
              <img
                className="faculty-img"
                src="https://img.freepik.com/free-photo/3d-cartoon-portrait-person-practicing-law-profession_23-2151419575.jpg?t=st=1717493117~exp=1717496717~hmac=23ed93b61f13fff2b85850c2917200dda90921bb1c58c061602e42a86965fe70&w=1060"
                alt=""
              />
              <div className="intro">
                <h3 className="text-center">Komal Taj</h3>
                <p className="para text-center">
                  Ex- Heritage Xperiential Learning School Gurgaon Experience:
                  9+ years
                </p>
              </div>
            </div>
          </div>
          <div className="col" data-aos="fade-in">
            <div className="card-faculty">
              <img
                className="faculty-img"
                src="https://img.freepik.com/free-photo/3d-cartoon-portrait-person-practicing-law-related-profession_23-2151419526.jpg?t=st=1717493160~exp=1717496760~hmac=40b906b5927a9ca3325cd294c8d2501327db0ef375372b1a1d19e043bbf128f2&w=1060"
                alt=""
              />
              <div className="intro">
                <h3 className="text-center">Kunal Soni</h3>
                <p className="para text-center">
                  Ex-Carman Residential School Dehradun, Lucknow Experience: 9
                  years+
                </p>
              </div>
            </div>
          </div>
          <div className="col" data-aos="fade-in">
            <div className="card-faculty">
              <img
                className="faculty-img"
                src="https://img.freepik.com/free-photo/portrait-3d-female-doctor_23-2151107344.jpg?t=st=1717493235~exp=1717496835~hmac=21a8b6eeff6659d8f6d2d1b7db56bf2526f031063b418e671f9fccc73f816d16&w=1060"
                alt=""
              />
              <div className="intro">
                <h3 className="text-center">Arushi Gupta</h3>
                <p className="para text-center">
                  Ex-Trio World School, Bangalore Experience: 8 years+
                </p>
              </div>
            </div>
          </div>
          <div className="col" data-aos="fade-in">
            <div className="card-faculty">
              <img
                className="faculty-img"
                src="https://img.freepik.com/free-photo/portrait-young-male-professor-education-day_23-2150980045.jpg?t=st=1717492917~exp=1717496517~hmac=2d747be2147a5f411adf7390090a54d367ab7193bac1f1ccedc04016e92bbe1b&w=740"
                alt=""
              />
              <div className="intro">
                <h3 className="text-center">Deepak Bhije</h3>
                <p className="para text-center">
                  MBA, BBA <br />
                  G. S. Raysoni.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="For_Background_Image">
        <div className="imagefix1 text-center">
          <div className="container">
            <h3>Tell Us What Are You Looking For</h3>
            <h5>
              It strives to deliver value-based quality education and imbibe
              top-class management skills
            </h5>
            <button className="contact_us_button">
              {" "}
              <a href="/contact-us" target="_self">
                {" "}
                CONTACT US{" "}
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}