import React, { useState, useEffect } from 'react';
import FfForm from './final_form.jsx';
import myStyles from './styl.module.css';

const Dforms = ({ userId }) => {
    const [currentFormIndex, setCurrentFormIndex] = useState(0);
    const [allFormsData, setAllFormsData] = useState(Array(userId).fill({}));
    const [animationClass, setAnimationClass] = useState('');
    console.log("form data",allFormsData)
    // Use effect to handle changes in userId
    useEffect(() => {
        if (userId < allFormsData.length) {
            setAllFormsData(allFormsData.slice(0, userId)); // Truncate the forms data array
            if (currentFormIndex >= userId) {
                setCurrentFormIndex(0); // Reset the form index if it's out of bounds
            }
        } else if (userId > allFormsData.length) {
            setAllFormsData([...allFormsData, ...Array(userId - allFormsData.length).fill({})]); // Expand the forms data array
        }
    }, [userId, currentFormIndex, allFormsData]);

    const handleInputChange = (formData, index) => {
        const updatedFormsData = [...allFormsData];
        updatedFormsData[index] = formData;
        setAllFormsData(updatedFormsData);
    };

    const handleNext = () => {
        if (currentFormIndex < userId - 1) {
            setAnimationClass(myStyles['zoom-enter']);
            setTimeout(() => {
                setCurrentFormIndex(currentFormIndex + 1);
                setAnimationClass('');
            }, 500);
        }
    };

    const handlePrevious = () => {
        if (currentFormIndex > 0) {
            setAnimationClass(myStyles['zoom-exit']);
            setTimeout(() => {
                setCurrentFormIndex(currentFormIndex - 1);
                setAnimationClass('');
            }, 500);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const forms = document.querySelectorAll('.needs-validation');
    
        let allValid = true;
        let firstInvalidFormIndex = -1;
    
        forms.forEach((form, index) => {
            if (!form.checkValidity()) {
                form.classList.add('was-validated');
                if (firstInvalidFormIndex === -1) {
                    firstInvalidFormIndex = index;
                    allValid = false;
                }
            }
        });
    
        if (allValid) {
            console.log("All forms are valid");
            console.log("Collected Data: ", allFormsData);
            // Handle the actual submission here
        } else {
            setCurrentFormIndex(firstInvalidFormIndex);
            alert(`Form ${firstInvalidFormIndex + 1} has missing or invalid details. Please fill it correctly.`);
        }
    };

    return (
        <>
            <div className={myStyles.garp_form_division}>
                <div className="container-fluid" style={{borderRadius: '20px', padding: '20px', paddingLeft:'20px', paddingRight:'20px'}}>
                    
                    <div className={myStyles.garp_heading_form}>Participant {currentFormIndex + 1} Details</div> {/* Dynamic H1 tag */}

                    <div className={`${myStyles.garp_form_container} ${animationClass}`}>
                        <form onSubmit={handleSubmit}>
                            <FfForm
                                key={currentFormIndex}
                                formIndex={currentFormIndex}
                                onInputChange={handleInputChange}
                                ItsOwnData={allFormsData}
                            />

                            <div className={`d-flex ${currentFormIndex > 0 ? 'justify-content-between' : 'justify-content-end'} mt-3`}>
                                {currentFormIndex > 0 && (
                                    <button
                                        type="button"
                                        className="btn btn-secondary"
                                        onClick={handlePrevious}
                                    >
                                        Previous
                                    </button>
                                )}

                                {currentFormIndex < userId - 1 && (
                                    <button
                                        type="button"
                                        className="btn btn-primary ml-auto"
                                        onClick={handleNext}
                                    >
                                        Next
                                    </button>
                                )}

                                {currentFormIndex === userId - 1 && (
                                    <button
                                        type="submit"
                                        className="btn btn-success ml-auto"
                                    >
                                        Submit
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dforms;