import React from 'react';
import './App.css';

import { IoIosWifi } from 'react-icons/io';
import { TiTick } from 'react-icons/ti';

import img1 from "./photo.jpg"
import DataPoint from './DataPoint';
import Extra from './Extra';
function App() {

  return (
    <div className="">
      <div className="relative">
        <img src="https://c1.wallpaperflare.com/preview/660/238/363/stonehenge-panorama-clouds-england-thumbnail.jpg" alt="Background" className="block w-full h-[250px]" />
        <img src={img1} alt="Overlapping" className="absolute h-[140px] w-[130px] lg:h-[180px] lg:w-[170px] -bottom-1/2 rounded-full left-4" />
      </div>
      <div className='flex flex-col mt-2 lg:w-full'>
        <div className='flex pl-10 ml-12 float-right lg:w-1/4 lg:mt-3 lg:justify-center '>
          <p className='font-bold ml-20'>Anuj Gosalia</p>
          <div className='flex p-1'>
            <p className='ml-1 bg-purple-700 p-1 rounded-full text-white'><IoIosWifi className='h-[13px] w-[13px]' /></p>
            <p className='ml-1 bg-green-500 text-black p-1 rounded-full'><TiTick className='h-[13px] w-[13px]' /></p>
          </div>
        </div>
        <div className='flex flex-row-reverse mr-20  lg:ml-12 lg:px-14 lg:mr-0  lg:w-1/3 lg:justify-center pr-7'>
          <span className='flex flex-col'>
            <p className='p-2 px-3 rounded-lg m-2 border-2 text-gray-500 border-gray-500'>245</p>
            <p className='text-gray-500'>followers</p>
          </span>
          
          <span className='flex flex-col'>
            <p className='p-2 px-3 rounded-lg m-2 border-2 text-gray-500 border-gray-500'>6482</p>
            <pc className='text-gray-500'>followers</pc>
          </span>
        </div>
      </div>
      <DataPoint/>
      <Extra/>
    </div>
  );
}

export default App;