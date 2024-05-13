import React, { useEffect } from 'react'
import './FacultyStaff.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function FacultyStaff() {

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, []);
  return (
    <div>
      <div className="container-fluid">
          <img src="https://shared.ontariotechu.ca/shared/department/student-life/images/sl_staff-and-faculty-banner-illustrator-banner.jpg" className="img-1" alt="" />
      </div>
      <h2 className='text-center mt-5 fs-1 fw-bold'><span className='head-frist'>FOUN</span><span className='head-second'>DER</span> </h2>
      <div className="container-heading">
        <div className="row m-3">
          <div className="col" data-aos="fade-in">
            <div className="card-faculty">
              <img className='faculty-img' src="https://hiremobilenotary.com/wp-content/uploads/2018/10/2-2.jpg" alt="" />
              <div className="intro">
                <h3 className='text-center'>Raj Mishra</h3>
                <p className='para text-center'>Co-Founder & CTO</p>
              </div>
            </div></div>
          <div className="col" data-aos="fade-in">
            <div className="card-faculty">
              <img className='faculty-img' src="https://th.bing.com/th/id/R.ef1b5ca03ea39f87371b0946cf735c54?rik=aSCv46ZuV2jYHw&riu=http%3a%2f%2favidac.com%2fwp-content%2fuploads%2f2014%2f03%2fhero_customers1.png&ehk=pl2IyFeA6%2bDFaYv0kH%2bD5hyqDwjP7A%2faKGQVCeRku18%3d&risl=&pid=ImgRaw&r=0" alt="" />
              <div className="intro">
                <h3 className='text-center'>Mukesh Sharma</h3>
                <p className='para text-center'> Co-founder CEO</p>
              </div>
            </div>
          </div>
          <div className="col" data-aos="fade-in">
            <div className="card-faculty">
              <img className='faculty-img' src="https://th.bing.com/th/id/OIP.N0iphbY2CPNZeWm-wJrnxAHaHa?w=500&h=500&rs=1&pid=ImgDetMain" alt="" />
              <div className="intro">
                <h3 className='text-center'>Sachin Patil</h3>
                <p className='para text-center'>Chief Rvenue Office</p>
              </div>
            </div>
          </div>
          <div className="col" data-aos="fade-in">
            <div className="card-faculty">
              <img className='faculty-img' src="https://futuresabroad.com/wp-content/uploads/2018/10/Vandana-Mahajan.jpg?189db0&189db0" alt="" />
              <div className="intro">
                <h3 className='text-center'>Sonali Wagh</h3>
                <p className='para text-center'>Director Academics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 className='text-center mt-5 fs-1 fw-bold'><span className='head-frist'>FACULTY</span><span className='head-second'>& STAFF</span> </h2>
      <div className="container-heading">
        <div className="row m-3">
          <div className="col" data-aos="fade-in"> <div className="card-faculty">
            <img className='faculty-img' src="https://media.istockphoto.com/photos/handsome-young-businessman-isolated-picture-id184653112?k=6&m=184653112&s=612x612&w=0&h=JxDOCVav678mHwZ_GzSF5vxVl93_3gP5H4XhKGrLbnA=" alt="" />
            <div className="intro">
              <h3 className='text-center'>Nilesh Kumar</h3>
              <p className='para text-center'>M.A., B.ED., MLISc., P.hD</p>
            </div>
          </div></div>
          <div className="col" data-aos="fade-in">
            <div className="card-faculty">
              <img className='faculty-img' src="https://th.bing.com/th/id/OIP.IjyHA_fbaKeflCztrnIuGwHaHa?rs=1&pid=ImgDetMain" alt="" />
              <div className="intro">
                <h3 className='text-center'>Roshani Gughe</h3>
                <p className='para text-center'>B.A., C.Lib.</p>
              </div>
            </div>
          </div>
          <div className="col" data-aos="fade-in">
            <div className="card-faculty">
              <img className='faculty-img' src="https://media.licdn.com/dms/image/C4E03AQFvSAEFmDhFkg/profile-displayphoto-shrink_800_800/0/1639513976006?e=2147483647&v=beta&t=kUydsMvCpl22DQk7Nupj3Y1Wc82c4F_WHb17fCU5GHM" alt="" />
              <div className="intro">
                <h3 className='text-center'>Aniket Sharma</h3>
                <p className='para text-center'>Ex-Trio World School, Bangalore
                  Experience: 13 years+</p>
              </div>
            </div>
          </div>
          <div className="col" data-aos="fade-in">
            <div className="card-faculty">
              <img className='faculty-img' src="https://media.licdn.com/dms/image/D4E03AQFCA3r7iThEFQ/profile-displayphoto-shrink_800_800/0/1679352063500?e=2147483647&v=beta&t=So_qrmvD43OGxLTr3rddDdYJ6PWnhPFhsrSA31_jD44" alt="" />
              <div className="intro">
                <h3 className='text-center'>Khushi Joshi</h3>
                <p className='para text-center'>Ex - Jaipur Engineering college and research centre
                  Experience: 1 + years</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-3">
          <div className="col" data-aos="fade-in"> <div className="card-faculty">
            <img className='faculty-img' src="https://th.bing.com/th/id/OIP.cCMjAxhVtBzwVBjjuau4hgHaLH?pid=ImgDet&w=192&h=288&c=7" alt="" />
            <div className="intro">
              <h3 className='text-center'>Komal Taj</h3>
              <p className='para text-center'>Ex- Heritage Xperiential Learning School
                Gurgaon
                Experience: 9+ years</p>
            </div>
          </div></div>
          <div className="col" data-aos="fade-in">
            <div className="card-faculty">
              <img className='faculty-img' src="https://media.licdn.com/dms/image/C4D03AQES8tSLckwRkw/profile-displayphoto-shrink_800_800/0/1565823119874?e=2147483647&v=beta&t=ZBBSOqujSgBF9V8SIjzFxSi8bKUV9t7FklhPMibp86E" alt="" />
              <div className="intro">
                <h3 className='text-center'>Kunal Soni</h3>
                <p className='para text-center'>Ex-Carman Residential School
                  Dehradun, Lucknow
                  Experience: 9 years+</p>
              </div>
            </div>
          </div>
          <div className="col" data-aos="fade-in">
            <div className="card-faculty">
              <img className='faculty-img' src="https://th.bing.com/th/id/OIP.G3jYirR8-Qkfb0EOP8zakgHaHa?w=900&h=900&rs=1&pid=ImgDetMain" alt="" />
              <div className="intro">
                <h3 className='text-center'>Arushi Gupta</h3>
                <p className='para text-center'>Ex-Trio World School, Bangalore
                  Experience: 8 years+</p>
              </div>
            </div>
          </div>
          <div className="col" data-aos="fade-in">
            <div className="card-faculty">
              <img className='faculty-img' src="https://media.licdn.com/dms/image/C4D03AQHGX1fkvsfqQw/profile-displayphoto-shrink_800_800/0/1552915680000?e=2147483647&v=beta&t=dUFR948OwCQeg_cPkN1jmsayOYTDcfjTLNzwKxzwtqs" alt="" />
              <div className="intro">
                <h3 className='text-center'>Deepak Bhije</h3>
                <p className='para text-center'>MBA, BBA <br />G. S. Raysoni.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='For_Background_Image'>

<div className="imagefix1 text-center">
  <div className="container">

    <h3>Tell Us What Are You Looking For</h3>
    <h5>It strives to deliver value-based quality education and imbibe top-class management skills</h5>
    <button className='contact_us_button'> <a href="/contact-us" target="_self"> CONTACT US </a></button>
  </div>
</div>

</div>
    </div>
  )
}
