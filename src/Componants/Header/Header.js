import React from 'react';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';


const Header = () => {
    return (
        <Nav defaultActiveKey="/home" className='bg-black bg-gradient px-4 py-4 '>

    <NavLink className='text-white fw-bold text-decoration-none p-3'  to="/home">Home</NavLink>
 

    <NavLink className='text-white fw-bold text-decoration-none p-3'  to="/About">About</NavLink>
 

    <NavLink className='text-white fw-bold text-decoration-none p-3'  to="/Services">Services</NavLink>


    <NavLink className='text-white fw-bold text-decoration-none p-3'  to="/AlumniNews">AlumniNews</NavLink>

</Nav>
    );
};

export default Header;