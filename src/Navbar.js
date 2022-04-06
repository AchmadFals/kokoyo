import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import "./asset/Navbar.css";
import londrii from './asset/londrii.png';

const Navbar = () => {
const url = useLocation()
console.log("url", url)
  return (
    <nav className='fixed top-0 right-0 left-0 navbar bg-hippie-blue-500 flex justify-around items-center h-16 text-white px-10 z-20'>
        <img src={londrii} className="h-12 ml-16"/>
        <ul className='flex-1 md:flex lg:flex hidden justify-end list-none w-5'>
            <Link to="/dashboard" className='manajemen_user no-underline slate-50 text-base p-2.5 m-2.5 cursor-pointer'>
                <li className='relative'>
                    Dashboard
                    {url.pathname === "/dashboard" && (
                        <span className="absolute bottom-[-20px] bg-orange-400 h-[4px]  text-orange-500 left-0 right-0 z-[1]"/>
                    )}
                </li>
            </Link>
            <Link to="/manajemen-user" className='manajemen_user no-underline slate-50 text-base p-2.5 m-2.5 cursor-pointer'>
                <li className='relative'>
                    Manajemen User
                    {url.pathname === "/manajemen-user" && (
                        <span className="absolute bottom-[-20px] bg-orange-400 h-[4px] left-0 right-0 z-[1]"/>
                    )}
                </li>
            </Link>
            <Link to="/paket-laundry" className='paket_laundry no-underline slate-50 text-base p-2.5 m-2.5 cursor-pointer'>
                <li className='relative'>
                    Paket Laundry
                    {url.pathname === "/paket-laundry" && (
                       <span className="absolute bottom-[-20px] bg-orange-400 h-[4px] left-0 right-0 z-[1]"/> 
                    )}
                </li>
            </Link>
            <Link to="/tipe-pembayaran" className='tipe_pembayaran no-underline slate-50 text-base p-2.5 m-2.5 cursor-pointer'>
                <li className='relative'>
                    Tipe Pembayaran
                    {url.pathname === "/tipe-pembayaran" && (
                        <span className="absolute bottom-[-20px] bg-orange-400 h-[4px] left-0 right-0 z-[1]"/>
                    )}
                </li>
            </Link>
            <Link to="/transaksi" className='transaksino-underline slate-50 text-base p-2.5 m-2.5 cursor-pointer'>
                <li className='relative'>
                    Transaksi
                    {url.pathname === "/transaksi" && (
                        <span className="absolute bottom-[-20px] bg-orange-400 h-[4px] left-0 right-0 z-[1]"/>
                    )}
                </li>
            </Link>
            <Link to="/register" className='laporan no-underline slate-50 text-base p-2.5 m-2.5 cursor-pointer'>
                <li className='border-1 px-4 rounded-md border-solid border-purple-600 bg-orange-400'>Sign Up</li>
            </Link>
        </ul>
        <ul className='md:hidden lg:hidden visible'>
            <li>Menu</li>
        </ul>
    </nav>
  )
}

export default Navbar;