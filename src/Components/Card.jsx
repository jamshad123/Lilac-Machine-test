import React from 'react'
import avatar from '../assets/Profile_1.jpg'
import { BsPencilFill } from 'react-icons/bs'
import { FaUserAlt } from 'react-icons/fa'
import { MdCall } from 'react-icons/md'
import { HiMailOpen } from 'react-icons/hi'
import { RiGraduationCapFill } from 'react-icons/ri'
import image1 from '../assets/images.jpeg'



const Card = ({data}) => {
    return (
        <div className=' h-[84%] w-80 bg-white '>
            <div className='flex justify-between w-[93%] mx-auto border-b h-20 items-center'>
                <div className='flex  gap-4 items-center'>
                    <div>
                        {data.showProfile ? <img src={avatar} className='w-12 h-12' alt="" /> : <div className='p-3 bg-[#e2e8f0] rounded-full'><span className='text-slate-400'><FaUserAlt size={30} /></span></div>}

                    </div>
                    <div className='flex flex-col'>
                        <p className='text-sm font-semibold '>{data.name}</p>
                        <p className='text-xs text-slate-400 font-semibold'> {data.address}</p>
                    </div>
                </div>
                {
                    data.status ? <div className='p-2 rounded-full bg-[#c7d2fe]'><span className='text-[#4f46e5]'><BsPencilFill /></span> </div> : <div className='px-3 p-1 rounded-xl bg-[#dcfce7] flex justify-center items-center'><span className='text-[#4ade80] font-bold text-xs'>New</span></div>
                }
            </div>
            <div className='w-[93%]  mx-auto mt-2 flex flex-col justify-evenly h-56 '>
                <div className='text-slate-500 flex gap-3 justify-start items-center'>
                    <span><MdCall size={25} /></span>
                    <p className='font-medium'>{data.phoneNumber}</p>
                </div>
                <div className='flex justify-start gap-3 items-center text-slate-500'>
                    <span><HiMailOpen size={25} /></span>
                    <p className='font-medium'>{data.mail}</p>
                </div>
                <div className='flex justify-start gap-3 items-center text-slate-500'>
                    <span><RiGraduationCapFill size={25} /></span>
                    <p className='font-medium'>{data.education}</p>
                </div>
                <div className='flex  justify-between items-center'>
                    <div className='px-3 p-1 bg-[#ecfeff] rounded-3xl flex items-center'><span className='text-[#22d3ee] font-bold text-xs '> {data.bottemText}</span></div>
                    {
                        data.bottemIcon?<div> <img className='w-8 h-8 rounded-full border-2 border-slate-300' src={image1} alt="" /></div>:<div></div>
                    }
                </div>
            </div>

        </div>
    )
}

export default Card
