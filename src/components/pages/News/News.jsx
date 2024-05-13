import './News.css'; // Stylesheet for the component
import "animate.css/animate.min.css";
import Typewriter from "typewriter-effect";
const News = () => {
  return  (
    <>

    <div className="news-container">

   

    <div className="news-content">
    <div style={{ fontSize: "2rem", color: "dark", textAlign:'center' }}>
                <Typewriter
                    options={{
                        strings: ["LATEST NEWS"],
                        autoStart: true,
                        loop: true,
                        cursor: '<span style="font-size: 4rem;">|</span>',
                    }}
                />
            </div>
    
      <div className="news-card-container">
        {/* Card 1 */}
        <div className="news-card animate__animated animate__fadeInLeft">
          <img src="https://bostonworldschool.com/wp-content/uploads/2023/02/zoo.jpg" className="news-card-img-top" alt="Image 1" />
          <div className="news-card-body ">
            <h5 className="news-card-title">School Trip to Zoo</h5>
            <p className="news-card-text">Students had an amazing time exploring the zoo and learning about various animals. They particularly enjoyed feeding the giraffes and watching the penguins swim.</p>
            <p className="news-card-text"><small className="news-text-muted">May 5, 2024</small></p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="news-card animate__animated animate__fadeInUp">
          <img src="https://www.popsci.com/uploads/2019/03/18/YO6Q7ELUJFOOK53QRDIQPCJSJA.jpg?auto=webp" className="news-card-img-top" alt="Image 2" />
          <div className="news-card-body">
            <h5 className="news-card-title">Science Fair Winners</h5>
            <p className="news-card-text">Congratulations to the winners of our annual science fair! Their innovative projects impressed everyone. The first prize went to a project exploring renewable energy sources.</p>
            <p className="news-card-text"><small className="news-text-muted">May 3, 2024</small></p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="news-card animate__animated animate__fadeInRight">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyaq3EWNRmHkR906m_y_pe9yAa50S5dd7ksg&usqp=CAU" className="news-card-img-top" alt="Image 3" />
          <div className="news-card-body">
            <h5 className="news-card-title">Sports Day Highlights</h5>
            <p className="news-card-text">Our students showcased their athletic talents during the sports day event, creating unforgettable memories. The relay race was particularly thrilling, with teams competing fiercely for the top spot.</p>
            <p className="news-card-text"><small className="news-text-muted">May 1, 2024</small></p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="news-card animate__animated animate__fadeInLeft">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXLZREnojeDbKROaJJL3eKSWo9scydp9lsdVbbNCsdiFfvO-bxHzacLIDP2GBxeUKQTJM&usqp=CAU" className="news-card-img-top" alt="Image 4" />
          <div className="news-card-body">
            <h5 className="news-card-title">Art Exhibition</h5>
            <p className="news-card-text">Art enthusiasts gathered to admire the stunning artworks created by our talented students. The exhibition featured a diverse range of mediums, from paintings and sculptures to digital art.</p>
            <p className="news-card-text"><small className="news-text-muted">April 28, 2024</small></p>
          </div>
        </div>

        {/* Card 5 */}
        <div className="news-card animate__animated animate__fadeInUp">
          <img src="https://www.mobileedproductions.com/hs-fs/hubfs/MusicEducation1.jpg?width=600&name=MusicEducation1.jpg" className="news-card-img-top" alt="Image 5" />
          <div className="news-card-body">
            <h5 className="news-card-title">Music Performance</h5>
            <p className="news-card-text">The melodious tunes filled the auditorium as our students put on a captivating music performance. From classical compositions to modern hits, the audience was treated to an unforgettable evening of music.</p>
            <p className="news-card-text"><small className="news-text-muted">April 25, 2024</small></p>
          </div>
        </div>

        {/* Card 6 */}
        <div className="news-card animate__animated animate__fadeInDown">
          <img src="https://www.bathecho.co.uk/uploads/2021/07/southgate-booknic-2.jpg" className="news-card-img-top" alt="Image 6" />
          <div className="news-card-body">
            <h5 className="news-card-title">Book Reading Event</h5>
            <p className="news-card-text">Readers immersed themselves in captivating stories and explored the magic of literature at our book reading event. The event featured readings from both classic and contemporary literature, catering to all tastes.</p>
            <p className="news-card-text"><small className="news-text-muted">April 23, 2024</small></p>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  <div className="imagefix1 text-center">
  <div className="container">

    <h3>Tell Us What Are You Looking For</h3>
    <h5>It strives to deliver value-based quality education and imbibe top-class management skills</h5>
    <button className='contact_us_button'> <a href="/contact-us" target="_self"> CONTACT US </a></button>
  </div>
</div>
    </>
);
}

export default News;