// import { BiBorderAll } from "react-icons/bi";

export const data = [
    { sno: 1, name: 'John Doe', college: 'Harvard University', phone: '123-456-7890' },
    { sno: 2, name: 'Jane Smith', college: 'Stanford University', phone: '234-567-8901' },
    { sno: 3, name: 'Alice Johnson', college: 'MIT', phone: '345-678-9012' },
    { sno: 4, name: 'Bob Brown', college: 'University of California', phone: '456-789-0123' },
    { sno: 5, name: 'Charlie Davis', college: 'Yale University', phone: '567-890-1234' },
];

export const columns = [
    {
        name: 'S.No',
        selector: row => row.sno,
        sortable: false,
    },
    {
        name: 'Name',
        selector: row => row.name,
        sortable: false,
    },
    {
        name: 'College',
        selector: row => row.college,
        sortable: false,
    },
    {
        name: 'Phone No',
        selector: row => row.phone,
        sortable: false,
    },
];
export const customStyles = {
    headRows: {
        style: {
          background: 'radial-gradient(circle, rgb(41, 35, 91) 0%, rgba(7, 10, 41, 1) 60%)',
          backgroundColor: 'rgb(55,46,120)',
          
          
        },
      },
      rows: {
        style: {
          background: 'radial-gradient(circle, rgb(41, 35, 91) 0%, rgba(7, 10, 41, 1) 60%)',
          backgroundColor: 'rgb(55,46,120)',
          minHeight: '50px',
          color: 'rgb(41, 35, 91)',
          borderBottom: '1px solid white',
        },
      },
      headCells: {
        style: {
          fontFamily: 'Readex Pro',

          fontSize: '16px',
          fontWeight: 'bold',
          color: 'white',
          backgroundColor: '#161540',
          border: '1px solid #ccc',

        },
      },
      cells: {
        style: {
          border: 'solid white',
          fontSize: '1rem',
          color: 'white',
          border: '1px solid #ccc',
        },
      },
};
