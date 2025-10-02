import React , {useState} from 'react';
    import PropTypes from 'prop-types';
    import "swiper/css";
    import "swiper/css/effect-coverflow";
    import "swiper/css/pagination";

    Banner2.propTypes = {
        data: PropTypes.array
    };

    function Banner2(props) {

        const [dataBlock] = useState(
            {
                subheading: 'We are Monteno NFT',
                heading: 'Most Popular Collections',
                desc:'Cyfonii is the premier marketplace for nifties, which are digital items you can truly own for yourself'
            }
        )
        return (
                    <section className="banner s2">
                        <div className="shape"></div>
                        <div className="shape right"></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="block-text center">
                                        <h6 className="sub-heading"><span>{dataBlock.subheading}</span></h6>
                                        
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
        );
    }

    export default Banner2;