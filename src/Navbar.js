import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className='fixed top-0 right-0 left-0 navbar bg-hippie-blue-500 flex justify-around items-center h-20 text-white'>
        <h3 className='logo text-3xl text-amber-400'>Logo</h3>
        <ul className='nav-links flex justify-end list-none w-5'>
            <Link to="/dashboard" className='manajemen_user no-underline slate-50 text-base p-2.5 m-2.5 cursor-pointer'>
                <li>Dashboard</li>
            </Link>
            <Link to="/manajemen_user" className='manajemen_user no-underline slate-50 text-base p-2.5 m-2.5 cursor-pointer'>
                <li>Manajemen User</li>
            </Link>
            <Link to="/paket_laundry" className='paket_laundry no-underline slate-50 text-base p-2.5 m-2.5 cursor-pointer'>
                <li>Paket Laundry</li>
            </Link>
            <Link to="/tipe_pembayaran" className='tipe_pembayaran no-underline slate-50 text-base p-2.5 m-2.5 cursor-pointer'>
                <li>Tipe Pembayaran</li>
            </Link>
            <Link to="/transaksi" className='transaksino-underline slate-50 text-base p-2.5 m-2.5 cursor-pointer'>
                <li>Transaksi</li>
            </Link>
            <Link to="/register" className='laporan no-underline slate-50 text-base p-2.5 m-2.5 cursor-pointer'>
                <li className='border-1 px-4 rounded-md border-solid border-purple-600 bg-orange-400'>Sign Up</li>
            </Link>
        </ul>
    </nav>
  )
}

export default Navbar;