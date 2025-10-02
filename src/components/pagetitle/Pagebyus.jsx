import React from 'react';
import PropTypes from 'prop-types';
import mystyles from '../css/cssbyus.module.css'

PageTitle.propTypes = {
    
};

function PageTitle(props) {
    const {title} = props
    return (
        <section  id={mystyles.mypage}>
      
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className={mystyles.pagetitlebody}>
                        <div className={mystyles.pagetitlemain} id={mystyles.mytitle}> 
                            <div className={mystyles.title1}>{title}</div>
    
                            
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default PageTitle;
