import "./eventsPage.css"
import { FaIndianRupeeSign } from "react-icons/fa6";
import { MdOutline1kPlus } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import React, { useState, useEffect } from 'react';
import PageTitle from "../components/pagetitle/Pagebyus";
import Footer from "../components/footer/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import EachEvent from "./EachEvent";
import { ThreeDots } from 'react-loader-spinner'



const EventsPage = () => {
    const {department} = useParams();
    const [Loader, setLoader] = useState(false)

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [data , setdata] = useState([]);
    const BaseUrl =  process.env.REACT_APP_BASEURL;

    useEffect(() => {
        (async () => {
            setLoader(true)
            console.log(BaseUrl+'/get-event/'+department)
            await axios.get(BaseUrl+'/get-event/'+department)
            .then(res => {
                setdata(res.data);
                console.log(res.data)
            setLoader(false)
            })
            .catch(err =>{
                console.log(err)
                setLoader(false)
        })
        }) ();
    },[])


    const [deptHeader , setdeptHeader] = useState([]);
    
    useEffect(() => {
        (async () => {
            console.log(BaseUrl+'/api/get-department-header/'+department)
            await axios.get(BaseUrl+'/api/get-department-header/'+department)
            .then(res => {
                setdeptHeader(res.data[0]);
                console.log(res.data[0]);
            })
            .catch(err => {
                console.log(err);
            })
        }) ();

    },[])

    

    
    return (
        <>
        {!Loader ? <div className="eventsPage">
                {/* <h1>{eventsData.name}</h1> */}
                <PageTitle title={deptHeader.departmentTitle} />
                <p className="subject">{deptHeader.departmentContent}</p>
                <div className="eventContainer">
                    {data.map((ele, ind) => {
                        return (
                            <div className="eventCard" onClick={() => window.location.href = `../eachEvent/${department}/${ele.eventName}`}>
                                <div className="eventcontet" style={ind % 2 == 0 ? { flexDirection: "row-reverse", background: "linear-gradient(264.28deg,#5c27fe 0.2%,#dec7ff 103.12%)" } : { flexDirection: "row", background: "linear-gradient(264.28deg,#dec7ff -98.2%,#5c27fe 103.12%)" }}>
                                    <div className="eventData">
                                        <span>{ele.eventName}</span>

                                        <div className="data">
                                            <div className="data1">

                                                <MdOutline1kPlus className="registrations" />
                                                <h6>Users</h6>
                                                <p>Registered</p>
                                            </div>

                                            <div className="data1">
                                                <FaIndianRupeeSign className="rupees" />
                                                <h6>{ele.registrationFee}</h6>
                                                <p>Ruppess</p>
                                            </div>

                                            <div className="data1">
                                                {
                                                    ele.maxTeamSize === 1 ? <FaUser className="single" /> : <FaUserGroup className="group" />
                                                }
                                                <h6>{ele.maxTeamSize}</h6>
                                                <p>Participation</p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="dummy"></div>
                                </div>
                                <div className={
                                    ind % 2 == 0 ? "eventImage1" : "eventImage"}>
                                    
                                </div>
                                <div className={ind % 2 == 0 ? "eventImage1" : "eventImage"}>
                                <div class="myWrapper">
                                <img src={"../pic.png"}  className="cover-image"/>
                                </div>
                                {/* <img src="https://ggayane
                                .github.io/css-experiments/cards/dark_rider-title.png" class="title" /> */}
                                <img src={ "../pic.png"} class="character" />
                                <button className="title" style={{ display: "flex" }}>
                                    <span aria-hidden="true" className="circle">
                                        <span className="icon arrow"></span>
                                    </span>
                                    <span className="button-text">Click Here</span>
                                </button>

                            </div>

                            </div>
                        )
                    })}

                </div>
                <Footer />
            </div> : <div className='d-flex justify-content-center w-100'><ThreeDots
                  visible={true}
                  height="120"
                  width="120"
                  color="white"
                  radius="9"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  /></div> }
            

        </>
    )
}

export default EventsPage;