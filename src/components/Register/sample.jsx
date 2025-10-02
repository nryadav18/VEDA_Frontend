import React from 'react';
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'choate', label: 'choate' },
    { value: 'strawrry', label: 'strawrry' },
    { value: 'vanil', label: 'vanil' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'choate', label: 'choate' },
    { value: 'strawrry', label: 'strawrry' }
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
        zIndex:100,
        minWidth: 250,

    }),
    singleValue: (provided) => ({
        ...provided,
        color: 'white',
    }),
    menu: (provided) => ({
        ...provided,
        zIndex:100,
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


class MySelectComponent extends React.Component {
    state = {
        selectedOption: null,
    };

    handleChange = (selectedOption) => {
        this.setState({ selectedOption }, () =>
            console.log(`Option selected:`, this.state.selectedOption)
        );
    };

    render() {
        const { selectedOption } = this.state;

        return (
            <Select
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
                styles={customStyles}
            />
        );
    }
}

export default MySelectComponent;