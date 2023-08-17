import React from 'react'
import { BsFileEarmarkTextFill } from 'react-icons/bs'
import {FaFileContract,FaTrophy} from 'react-icons/fa'
import {FaMoneyBill1} from 'react-icons/fa6'


const CourseCreation = () => {
    return (
        <div className='w-[50%] mx-auto  h-24 mt-6 flex flex-col justify-center'>
            <hr className='w-[90%] mx-auto' />
            <div className='w-[100%] flex justify-between  -mt-8'>
                <div className='flex gap-1 flex-col items-center'>
                    <div className='p-4 bg-[#dcfce7] text-[#16a34a] rounded-full flex  '><span><BsFileEarmarkTextFill size={25} /></span></div>
                    <div className='text-xs font-semibold text-[#4ade80]'>Basic Information</div>
                </div>
                <div className='flex gap-1 flex-col items-center'>
                    <div className='p-4 bg-[#ede9fe] text-[#4338ca] rounded-full flex  '><span><FaFileContract size={25} /></span></div>
                    <div className='text-xs font-semibold text-[#6366f1]'>Additional Information</div>
                </div>
                <div className='flex gap-1 flex-col items-center'>
                    <div className='p-4 bg-[#f1f5f9] text-[#64748b] rounded-full flex  '><span><FaTrophy size={25} /></span></div>
                    <div className='text-xs font-semibold text-[#94a3b8]'>Eligibility & Syllabus</div>
                </div>
                <div className='flex gap-1 flex-col items-center'>
                    <div className='p-4 bg-[#f1f5f9] text-[#64748b] rounded-full flex  '><span><FaMoneyBill1 size={25} /></span></div>
                    <div className='text-xs font-semibold text-[#94a3b8]'>Fee & Scholarship</div>
                </div>

                
            </div>
        </div>
    )
}

export default CourseCreation
