import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? "text-gradient font-semibold" : ""}
        >{children}</NavLink>
    );
};

export default ActiveLink;