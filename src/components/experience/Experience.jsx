import React from 'react';
import './Experience.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}



function Experience() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    
    <div className="experience-container">
      <section className="experience-section">
  <h2>Professional Experience</h2>

  <Slider {...settings}>

  

  <div className="experience-entry">
    <h3>Technical Sales & Business Development</h3>
    <p>Black and McDonald Ltd, 2010 - 2013</p>
    <img src="/Images/blackmac.png" alt="Black and McDonald" />
    <ul>
      <li>Developed key growth sales strategies, tactics and action plans.</li>
      <li>Successfully executed plans to achieve sales targets and expand our customer base.</li>
      <li>Built and maintained strong, long-lasting customer relationships.</li>
    </ul>
  </div>

  <div className="experience-entry">
    <h3>Project Manager</h3>
    <p>Short Atlantic Inc Contractors, 2013 - 2016</p>
    <img src="/Images/SA.png" alt="Short Atlantic Inc" />
    <ul>
      <li>Supervised sub-contractor operations and commisioned projects (Overhead Doors, Specialties)</li>
      <li>Some projects included the Long Term Care in St. John's, NL and Dept of Defense headquarters</li>
      <li>Worked with many general Contractors such as Marco, Ellis Don, Pomerleau, amongst others</li>
      <li>Managed the relationship with the client and all stakeholders, ensuring the successful completion of projects.</li>
      <li>Performed risk management to minimize project risks and maintained comprehensive project documentation.</li>
    </ul>
  </div>

  <div className="experience-entry">
    <h3>Football Analyst</h3>
    <p>Pro Football Focus, 2017 - 2023</p>
    <img src="/Images/pff.png" alt="Pro Football Focus" />
    <ul>
      <li>Analyzed game and player data to provide insights for team strategies and performance improvement.</li>
      <li>Contributed to the development of player evaluation metrics and advanced football analytics.</li>
      <li>Collaborated with a global team to support data-driven decisions in professional football.</li>
    </ul>
  </div>

  {/* <div className="experience-entry">
    <h3>Internship</h3>
    <p>SmartDoor Technologies Jan 2024</p>
    <img src="/Images/smart.png" alt="Short Atlantic Inc" />
    <ul>
      <li>Chosen to intern from the Genesis Program</li>
      <li>Local Startup</li>
      <li>App development</li>
      
    </ul>
  </div> */}
  </Slider>

</section>
    </div>
    
  );
}

export default Experience;
