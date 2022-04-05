import React from 'react';
import Navbar from '../Navbar';

const Manajemen_user = () => {
  return  <div>
            <Navbar/>
              <div className='content text-center m-20'>
                <h3 className='text-black pull-left'>Manajemen User</h3>
              </div>
                <div className=''>
                  <div className='border-cyan-500 text-cyan-500'>
                  <h3 className='text-sm uppercase font-semibold my-0'>Data Karyawan</h3>
                </div>
              </div>
              <div>
                <p className='bg-slate-400 border-solid border-2 border-cyan-400'>
                  Tambah Karyawan
                </p>
                <br />
              </div>
          </div>
};

export default Manajemen_user;