import './eachEventDetails.css';
import { Link, NavLink } from 'react-router-dom';
import PageTitle from "../components/pagetitle/Pagebyus";
import Roadmap2_dummy from "../components/roadmap/Roadmap2_dummy";
import Roadmap2 from "../components/roadmap/Roadmap2";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ThreeDots } from 'react-loader-spinner'



import Footer from "../components/footer/Footer";

export default function EachEvent() {

    const { department,eventName } = useParams();
    console.log(eventName,department)
    const [Loader, setLoader] = useState(false)
    const [eventData, seteventData] = useState([]);
    const BaseUrl = process.env.REACT_APP_BASEURL;
    const [facultyData, setfacultyData] = useState([]);
    const [studentData, setstudentData] = useState([]);
    useEffect(() => {
        (async () => {
            setLoader(true)
            await axios.get(BaseUrl + "/get-event-by-name" +"/"+ department+'/' + eventName)
                .then(res => {
                    seteventData(res.data[0]);
                    console.log(res.data)
                    setLoader(false)
                })
                .catch(err =>{
                    console.log(err)
                    setLoader(false)
        })
        })();
        (async () => {
            setLoader(true)
            console.log(BaseUrl + "/api/get-faculty-cordinate-by-event-dept" +"/"+ department+'/' + eventName)
            await axios.get(BaseUrl + "/api/get-faculty-cordinate-by-event-dept" +"/"+ department+'/' + eventName)
                .then(res => {
                    var ar = [];
                    res.data.map(ele => {
                        ar.push({
                            College: ele.cordinatorCollege,
                            Email : ele.cordinatorEmail,
                            EmpId:ele.cordinatorId,
                            Image:BaseUrl+'/public/Faculty_Images/'+ele.cordinatorImage,
                            Name:ele.cordinatorName,
                            Mobile:ele.cordinatorPhone
                        })
                    })
                    setfacultyData(ar)
                    setLoader(false)
                })
                .catch(err =>{
                    console.log(err)
                    setLoader(false)
        })
        })();
        // /api/get-student-cordinate-by-event-dep
        (async () => {
            setLoader(true)
            await axios.get(BaseUrl + "/api/get-student-cordinate-by-event-dept" +"/"+ department+'/' + eventName)
                .then(res => {
                    var ar = [];
                    console.log("student",res.data)
                    res.data.map(ele => {
                        ar.push({
                            College: ele.studentCordinatorCollege,
                            Email : ele.studentCordinatorEmail,
                            EmpId:ele.studentCordinatorId,
                            Image:'https://info.aec.edu.in/adityacentral/studentphotos/'+ele.studentCordinatorId+'.jpg',
                            Name:ele.studentCordinatorName,
                            Mobile:ele.studentCordinatorPhone
                        })
                    })
                    setstudentData(ar)
                    setLoader(false)
                })
                .catch(err =>{
                    console.log(err)
                    setLoader(false)
        })
        })();

    }, []);

    return (
        <>
            <div className="infoParent">
                {!Loader ? <><div className="infoContent">
                    <PageTitle title={eventData.eventName} />

                    <div className="mainContent">
                        <div className="overview myHeading">OVERVIEW :</div>
                        <div className="overviewContent innerText">
                            {eventData.eventOverview}
                        </div>

                        <div className="rules myHeading">Rules :</div>
                        <div className="rulesContent innerText">
                            <ul>
                                {eventData?.rulesAndRegulations?.map((item, index) => (
                                    <li style={{ listStyleType: 'circle',marginLeft:"20px" }} key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="registration myHeading">Registration Fees :</div>
                        <div className="registrationContent innerText">
                            Registration fee is Rs {eventData.registrationFee}/- per team
                        </div>

                        {/* <div className="otherConditionss myHeading">Other Conditions :</div> */}
                        {/* <div className="otherConditionsContent innerText"> */}
                            {/* Lorem ipsissimos fuga, adipisci praesentium? Possimus eveniet at excepturi eos doloremque? Lorem ipsissimos fuga, adipisci praesentium? Possimus eveniet at excepturi eos doloremque? Lorem ipsissimos fuga, adipisci praesentium? Possimus eveniet at excepturi eos doloremque? */}
                        {/* </div> */}

                        <div className="venue myHeading">VENUE :</div>
                        <div className="venueContent innerText">
                            <p>{eventData.eventVenue}</p>
                            {/* <div className="register-button">register</div>  */}
                            {department === 'IT_&_MCA' ? ((eventName === 'Technical Treasure Hunt' || eventName === 'WEB DESIGN') ? "" : <div className="register-button"><Link to={`/veda2024/Register/${department}/${eventName}`} className="action-btn"><span>Register</span></Link></div>) :  (department === "EEE" ? (eventName === "Poster Presentation" ? "" : <div className="register-button"><Link to={`/veda2024/Register/${department}/${eventName}`} className="action-btn"><span>Register</span></Link></div>) :
                             <div className="register-button"><Link to={`/veda2024/Register/${department}/${eventName}`} className="action-btn"><span>Register</span></Link></div>)}
                            {/*  <div className="register-button"><Link to={`/veda2024/Register/${department}/${eventName}`} className="action-btn"><span>Register</span></Link></div> */}

                        </div>
                    </div>
                </div>

                <div className="faculty-info">
                    <PageTitle title="Faculty Coordinators" />
                    <Roadmap2_dummy data={facultyData} />
                </div>

                <div className="myDataTable">
                    {/* <center><h4 className="student-coordinators" style={{margin:'30px 0px'}}>STUDENT COORDINATORS</h4></center>  */}
                    <PageTitle title="Student Coordinators" />
                    <Roadmap2 data_student={studentData} />

                    {/* <DataTable
                    columns={columns}
                    data={data}
                    customStyles={customStyles}
                /> */}
                </div></>:<div className='d-flex justify-content-center w-100'><ThreeDots
                  visible={true}
                  height="120"
                  width="120"
                  color="white"
                  radius="9"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  /></div>}
            </div>
            <Footer />

        </>
    );
}