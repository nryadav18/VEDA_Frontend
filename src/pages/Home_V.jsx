import React from 'react';
import My_Page from './My_Page';
import dataCard from '../assets/fake-data/data-card';
import Banner_V from '../components/banner/Banner_V';
import My_Roadmap from './My_RoadMap';
import Footer from '../components/footer/Footer';

function Home_V(props) {
    

    return (
        <div className='home-2 wrapper'>
                <My_Page />
                <My_Roadmap />
                <Banner_V data={dataCard} />
                <Footer />
        </div>
    );
}

export default Home_V;