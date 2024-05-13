
import './PrincipalMessage.css';

const PrincipalMessage = () => {

  return (
    <div className="p-0 container-fluid principal-msg">
      <div className="main-container">
        <div className="text-center">
          <img src="https://media.list.ly/production/323435/1969224/item1969224_600px.jpeg?ver=5675775519" className='principal-img rounded-circle' alt="principal" />
        </div>

        <div className="">
        <h2 className='text-center principal-heading fs-1 fw-bold'><span className='head-frist mt-5'>Suchitra</span><span className='mt-5'>Bendre</span> </h2>
          <p><b>WELCOME!!</b></p>
          <p>Welcome to Super School, where we embrace the opportunity to be a part of your child's educational journey. As a school we celebrate our heritage as an institution committed to academic excellence.</p>
          <p>While honouring the traditions of our past, Super School is recognised for its innovative learning methods, partnerships, and entrepreneurial advancements and as a leader in modern approaches to education.</p>
          <p>Our dedicated and passionate teachers are committed to providing the best possible outcomes for every student. They invest time and effort to understand the unique strengths and passions of each child, creating an individualised approach to learning that goes beyond the classroom.</p>
          <p>Your school years shape not only future career success, but it is also a time where social connections are made, and one’s character takes form. At Super School, we value the responsibility of nurturing and guiding young people, understanding their strengths and talents, and assisting them to reach their potential.</p>
          <p>Thank you for considering Super School for your child’s education.</p>
          <p><b>Suchitra Bendre</b></p>
          <p><b>Super School Principal</b></p>
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



  );
};



export default PrincipalMessage;
