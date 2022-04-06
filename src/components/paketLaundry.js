import React from 'react';
import Navbar from '../Navbar';

const paketLaundry = () => {
  return  <div> 
            <Navbar/>
            <div className='container'>
              <div className='row'>
                <div className='col-sm-12'>
                  <ol>
                    <li>
                      <a href='#'>Dashboard</a>
                    </li>
                    <li className='active'>
                      Paket Laundry
                    </li>
                  </ol>
                  <h4>
                    Paket Laundry
                  </h4>
                </div>
              </div>
              <div className='rounded border-none mb-5 bg-cyan-400  '>
                <div className='border-t-4 rounded-sm px-5 pt-2.5 pb-0'>
                  <h3 className='text-inherit'>
                    Data Paket Laundry
                  </h3>
                </div>
                <div className='px-5 '>
                  <p className='text-left'>
                    <a href='#'>Tambah Paket Laundry</a>
                  </p>
                  <div className='row'>
                    <div className='col-sm-6'>
                      <div>
                        <label>
                          show
                          <select>
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                          </select>
                        </label>
                      </div>
                    </div>
                    <div className='col-sm-6'>
                      <di>
                        <label>Search</label>
                      </di>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
};

export default paketLaundry;