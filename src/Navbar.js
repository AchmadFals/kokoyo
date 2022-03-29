import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className='navbar bg-hippie-blue-500 flex'>
        <h3 className='logo text-3xl'>Logo</h3>
        <ul className='nav-links flex justify-end list-none w-5'>
            <Link to="/dasboard" className='dashboard no-underline slate-50 text-sm p-2.5 m-2.5 cursor-pointer'>
                <li>Dashboard</li>
            </Link>
            <Link to="/manajemen_user" className='manajemen_user no-underline slate-50 text-sm p-2.5 m-2.5 cursor-pointer'>
                <li>Manajemen User</li>
            </Link>
            <Link to="/paket_laundry" className='paket_laundry no-underline slate-50 text-sm p-2.5 m-2.5 cursor-pointer'>
                <li>Paket Laundry</li>
            </Link>
            <Link to="/tipe_pembayaran" className='tipe_pembayaran no-underline slate-50 text-sm p-2.5 m-2.5 cursor-pointer'>
                <li>Tipe Pembayaran</li>
            </Link>
            <Link to="/transaksi" className='transaksino-underline slate-50 text-sm p-2.5 m-2.5 cursor-pointer'>
                <li>Transaksi</li>
            </Link>
            <Link to="/register" className='laporan no-underline slate-50 text-sm p-2.5 m-2.5 cursor-pointer'>
                <li>Sign Up</li>
            </Link>
        </ul>
    </nav>
  )
}

export default Navbar;