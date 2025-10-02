import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import data from './myTeamData.js';
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import './myTeam.css'
import GroupPic from '../../../src/assets/images/img/GroupPic.jpg'
import Footer from '../footer/Footer.jsx';

function MyTeam() {

    return (
        <>
            <div className="main_team">
                <div className="group_pic">
                    <p className='para1'>We are <span className='para11' style={{color:'#71BD1F'}}>T</span><span className='para11' style={{color:'#FFBB00'}}>H</span>e <span className='para11'>CREATORS!</span></p>
                    <img src={GroupPic} alt="" className='VedaTeam' />
                </div>
                <div className="ind_pic">
                    <p className='para2'>VEDA DEVELOPER COMMUNITY</p>
                    <div className="mapdiv">
                        {
                            data.map((val,ind)=>{
                                return <div key={ind} className="cardMainR">
                                    <img src={val.img} alt="" />
                                    <a href={val.linkedin} style={{color:'white'}}>
                                        <div className="linkedin">
                                            <FaLinkedin/>
                                        </div>
                                    </a>
                                    <a href={val.email} style={{color:'white'}}>
                                        <div className="email">
                                            <FaEnvelope/>
                                        </div>
                                    </a>
                                    <p className='vdtname'>{val.name}</p>
                                    <p className='vdtpos'>{val.position}</p>
                                </div>
                            })
                        }
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    );
}

export default MyTeam;