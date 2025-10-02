import React, {useRef, useEffect} from "react";
import img from "../../assets/images/img/vedo_2023.jpeg.jpg"
import ig from  "../../assets/images/img/ved2016.jpg"
import igg from  "../../assets/images/img/ved2021.jpg"
import iggg from  "../../assets/images/img/ved2020.jpg"
import igggg from  "../../assets/images/img/veda2022.jpg"
import imgi from "../../assets/images/img/veda2024.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Changedabt from "./newone";
import "../about/newabt.css";
import { Fade } from "react-bootstrap";
function Responsive() {
    // useEffect(()=>{
    //     console.log(window.innerWidth)
    //     if(window.innerWidth>768){
    //         window.location.href="/about"
    //     }
    // },[])
    const carousel1 = useRef(null);
    const carousel2 = useRef(null);
    var settings1 = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        arrows:false,
        beforeChange: (current, next) => {

              carousel2.current.slickGoTo(next);
          }
    };
    var settings2 = {
        dots: false,
        infinite: true, 
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false, 
        swipe: true,
        beforeChange: (current, next) => {
              carousel1.current.slickGoTo(next);
          }
    };
    return (
        <div className="body1">
        <div className="main_11a">
            <div className="hello1">
            <Slider ref={carousel1}{...settings1}>
                <div className="maincard">
                  <img src={ig} alt={ig} />
                </div>
                <div className="maincard">
                <img src={iggg} alt={ig} />
                </div>
                <div className="maincard">
                <img src={igg} alt={igg} />
                </div>
                <div className="maincard">
                <img src={igggg} alt={iggg} />
                </div>
                <div className="maincard">
                <img src={img} alt={igg} />
                </div>
                <div className="maincard">
                <img src={imgi} alt={imgi} />
                </div>
            </Slider>
            </div>
            <div className="hello2">
            <Slider ref={carousel2}  {...settings2}>
                
                <div>
                    <h5>VEDA-2K16</h5>
                    <br />
                    Digital Veda 2K16: A Technological Extravaganza<br /><br />
                Digital Veda 2K16, hosted by Aditya Engineering College (A) in Kakinada, Andhra Pradesh. Held in September 2016, the event offered a unique platform for students to delve into the intricacies of technology and showcase their skills.
                <br />
                Digital Veda 2K16 promises to be an exciting and enriching experience. Whether you're a tech enthusiast, a budding innovator, or simply curious about the digital age, this event offers something for everyone.
                <br /><br />
                Event Highlights: <br /><br />
                OPUS: Civil Engineering <br />
                IGNITE: Mechanical Engineering <br />
                ELECTRENDZ: Electrical and Electronics Engineering <br />
                SPARK: Electronics and Communication Engineering <br />
                DIGI: Computer Science and Engineering <br />
                PETRO SPIRIT: Production Technology <br />
                EXCAVATION: Mining Engineering <br />
                KRISHI: Agricultural Engineering <br /><br />
                Date: September 30, October 1 <br />
                Venue: "Aditya Engineering College"
            </div>
                <div>
                <h5>VEDA-2K20</h5>
                <br />
                                Digital Veda 2K20: A Technological Extravaganza
                            Digital Veda 2K20, hosted by Aditya Engineering College (A), is a dynamic event designed to challenge and inspire young minds. The event, slated for September 15, offers a unique platform for students to delve into the intricacies of technology and "crack the complexity" of the digital world.
                        <br /><br />
                            The promotional poster, visually striking with its vibrant colors and bold typography, sets the tone for the event. The words "extremely," "groundbreaking," "intelligent," and "notable" hint at the high caliber of the competition. The images of a nuclear power plant, a construction site, a light bulb, and a gear symbolize the diverse fields of technology that will be explored.
                <br /><br />
                            Digital Veda 2K20 promises to be an exciting and enriching experience. Whether you're a tech enthusiast, a budding innovator, or simply curious about the digital age, this event offers something for everyone.
                </div>
                <div>
                <h5>VEDA-2K21</h5>
                <br />
                Digital Veda 2K21: A Technological Extravaganza<br /><br />
                    Digital Veda 2K21, hosted by Aditya Engineering College, is a dynamic event designed to challenge and inspire young minds. Held on September 15, the event offers a unique platform for students to delve into the intricacies of technology and showcase their skills.
                    <br /><br />
                    Event Highlights:
                    <br /><br />
                    Paper Presentations: Students can present their research and ideas on various technological topics.<br />
                    Poster Presentations: Visual displays showcasing innovative projects and concepts.<br />
                    Technical Quizzes: Test your knowledge and problem-solving skills in technical challenges.<br />
                    Digital Veda 2K21 promises to be an exciting and enriching experience. Whether you're a tech enthusiast, a budding innovator, or simply curious about the digital age, this event offers something for everyone.<br />
                    <br />
                    Date: September 15 <br />
                    Venue: "Aditya Engineering College"
                </div>
                <div>
                <h5>VEDA-2K22</h5>
                <br />
                Digital Veda 2K22: A Technological Extravaganza<br /><br />
                Digital Veda 2K22, hosted by Aditya Engineering College (A) in Kakinada, Andhra Pradesh. Held in September 2022, the event offered a unique platform for students to delve into the intricacies of technology and showcase their skills.
                <br />
                Digital Veda 2K22 promises to be an exciting and enriching experience. Whether you're a tech enthusiast, a budding innovator, or simply curious about the digital age, this event offers something for everyone.
                <br /><br />
                Event Highlights: <br /><br />
                OPUS: Civil Engineering <br />
                IGNITE: Mechanical Engineering <br />
                ELECTRENDZ: Electrical and Electronics Engineering <br />
                SPARK: Electronics and Communication Engineering <br />
                DIGI: Computer Science and Engineering <br />
                PETRO SPIRIT: Production Technology <br />
                EXCAVATION: Mining Engineering <br />
                KRISHI: Agricultural Engineering <br /><br />
                Date: September 15 <br />
                Venue: "Aditya Engineering College"
            </div>
                <div>
                <h5>VEDA-2K23</h5>
                <br />
                    Digital Veda 2K23: A Technological Extravaganza <br /><br />
                    Digital Veda 2K23, hosted by Aditya Engineering College (A) in Kakinada, Andhra Pradesh, was a dynamic event designed to challenge and inspire young minds. Held on September 15th and 16th, 2023, the event offered a unique platform for students to delve into the intricacies of technology and showcase their skills.
                    <br /><br />
                    Event Highlights:<br /> <br />
                    OPUS: Civil Engineering<br />
                    IGNITE: Mechanical Engineering<br />
                    ELECTRENDZ: Electrical and Electronics Engineering<br />
                    SPARK: Electronics and Communication Engineering<br />
                    DIGI: Computer Science and Engineering<br />
                    PETRO SPIRIT: Production Technology<br />
                    EXCAVATION: Mining Engineering<br />
                    KRISHI: Agricultural Engineering<br />
                    VIVEKA: Artificial Intelligence, Machine Learning, and Data Science<br /><br />
                    Digital Veda 2K23 showcased the best and brightest minds in the field of technology, providing a platform for students to network, learn, and grow. <br /><br />
                    Date: September 15 <br />
                    Venue: "Aditya Engineering College"

                </div>
                <div>
                <h5>VEDA-2K24</h5>
                <br />
                Digital Veda 2K2$: A Technological Extravaganza <br /><br />
                    Digital Veda 2K24, hosted by Aditya Engineering College (A) in Kakinada, Andhra Pradesh, was a dynamic event designed to challenge and inspire young minds. Held on September 15th and 16th, 2024, the event offered a unique platform for students to delve into the intricacies of technology and showcase their skills.
                    <br /><br />
                    Event Highlights:<br /> <br />
                    OPUS: Civil Engineering<br />
                    IGNITE: Mechanical Engineering<br />
                    ELECTRENDZ: Electrical and Electronics Engineering<br />
                    SPARK: Electronics and Communication Engineering<br />
                    DIGI: Computer Science and Engineering<br />
                    PETRO SPIRIT: Production Technology<br />
                    EXCAVATION: Mining Engineering<br />
                    KRISHI: Agricultural Engineering<br />
                    VIVEKA: Artificial Intelligence, Machine Learning, and Data Science<br /><br />
                    Digital Veda 2K24 showcased the best and brightest minds in the field of technology, providing a platform for students to network, learn, and grow. <br /><br />
                    Date: September 14,15 <br />
                    Venue: "Aditya Engineering College"

                </div>
            </Slider>
            </div>
        </div>
        </div>
    );
}
export default Responsive;