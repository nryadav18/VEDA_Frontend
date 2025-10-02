import React from 'react';
import Footer from '../components/footer/Footer';
import Team2 from '../components/team/Team2';
import dataTeam from '../assets/fake-data/dataTeam';
import HexagonalFlipEffect from './Hexagon';
import first from '../../src/thublogo.jpg'
import second from '../../src/ceo.png'


function Team(props) {
    return (
        <div className='page-team wrapper'>

            <Team2 data={dataTeam} />

            {/* <div className="App">
                <HexagonalFlipEffect
                    initialImage={first}
                    revealImage={second}
                    hexagonSize={100}
                />
            </div> */}
            
            <Footer />
            
        </div>
    );
}

export default Team;