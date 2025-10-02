import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import mystyles from '../css/cssbyus.module.css';
import axios from 'axios';
import { useState } from 'react';
import { ThreeDots } from 'react-loader-spinner'

Projectus.propTypes = {
    data: PropTypes.array
};



function Projectus() {
    const [data , setdata] = useState([]);
    const BaseUrl =  process.env.REACT_APP_BASEURL;
    console.log(BaseUrl)
    const [Loader, setLoader] = useState(false)

    useEffect(() => {

        (async () => {
            setLoader(true)
            await axios.get(BaseUrl+"/api/get-department-data")
            .then(res => {
                setdata(res.data)
                setLoader(false)

            })
            .catch(err =>{
                console.log(err)
                setLoader(false)

        })
        }) ();
        

    },[]);

    return (
        <section className="nft" id={mystyles.nft1}>
            {!Loader ? <div className="container" id={mystyles.newcontainer}> 
                    <div className="row" id={mystyles.newrow}>
                        {
                            data.map(idx => (                             
                                <div key={idx.id} className={mystyles.newcol}>
                                    <Tilt>
                                    <div className="nft-item" id={mystyles.mynft}>                               
                                        <div className="card-media" id={mystyles.card1}>
                                            <Link to="#"><img src={BaseUrl + "/public/Department_Images/" + idx.departmentImage} alt="veda'24" /></Link>
                                        </div>
                                        <div className="card-title">
                                            <Link to="#" className="h5">{idx.departmentTitle}</Link>
                                        </div>
                                        <div className="meta-info">
                                            <div className="author">
                                                <div className="avatar">
                                                    <img src={BaseUrl + "/public/Department_Images/" + idx.departmentLogo} alt="veda'24" />
                                                </div>
                                                <div className="info">
                                                    <span>Organized By</span>
                                                    <Link to="#" className="h6">{idx.departmentName }</Link>
                                                </div>
                                            </div>
                                            <Link to='#' className="wishlist-button heart">
                                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M11.75 4.3125C11.75 2.86292 10.5256 1.6875 9.01533 1.6875C7.88658 1.6875 6.91708 2.34433 6.5 3.28175C6.08292 2.34433 5.11342 1.6875 3.98408 1.6875C2.475 1.6875 1.25 2.86292 1.25 4.3125C1.25 8.52417 6.5 11.3125 6.5 11.3125C6.5 11.3125 11.75 8.52417 11.75 4.3125Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                    
                                                <span className="number-like"> 3432</span></Link>
                                        </div>
                                        <div className="card-bottom style-explode">
                                            <div className="price">
                                                <span className="icon-logo-01"></span>
                                                <div className="price-details">
                                                    <span> Event Count</span>
                                                    <h6>{idx.event}</h6>
                                                </div>
                                            </div>
                                            <div className="button-place-bid">
                                                <Link to={`/veda2024/DepartmentEvent/${idx.departmentName}`} data-toggle="modal" data-target="#popup_bid" className="sc-button"><span>Events</span></Link>
                                            </div>
                                        
                                        </div>
                                        </div>
                                    </Tilt>
                                </div>                              
                            ))
                        }
                    </div>
                </div> : <div className='d-flex justify-content-center w-100'><ThreeDots
                  visible={true}
                  height="120"
                  width="120"
                  color="white"
                  radius="9"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  /></div>}
                
                
            </section>
    );
}

export default Projectus;