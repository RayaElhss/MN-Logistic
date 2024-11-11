import React from 'react';
import Navbar from './Navbar'; // Import your existing Navbar component
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <>
            <Navbar />
            <Outlet /> {/* This will render the specific page content (e.g., Home, Contact) */}
        </>
    );
}
