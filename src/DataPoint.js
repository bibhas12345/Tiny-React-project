import React from 'react'
import data from './data.json';
import { AiOutlineStar,AiOutlineLike,AiOutlineEye,AiOutlineHeart } from 'react-icons/ai';


export default function DataPoint() {
    return (
        <div>
            <div className='mt-8 lg:w-1/3 ml-7 lg:justify-center'>
                <p className='mr-16'>Co-founder & CEO at Terribly Tiny Tales</p>
                <a className='text-blue-500 mr-10 pr-9' href='https://www.instagram.com/anujgosalia'>http://www.instagram/anujgosalia</a>
            </div>
            <div className="mt-3 flex ml-2 px-7 ">
                {data.map((item, index) => (
                    <div key={index} className="bg-white flex lg:ml-5">
                        {item.icon1 === "AiOutlineStar" && <AiOutlineStar className="bg-emerald-500 p-1 h-[23px] w-[23px] rounded-full text-white mt-2"/>}
                        <p className="mt-2 ml-2 font-bold text-gray-700">{item.number1}</p>
                        {item.icon2 === "AiOutlineLike" && <AiOutlineLike className="bg-amber-500 p-1 h-[23px] w-[23px] rounded-full text-white mt-2"/>}
                        <p className="mt-2 ml-1 font-bold text-gray-700">{item.number2}</p>
                        {item.icon3 === "AiOutlineEye" && <AiOutlineEye className="bg-zinc-500 p-1 h-[23px] w-[23px] rounded-full text-white mt-2"/>}
                        <p className="mt-2 ml-2 font-bold text-gray-700">{item.number3}</p>
                        {item.icon4 === "AiOutlineHeart" && <AiOutlineHeart className="bg-pink-800 p-1 h-[23px] w-[23px] rounded-full text-white mt-2"/>}
                        <p className="mt-2 ml-2 font-bold text-gray-700">{item.number4}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}