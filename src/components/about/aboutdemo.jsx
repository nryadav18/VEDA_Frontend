import React,{useEffect} from 'react';
import './about_styles.css';
import PageTitle from '../../components/pagetitle/Pagebyus';
import ved from '../../assets/images/img/vedo_2023.jpeg.jpg';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';
import Responsive from './newabt.jsx';
import "../about/newabt.css";
import Changedabt from "./newone";
import "./chabout.css";
function Aboutd() {
    // useEffect(()=>{
    //     console.log(window.innerWidth)
    //     if(window.innerWidth<=768){
    //         window.location.href="/n"
    //     }
    // },[])
    return (
        <>  
        <div className="about_veda">
        <div className="aboutdivision">
            <div className='AboutUsHeading'>
                <PageTitle title='About Us' />
            </div>
            <div className="main_about_1">
                <Changedabt/>
            </div>
            <div className="main_about_2">
                <Responsive/>
            </div>
            <div className='pakodi'>
            <Footer />
            </div>
        </div>
        </div>
        
        </>
    );
}

export default Aboutd;