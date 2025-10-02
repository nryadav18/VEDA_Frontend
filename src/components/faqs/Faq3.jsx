import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Accordion } from 'react-bootstrap'; // Adjust this import based on the actual library you're using
import './Faq3.css';
import img from '../../assets/images/logo/au.png';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

Faq3.propTypes = {
    data: PropTypes.array.isRequired,
};

function Faq3(props) {
    const { data } = props;

    const [dataBlock] = useState({
        subheading: 'FAQs',
        heading: 'Frequently Asked Questions',
        desc: 'Below is a list of frequently asked questions and answers from partners and 3D artists. Please check this FAQ first before contacting us.',
    });

    const [dataTab] = useState([
        { id: 1, title: 'Event Details' },
        { id: 2, title: 'Registration' },
        { id: 3, title: 'Miscellaneous' },
        { id: 4, title: 'Follow Up' },
    ]);

    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabSelect = (index) => {
        setSelectedTab(index);
    };

    const filteredData = data.filter(item => item.categoryId === selectedTab + 1);

    return (
        <section className="faq s3">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-md-12">
                        <div className="block-text">
                            <h6 className="sub-heading"><span>{dataBlock.subheading}</span></h6>
                            <h3 className="heading">{dataBlock.heading}</h3>
                            <p>{dataBlock.desc}</p>
                        </div>
                        <div className="faq__main flat-tabs">
                            <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect}>
                                <TabList className='menu-tab'>
                                    {dataTab.map(tab => (
                                        <Tab className='fs-14 h6' key={tab.id}>{tab.title}</Tab>
                                    ))}
                                </TabList>
                                {dataTab.map(tab => (
                                    <TabPanel key={tab.id} className='content-tab'>
                                        <div className="content-inner">
                                            <div className="flat-accordion">
                                                {selectedTab === tab.id - 1 && filteredData.slice(0, 4).map(item => (
                                                    <Accordion key={item.id} className='flat-toggle h6'>
                                                        <Accordion.Item eventKey={item.id.toString()}>
                                                            <Accordion.Header>{item.title}</Accordion.Header>
                                                            <Accordion.Body className='accordion-content'>{item.text}</Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                                ))}
                                            </div>
                                        </div>
                                    </TabPanel>
                                ))}
                            </Tabs>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12">
                        <div className="image1" data-aos="fade-left" data-aos-duration="2000">
                            <img src={img} alt="veda'24" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Faq3;
