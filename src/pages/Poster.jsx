import React, { useEffect, useState } from 'react'
import Veda2k24 from '../../src/assets/images/img/veda2024.jpg'
import './Poster.css'
import Confetti from 'react-confetti';

function Poster() {

    const [pieces,setPieces] = useState((window.innerWidth < 700) ? 100 : 200)

    return (
        <div className='myPoster'>
            <Confetti numberOfPieces={pieces} />
            <div className="block-text center">
                <h6 className="sub-heading" style={{fontSize:'25px'}}><span>VEDA 2K24 Poster</span></h6>
            </div>
            <img src={Veda2k24} style={{borderRadius:'30px'}} alt="poster" />
        </div>
    )
}

export default Poster