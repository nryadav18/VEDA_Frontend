import React , {useState} from 'react';
import PropTypes from 'prop-types';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import PageTitle from '../pagetitle/Pagebyus';
import coordinator from "./cordinatorsvg.svg"

Roadmap2.propTypes = {
    data: PropTypes.array
};

function Roadmap2(props) {
    const {data_student} = props;

    const [dataBlock] = useState(
        {
            subheading: 'FACULTY',
            heading: 'COORDINATORS',
            
        }
    )

    const dumdata = [0,1,2,3];
    const college = ['AEC' , 'ACET' , 'ACOE'];
    
    return (
        <>
        <section className="roadmap s2">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                {/* <div className="block-text center"> */}
                                {/* </div> */}
                                
                                <div className="roadmap__main s1">
                                <Swiper
               
                                    spaceBetween={30}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                            },
                                        500: {
                                            slidesPerView: 2,
                                            },
                                        768: {
                                            slidesPerView: 3,
                                        },
                                        991: {
                                            slidesPerView: 3,
                                        },
                                    }}
                                    className="roadmap-swiper"
                                    loop= {true}

                                    modules={[Autoplay, Pagination, Navigation]}
				    autoplay={{
                                    	delay: 1500,
                                    	disableOnInteraction: false,
                                    }}

                                    >
                                {
                                dumdata.map(idx => (
                                    <SwiperSlide key={data_student[idx]?.id}>
                                        {console.log(data_student)}
                                    <div className="roadmap-box" style={
                                            {display:'flex',alignItems:'center ',justifyContent:'start',flexDirection:'column',wordSpacing:'5px',height:'100%',width:'100%',margin:'10 0 ',padding:'20px !important'}
                                        }>
                                        <center><div className='faculty_img' >
                                        {/* <img src={ + data.studentCordinatorId + ".jpg"}></img> */}
                                            <img src={data_student[idx]?.EmpId? "https://info.aec.edu.in/adityacentral/studentphotos/"+ data_student[idx]?.EmpId.trim()+ ".jpg"  : coordinator} alt={data_student[idx]?.EmpId ?? "cord"} width={"120px"} height={"120px"} style={
                                                {borderRadius:'50%',justifySelf:'center', objectFit: 'cover',margin:'0 0'}
                                            }/>
                                        </div></center>
                                        <div className="content" style={{marginTop:'10px'}}>
                                        <center><h6 className="name">{data_student[idx]?.Name ?? "Guest "}</h6></center>
                                        <p className="phone">Phone: {data_student[idx]?.Mobile ?? "+91xxxxxxx"}</p>
                                        {/* <p className="college">College: {data_student[idx]?.College.toUpperCase() ?? "xyz"}</p> */}
                                        {/* <p className="mail">Email: {idx.Email}</p> */}
                                         </div>
                                </div>

                                    </SwiperSlide>
                                ))
                                    
                                }
                            </Swiper>


                                    
                                </div>


                            </div>

                        </div>
                    </div>
                </section>
                </>
    );
}

export default Roadmap2;