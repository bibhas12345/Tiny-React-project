import React from 'react'
import { AiOutlineLike } from 'react-icons/ai'
export default function Extra() {
    return (
        <>
        <h3 className='font-bold mt-8 mb-6 lg:p-2 lg:ml-3 flex justify-start items-start ml-3 text-blue-400'>134 Posts</h3>
            <div className='lg:flex'>
                
                <div className='p-3 w-full lg:shadow-sm lg:shadow-gray-500'>
                    <div className='flex space-x-20 justify-between'>
                        <p className='text-2xl ml-2 font-bold'>A Changing World order</p>
                        <p className='ml-14 mt-2 bg-yellow-500 text-white rounded-full p-1'><AiOutlineLike /></p>
                    </div>
                    <p className='p-5 flex justify-start'>
                        The world is Changing at a feverish pace. Friends, colleagues and everyone
                        engages in knowledge work are beginning to sense this, including....
                    </p>
                    <div className='flex mt-3 mb-5 justify-between lg:w-full lg:px-2 ml-7 lg:ml-0 w-[380px]'>
                        <p className='font-thin'><span className='text-blue-400'>musing</span> by anujgosalia</p>
                        <p>August 2 . 2 mins Read . 102 views</p>
                    </div>
                </div>
                <hr></hr>
                <div className='p-3 w-full lg:shadow-sm lg:shadow-gray-500'>
                    <div className='flex space-x-20 justify-between'>
                        <p className='text-2xl ml-2 mr-12 font-bold'>Indian v/s Australia</p>
                        <p className='ml-14 mt-2 bg-yellow-500 text-white rounded-full p-1'><AiOutlineLike /></p>
                    </div>
                    <p className='p-5 flex justify-start'>
                        Think about iy-this cricket series was akin to therapy.
                        Laying our childhood trauma up top, working with it slowly and surely over two m....
                    </p>
                    <div className='flex mt-3 mb-5 justify-between lg:w-full ml-7 lg:ml-0 w-[380px]'>
                        <p className='font-thin'><span className='text-blue-400'>thought</span> by anujgosalia</p>
                        <p>January 21 . 1 mins Read . 156 views</p>
                    </div>
                </div>
                <hr></hr>
                <div className='p-3 w-full lg:shadow-sm lg:shadow-gray-500'>
                    <div className='flex space-x-20 justify-between'>
                        <p className='text-2xl ml-2  font-bold mr-1'>Write To Build</p>
                        <p className='ml-16 mt-2 bg-yellow-500 text-white rounded-full  p-1'><AiOutlineLike /></p>
                    </div>
                    <p className='p-5 flex justify-start'>
                    Writing is the first step to create.<br/>
                    -stories<br/>
                    -products<br/>
                    -companies
                    </p>
                    <div className='flex mt-3 mb-5 justify-between lg:w-full ml-7 lg:ml-0  w-[380px]'>
                        <p className='font-thin'><span className='text-blue-400'>musing</span> by anujgosalia</p>
                        <p>November 18 . 1 mins Read . 228 views</p>
                    </div>
                </div>
                <hr></hr>
            </div>
        </>
    )
}
