import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-gray-100">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost normal-case text-xl">eBooking</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/login' >Login</Link></li>
                        <li><Link to='/booking' >Booking</Link></li>
                        <li><Link to='/register'>Register</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;