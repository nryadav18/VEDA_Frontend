import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import coordinator from "./cordinatorsvg.svg";
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import PageTitle from '../pagetitle/Pagebyus';

Roadmap2_dummy.propTypes = {
    data: PropTypes.array
};

function Roadmap2_dummy(props) {
    const [validUrls, setValidUrls] = useState([]);
    const { data } = props;
    const divisions = ['ACET', 'AEC', 'ACOE'];

    useEffect(() => {
        const checkImage = (division, EmpId, callback) => {
            const img = new Image();
            const url = `https://info.aec.edu.in/${division}/employeephotos/${EmpId}.jpg`;

            img.onload = () => {
                callback(url); // Valid URL found
            };

            img.onerror = () => {
                callback(null); // Invalid URL, move to next
            };

            img.src = url;
        };

        const findValidUrl = (idx, EmpId, callback) => {
            const attemptDivision = (divisionIndex) => {
                if (divisionIndex >= divisions.length) {
                    callback(coordinator); // Fallback to default image if none are valid
                    return;
                }

                checkImage(divisions[divisionIndex], EmpId, (url) => {
                    if (url) {
                        callback(url);
                    } else {
                        attemptDivision(divisionIndex + 1);
                    }
                });
            };

            attemptDivision(0);
        };

        const updateValidUrls = async () => {
            const urls = await Promise.all(data.map((item, idx) => 
                new Promise((resolve) => {
                    if (item?.EmpId) {
                        findValidUrl(idx, item.EmpId.trim(), resolve);
                    } else {
                        resolve(coordinator); // Use default image if no EmpId
                    }
                })
            ));

            setValidUrls(urls);
        };

        updateValidUrls();
    }, [data]);

    return (
        <section className="roadmap s2">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="roadmap__main s1">
                            <Swiper
                                spaceBetween={30}
                                breakpoints={{
                                    0: { slidesPerView: 1 },
                                    500: { slidesPerView: 2 },
                                    768: { slidesPerView: 3 },
                                    991: { slidesPerView: 3 },
                                }}
                                className="roadmap-swiper"
                                loop={true}
                                modules={[Autoplay, Pagination, Navigation]}
                                autoplay={{
                                    delay: 1500,
                                    disableOnInteraction: false,
                                }}
                            >
                                {
                                    data.map((item, idx) => (
                                        <SwiperSlide key={item?.id || idx}>
                                            <div className="roadmap-box" style={{
                                                display: 'flex', alignItems: 'center', justifyContent: 'start', flexDirection: 'column', wordSpacing: '5px', height: '100%', width: '100%', margin: '10 0', padding: '20px !important'
                                            }}>
                                                <center>
                                                    <div className='faculty_img'>
                                                        <img src={validUrls[idx]} alt={item?.EmpId ?? "Cord"} width={"120px"} height={"120px"} style={{
                                                            borderRadius: '50%', justifySelf: 'center', objectFit: 'cover', margin: '0 0'
                                                        }} />
                                                    </div>
                                                </center>
                                                <div className="content" style={{ marginTop: '10px' }}>
                                                    <center><h6 className="name">{item?.Name ?? "Guest"}</h6></center>
                                                    <p className="phone">Phone: {item?.Mobile ?? "+91xxxxxx"}</p>
                                                    <p className="college">College: {item?.College ?? "xyz"}</p>
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
    );
}

export default Roadmap2_dummy;
