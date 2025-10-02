import React, { useEffect } from "react";
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { useState } from "react";


import myStyles from './styl.module.css';
import MySelectComponent from "./sample";
import MySelectComponentTWO from "./sample2";
import MySelectComponentTHREE from "./sample3";



const TopData = ({ selectUsers }) => {

    useEffect(() => {
        const ourText = new SplitType('span.our_text', { types: 'chars' });
        const chars = ourText.chars;

        gsap.fromTo(
            chars,
            {
                y: 20,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.05,
                duration: 0.5,
                ease: 'power4.out',
            }
        );
    }, []); // The empty array ensures this runs only once, after the component mounts


    const [selectedValue, setSelectedValue] = useState(null);
const handleSelectChange = (selectedOption) => {
        setSelectedValue(selectedOption);
        selectUsers(selectedOption.value); // Send the value to the next component via props
    };


    return (
        <>
            <div className={myStyles.lufy_container}>
                <div className={myStyles.lufy_top}>
                    <div className={myStyles.lufy_top_left}>
                        <span className="our_text">Department : </span>
                        <MySelectComponent />
                    </div>
                    <div className={myStyles.lufy_top_right}>
                        <span className="our_text">Event : </span>
                        <MySelectComponentTWO />
                    </div>
                </div>
                <div className={myStyles.lufy_botm}>
                    <span className="our_text">Team Size :</span>
                    <MySelectComponentTHREE 
                        selectedOption={selectedValue} 
                        onSelectChange={handleSelectChange} 
                    />
                </div>
            </div>
        </>
    );
}

export default TopData;