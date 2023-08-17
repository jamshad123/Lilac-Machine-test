import React from 'react'
import Card from '../Components/Card'
import { data1 } from '../data'
import { data2 } from '../data'
import { data3 } from '../data'
import {AiTwotoneSave} from 'react-icons/ai'
import {RxCross2} from 'react-icons/rx'
import CourseCreation from '../Components/CourseCreation'
import Additionalinfo from '../Components/Additionalinfo'

const Home = () => {
   
    return (
        <div className='w-full h-[96vh] overflow-auto'>
            <div className='bg-[#f4f4f5] w-[70%] mx-auto h-[52vh] mt-10 flex items-center  gap-4 justify-center'>
                <Card data={data1} />
                <Card data={data2} />
                <Card data={data3} />
            </div>

            <div className=' w-[66%] h-20 mx-auto mt-4 border-b flex  flex-col justify-center '>
                    <div className='flex justify-between'>
                        <div className='flex gap-2 items-center'><p className='text-xl font-semibold'>Course Creation</p> <span className='px-3 p-1 bg-[#f3f4f6] text-[#9ca3af] rounded-3xl text-xs'> step 2 to 4</span></div>
                        <div className='flex gap-2'>
                            <div className=' flex gap-1 rounded px-3 p-2 text-white bg-[#1e40af]'><span><AiTwotoneSave/></span><p className='text-xs font-semibold '>Save As Draft</p></div>
                           <div className='p-2 rounded-full  bg-[#f3f4f6] flex text-slate-400 items-center justify-center'> <span className=''><RxCross2/></span></div>
                           
                        </div>
                    </div>
            </div>

            <CourseCreation/>
            <Additionalinfo/>
            

        </div>
    )
}

export default Home
Home