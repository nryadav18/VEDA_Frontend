import React, {useEffect,useState }from 'react';
import { gsap } from "gsap";
import './My_Page.css'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Confetti from 'react-confetti';

gsap.registerPlugin(ScrollTrigger);

function Page404(props) {

    const[Shadow, setShadow] = useState(true);
    const [fsize, setFsize] = useState(window.innerWidth < 700 ? (window.innerWidth < 360 ? '60px' : '80px') : '120px');

    // useEffect(() => {
    //     if(window.innerWidth < 700){
    //         console.log('dsdds')
    //         setFsize('70px');
    //     }
    // },[])

    useEffect(() => {
        const t1 = gsap.timeline({
            duration:0.2,
        })
        t1.fromTo(".V", 
            {fontSize:"0px",y:-200 },
            { fontSize:fsize,ease: "bounce.out",
                y: 0 } 
        );
        t1.fromTo(".E", 
            {fontSize:"0px",y:-200 },
            { fontSize:fsize,ease: "bounce.out",
                y: 0 } 
            );
            t1.fromTo(".D", 
            {fontSize:"0px",y:-200 },
            { fontSize:fsize,ease: "bounce.out",
                y: 0 } 
            );
            t1.fromTo(".A", 
            {fontSize:"0px",y:-200 },
            { fontSize:fsize,ease: "bounce.out",
                y: 0 }  
            );
            t1.fromTo(".coma", 
            {fontSize:"0px",y:-200 },
            { fontSize:fsize,ease: "bounce.out",
                y: 0 ,onComplete: () => {
                    setShadow(true)
            }}  
            );
            t1.fromTo(".number", 
            {fontSize:"0px",y:-200 },
            { fontSize:fsize,ease: "bounce.out",
                y: 0 } 
            ); 
            gsap.to(".Parent",{
                scrollTrigger:{
                trigger : ".Parent",
                markers: false,
                start:"top 0%",
                end:"top -100%",
                scrub:3,
                pin:true,
            },
            scale:4,
            opacity:0
            })
    },[fsize])

    console.log(fsize);


    return (
        <>
       
            <Confetti />
        <div className={Shadow ? 'Parent Shadow' : 'Parent Shadow Shadow1'}>
            <div className='V'>V </div>
            <div className='E'>E </div>
            <div className='D'>D </div>
            <div className='A'>A </div>
            <div className='coma'>' </div>
            <div className='number'>2K24</div>
        </div>
        </>
    );
}

export default Page404;