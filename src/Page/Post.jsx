import React from 'react'
import image1 from '../assets/uni.jpg'
import image2 from '../assets/student.jpeg'
import image3 from '../assets/avatar3.png'
import { MdMoreHoriz } from 'react-icons/md'
import { PiArrowBendDownRightBold } from 'react-icons/pi'

const Post = () => {
    const text = 'A university student is an individual enrolled in higher education pursuing a diverse range of academic, personal, and professional growth. This phase of education signifies a transition into specialized fields of study, fostering critical thinking, research skills, and independence.'
    return (
        <div className='w-full h-[96vh] overflow-auto'>
            <div className='w-[60%] mx-auto h-[90rem] bg-slate-100 pt-10 mt-3 '>
                <div className='w-[90%] h-[85rem] mx-auto    bg-white  '>
                    <div className=' w-[95%] mx-auto flex justify-start items-center '>
                        <div> <img src={image1} className='w-16 h-16' alt="" /></div>
                        <div>
                            <p className='text-sm font-semibold'>University of Greenwich</p>
                            <p className='text-xs font-medium'>3 days ago</p>
                        </div>
                    </div>

                    <div className='mt-2 w-[95%] mx-auto text-sm font-medium'>
                        <p>Dear students!</p>
                        <p className='mt-5'>{text}</p>
                        <p className='mt-2'> -This prepares them with practical skills and personal growth for their future careers.</p>
                        <p className=''> - Them with practical skills and personal growth for their future careers.</p>


                    </div>
                    <div className='mt-5'> <img src={image2} className='h-96 w-full' alt="" /></div>
                    <div className='px-3 p-1 w-40 bg-gray-100 flex items-center justify-center ml-8 mt-3 rounded-full'> <span className='text-xs font-semibold text-gray-400'>7 Comments •2 Replies</span></div>
                    <div className='w-[94%] mx-auto'>
                        <div className='mt-4 flex w-[100%] items-start justify-start relative'>
                            <span className='absolute text-gray-400 text-sm left-20 top-2'>Add a comment...</span>
                            <div> <img src={image1} className='w-16 h-16' alt="" /></div>
                            <input type="text" className=' h-28 w-[90%] border' />
                            <span className='absolute text-gray-400 text-xs font-semibold bottom-2 left-20'> Post</span>

                        </div>
                        <p className='text-xs font-semibold text-gray-400 mt-2'>view 5 more comment</p>
                        <div className='mt-3 flex gap-4 w-[100%]'>
                            <div > <img src={image3} className='w-12 h-12 rounded-full' alt="" /></div>
                            <div className='h-16 flex  flex-col justify-around bg-gray-100 rounded-2xl w-[70%]'>
                                <div className='flex justify-between w-[95%] mx-auto' ><p className='text-sm font-semibold text-gray-400'>Roshan Karthik  <span className='text-xs'>• 1 week ago</span></p> <p><MdMoreHoriz className='text-gray-400' size={20} /></p></div>
                                <p className='w-[95%] mx-auto text-xs font-medium text-gray-400'> Hi, I'm a university student struggling with managing my studies. Any tips?</p>
                            </div>
                        </div>
                        <div className='w-[80%] mx-auto mt-2 '>
                            <div className='flex'>
                                <span className='text-gray-400'><PiArrowBendDownRightBold /></span>
                                <span className='text-gray-400 text-xs font-medium'>3 Replies • Reply </span>
                            </div>
                            <div className='mt-3 flex gap-4 w-[100%]'>
                                <div > <img src={image1} className='w-12 h-12 rounded-full' alt="" /></div>
                                <div className='h-16 flex  flex-col justify-evenly bg-gray-100 rounded-2xl w-[45%]'>
                                    <div className='flex justify-between w-[95%] mx-auto' ><p className='text-sm font-semibold text-gray-400'>University of Greenwich  <span className='text-xs'>• 34 min ago</span></p> <p><MdMoreHoriz className='text-gray-400' size={20} /></p></div>
                                    <p className='w-[95%] mx-auto text-xs font-medium text-gray-400'>Of course! Time management is key.</p>
                                </div>
                            </div>
                            <div className='mt-3 flex gap-4 w-[100%]'>
                                <div > <img src={image3} className='w-12 h-12 rounded-full' alt="" /></div>
                                <div className='h-16 flex  flex-col justify-evenly bg-gray-100 rounded-2xl w-[40%]'>
                                    <div className='flex justify-between w-[95%] mx-auto' ><p className='text-sm font-semibold text-gray-400'>Roshan Karthik  <span className='text-xs'>• 1 hr ago</span></p> <p><MdMoreHoriz className='text-gray-400' size={20} /></p></div>
                                    <p className='w-[95%] mx-auto text-xs font-medium text-gray-400'> Hey, I'm a senior majoring in business.</p>
                                </div>
                            </div>

                            <div className='mt-3 flex gap-4 w-[100%]'>
                                <div > <img src={image1} className='w-12 h-12 rounded-full' alt="" /></div>
                                <div className='h-16 flex  flex-col justify-evenly bg-gray-100 rounded-2xl w-[47%]'>
                                    <div className='flex justify-between w-[95%] mx-auto' ><p className='text-sm font-semibold text-gray-400'>University of Greenwich  <span className='text-xs'>• 1 day ago</span></p> <p><MdMoreHoriz className='text-gray-400' size={20} /></p></div>
                                    <p className='w-[95%] mx-auto text-xs font-medium text-gray-400'>  Absolutely. Network with professors</p>
                                </div>
                            </div>
                            <div className='mt-3 flex items-center gap-4 w-[100%] relative'>
                                <div > <img src={image1} className='w-12 h-12 rounded-full' alt="" /></div>
                                <input type="text" className='w-[50%] border h-9 text-xs placeholder-slate-300 px-3 rounded font-semibold' placeholder='Add a reply . . .' />
                                <span className='text-gray-400 text-xs font-bold absolute right-64'>Post</span>
                            </div>


                        </div>
                        <div className='mt-3 flex gap-4 w-[100%]'>
                            <div > <img src={image3} className='w-12 h-12 rounded-full' alt="" /></div>
                            <div className='h-16 flex  flex-col justify-evenly bg-gray-100 rounded-2xl w-[50%]'>
                                <div className='flex justify-between w-[95%] mx-auto' ><p className='text-sm font-semibold text-gray-400'>Roshan Karthik  <span className='text-xs'>• 1 week ago</span></p> <p><MdMoreHoriz className='text-gray-400' size={20} /></p></div>
                                <p className='w-[95%] mx-auto text-xs font-medium text-gray-400'> That makes sense. How do I organize all the information</p>
                            </div>
                        </div>
                        <div className='w-[80%] mx-auto mt-2'>
                            <div className='flex'>
                                <span className='text-gray-400'><PiArrowBendDownRightBold /></span>
                                <span className='text-gray-400 text-xs font-medium'>2 Replies • Reply </span>
                            </div>

                        </div>
                        <span className='text-gray-500 text-xs font-bold'>Add Comment </span>


                    </div>
                </div>

            </div>
        </div>



    )
}

export default Post
