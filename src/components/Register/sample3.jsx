import React from 'react';
import Select from 'react-select';

const options = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
];

const customStyles = {
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? '#7B4EFE' : state.isFocused ? '#e9ecef' : '#ffffff',
        color: state.isSelected ? '#ffffff' : '#495057',
        padding: 10,
    }),
    control: (provided) => ({
        ...provided,
        background: 'linear-gradient(89.96deg, rgba(255, 255, 255, 0.05) 0.03%, rgba(255, 255, 255, 0.008) 49.67%, rgba(255, 255, 255, 0.05) 99.96%)',
        backdropFilter: 'blur(2px)',
        borderRadius: '6px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        color: 'white',
        outline: 'none',
        minWidth: 250,
    }),
    singleValue: (provided) => ({
        ...provided,
        color: 'white',
        width: '100%',  
    }),
    menu: (provided) => ({
        ...provided,
        zIndex: 80,
    }),
    menuList: (provided) => ({
        ...provided,
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Optional: set a background color for the dropdown list
    }),
    placeholder: (provided) => ({
        ...provided,
        color: 'rgba(255, 255, 255, 0.7)', // Optional: set a placeholder color
    }),
};

class MySelectComponentTHREE extends React.Component {
    handleChange = (selectedOption) => {
        this.props.onSelectChange(selectedOption);  // Pass selected option to the parent
    };

    render() {
        return (
            <Select
                value={this.props.selectedOption}
                onChange={this.handleChange}
                options={options}
                styles={customStyles}
            />
        );
    }
}

export default MySelectComponentTHREE;