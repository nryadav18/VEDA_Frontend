import React, { useState, useEffect } from "react";
import myStyles from './styl.module.css';

const FfForm = ({ onInputChange, formIndex, ItsOwnData }) => {
    const [formData, setFormData] = useState({
        name: '',
        rollNo: '',
        college: '',
        otherCollege: '',
        mobile: '',
        email: '',
        gender: '',
        year: '',
        accommodation: ''
    });
    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        const newValue = type === 'checkbox' ? checked : value;

        setFormData(prevState => {
            const updatedFormData = { ...prevState, [name]: newValue };
            onInputChange(updatedFormData, formIndex);
            return updatedFormData;
        });
    };

    return (
        <>
            <form className="row g-3 needs-validation" style={{ minHeight: '500px' }} noValidate>
                <div className="col-md-12">
                    <label htmlFor="validationCustom01" className="form-label">NAME</label>
                    <input type="text" className="form-control" id="validationCustom01" name="name" value={formData.name} onChange={handleChange}  required />
                    <div className="valid-feedback">Looks good!</div>
                    <div className="invalid-feedback">Please Enter Name.</div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom02" className="form-label">ROLL NO</label>
                    <input type="text" className="form-control" id="validationCustom02" name="rollNo" value={formData.rollNo} onChange={handleChange} required />
                    <div className="valid-feedback">Noted!</div>
                    <div className="invalid-feedback">Your Roll No. Dude</div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom04" className="form-label">College</label>
                    <select className="form-select" id="validationCustom04" name="college" value={formData.college} onChange={handleChange} required>
                        <option selected disabled value="">Choose...</option>
                        <option value="Aditya University">Aditya University</option>
                        <option value="Aditya College of Engineering and Technology">Aditya College of Engineering and Technology</option>
                        <option value="other">Other</option>
                    </select>
                    <div className="invalid-feedback">Please select a College.</div>
                    <div className="valid-feedback">Ok Ok!</div>
                </div>
                {formData.college === "other" && (
                    <div className="col-md-12">
                        <label htmlFor="validationCustom06" className="form-label">Enter Your College Name</label>
                        <input type="text" className="form-control" id="validationCustom06" name="otherCollege" value={formData.otherCollege} onChange={handleChange} required />
                        <div className="invalid-feedback">Please provide a valid College Name.</div>
                        <div className="valid-feedback">Nice Choice!</div>
                    </div>
                )}
                <div className="col-md-6">
                    <label htmlFor="validationCustom03" className="form-label">MOBILE</label>
                    <input type="number" className="form-control" id="validationCustom03" name="mobile" value={formData.mobile} onChange={handleChange} required />
                    <div className="invalid-feedback">Please provide a valid Mobile Number.</div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="validationCustom05" className="form-label">EMAIL</label>
                    <input type="text" className="form-control" id="validationCustom05" name="email" value={formData.email} onChange={handleChange} required />
                    <div className="invalid-feedback">Please Enter a Valid Email.</div>
                    <div className="valid-feedback">Nice!</div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustom04" className="form-label">GENDER</label>
                    <select className="form-select" id="validationCustom04" name="gender" value={formData.gender} onChange={handleChange} required>
                        <option selected disabled value="">Choose...</option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select>
                    <div className="invalid-feedback">Please Provide Your Gender.</div>
                    <div className="valid-feedback">👍</div>
                </div>

                <div className="col-md-3">
                    <label htmlFor="validationCustom04" className="form-label">YEAR</label>
                    <select className="form-select" id="validationCustom04" name="year" value={formData.year} onChange={handleChange} required>
                        <option selected disabled value="">Choose...</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <div className="invalid-feedback">Please Enter Your Current Year.</div>
                    <div className="valid-feedback">Super!</div>
                </div>
                <div className="col-md-4">
                    <label htmlFor="validationCustom04" className="form-label">ACCOMODATION</label>
                    <select className="form-select" id="validationCustom04" name="accommodation" value={formData.accommodation} onChange={handleChange} required>
                        <option selected disabled value="">Choose...</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                    <div className="invalid-feedback">Please Select An Option.</div>
                    <div className="valid-feedback">Ok!</div>
                </div>
                
                
            </form>
        </>
    );
};

export default FfForm;