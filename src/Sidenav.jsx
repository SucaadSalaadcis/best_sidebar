import React, { useState } from 'react'

import { Toolbar, Typography, Button } from '@mui/material';
import { FaHome, FaUsers, FaProductHunt, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import img from '../src/assets/img/man.jpg'

export default function Sidenav({ children }) {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Toggle sidebar on mobile
    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    // Close sidebar when clicking content (for mobile)
    const closeSidebar = () => {
        if (window.innerWidth < 768) {
            setSidebarOpen(false);
        }
    };
    return (
        <div className='bg-[#f9f9f9]'>

            <div className="flex h-screen">
                {/* Sidebar */}
                <div
                    className={`lg:w-64 w-2/4 bg-[white]  min-h-screen p-4 transition-all fixed lg:relative ${sidebarOpen ? 'block' : 'hidden lg:block'}`}
                    style={{ zIndex: 10 }}
                >
                    <div className="flex items-center mt-20 mb-6">
                        <img src={img} alt="User" className="w-12 h-12 rounded-full" />
                        <div className="ml-3">
                            <h3 className="text-lg">Jane Asad</h3>
                        </div>
                    </div>
                    <ul>
                        <li className="mb-4">
                            <Link to="/" className="flex items-center space-x-3 text-base" onClick={closeSidebar}>
                                <FaHome />
                                <span>Dashboard</span>
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link to="/agents" className="flex items-center space-x-3 text-base" onClick={closeSidebar}>
                                <FaUsers />
                                <span>Agents</span>
                            </Link>
                        </li>
                        <li className="mb-4">
                            <Link to="/products" className="flex items-center space-x-3 text-base" onClick={closeSidebar}>
                                <FaProductHunt />
                                <span>Products</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/logout" className="flex items-center space-x-3 text-base" onClick={closeSidebar}>
                                <FaSignOutAlt />
                                <span>Sign Out</span>
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Main Content Area */}
                <div className="flex flex-col flex-1">
                    {/* AppBar */}
                    <div position="sticky" className="z-20 bg-blue-300 ">
                        <Toolbar className="flex items-center justify-between px-4">
                            <div className="flex items-center">
                                {/* Hamburger Icon for Mobile */}
                                <Button onClick={toggleSidebar} className="text-black lg:hidden">
                                    <span className='flex md:hidden'>
                                        ☰
                                    </span>
                                </Button>
                                <Typography variant="h6" className="hidden ml-4 text-black lg:block">
                                    Commission System
                                </Typography>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Button className="hidden text-black lg:block">EN</Button>
                                <div className="flex items-center space-x-2">
                                    <img src={img} alt="User" className="w-8 h-8 rounded-full" />
                                    <Typography variant="body1" className="hidden text-black lg:block">
                                        Jane Asad
                                    </Typography>
                                </div>
                            </div>
                        </Toolbar>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 p-6 overflow-y-auto" onClick={closeSidebar}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
