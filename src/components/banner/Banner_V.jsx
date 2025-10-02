import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Autoplay, Pagination, Navigation } from "swiper";

Banner_V.propTypes = {
    data: PropTypes.array
};

function Banner_V(props) {
    const { data } = props;
    return (
        <section className="banner s2">
            <div className="shape"></div>
            <div className="shape right"></div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Swiper
                            effect={"coverflow"}
                            grabCursor={true}
                            centeredSlides={true}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                500: {
                                    slidesPerView: 2,
                                },
                                700: {
                                    slidesPerView: 3,
                                },
                            }}
                            coverflowEffect={{
                                rotate: 30,
                                stretch: 15,
                                depth: 320,
                                modifier: 1,
                                slideShadows: false,
                            }}
                            loop={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                            className="bannerSwiper"
                        >
                            {data.map(idx => (
                                <SwiperSlide key={idx.id}>
                                    <div className="card-box">
                                        <div className="top d-flex">
                                            <div>
                                                <h6>{idx.title}</h6>
                                                <h6 className="price">{idx.price}</h6>
                                            </div>
                                        </div>
                                        <div className="content">
                                            <div className="image">
                                                <img src={idx.img} alt="veda'24" />
                                            </div>
                                            <div className="info d-flex">
                                                <div>
                                                    <h6 className="name">{idx.name}</h6>
                                                    <p>{idx.tag}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner_V;