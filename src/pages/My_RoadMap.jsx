import React from 'react';
import dataRoadMap from '../assets/fake-data/Roadmap_Data';
import Roadmap from '../components/roadmap/Roadmap';

function My_Roadmap(props) {
    return (
        <div className='page-roadmap wrapper'>
            <Roadmap  data={dataRoadMap} />
        </div>
    );
}

export default My_Roadmap;