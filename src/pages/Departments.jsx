import React from 'react';
import Projectus from '../components/project/Projectus';
import PageTitle from '../components/pagetitle/Pagebyus';
import Footer from '../components/footer/Footer';

function Depart(){
    return(
        <div className='wrapper'>

            <PageTitle title='Departments' />
            <Projectus />
            <Footer />
            
        </div>
        
    )
}
export default Depart;