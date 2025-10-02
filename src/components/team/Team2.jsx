import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import data1 from '../../assets/fake-data/dataTeam';
import data2 from '../../assets/fake-data/dataTeam2';
import line from '../../assets/images/background/line-2.png';
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

Team2.propTypes = {
    data: PropTypes.array
};

function Team2() {

    return (
        <section className="team s2">
            <div className="shape right"></div>
            <img src={line} alt="" className="img-line" />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="block-text center">
                            <h4 className="heading wow" data-splitting>VEDA Organizing Committee 2024</h4>
                        </div>
                    </div>

                    {data1.map(idx => (
                        <div key={idx.id} className="col-xl-3 col-md-4 col-sm-5 col-9" id='cardParent1'>
                            <div className="team-box">
                                <div className="image">
                                    <Link to="/veda2024/orgcom">
                                        <img src={idx.img} alt="Cyfonii" />
                                    </Link>

                                    {/* <ul className="list-social">
                                        <li>
                                            <Link to="#">
                                                <FaLinkedin className="icon-linkedin" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#">
                                                <FaEnvelope className="icon-email" />
                                            </Link>
                                        </li>
                                    </ul> */}
                                </div>
                                <div className="content">
                                    <Link to="" className="h5 name">{idx.name}</Link>
                                    <p className="position">
                                        {idx.position}
                                    </p>
                                    <p className="phone">
                                        {idx.phone}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="shape right"></div>
            <img src={line} alt="" className="img-line" />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="block-text center">
                            <h6 className="sub-heading"><span>VEDA Staff Co-Ordinators 2024</span></h6>
                        </div>
                    </div>

                    {data2.map(idx => (
                        <div key={idx.id} className="col-xl-3 col-md-4 col-sm-5 col-9">
                            <div className="team-box">
                                <div className="image">
                                    <Link to="/veda2024/orgcom">
                                        <img src={idx.img} alt="Cyfonii" />
                                    </Link>
                                </div>
                                <div className="content">
                                    <Link to="/team" className="h5 name">{idx.name}</Link>
                                    <p className="position">
                                        {idx.position}
                                    </p>
                                    <p className="phone">
                                        {idx.phone}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Team2;