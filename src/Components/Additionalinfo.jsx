import React from 'react'
import { GrFormAdd } from 'react-icons/gr'
import { MdDelete } from 'react-icons/md'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Additionalinfo = () => {
    const handlePage = useNavigate()
    return (
        <div className='w-[66%] h-[60rem]  mx-auto'>
            <p className='font-bold text-lg'>Additional Information</p>
            <div className='grid grid-cols-2 gap-3 mt-4'>
                <div>
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Admission<span className='text-red-500'> *</span> </label>
                    <select required id="countries" class="bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="US">Bachelor of Arts (B.A.)</option>
                        <option value="CA">Bachelor of Business Administration (B.B.A.)</option>
                        <option value="FR">Bachelor of Computer Science (B.Comp.Sc.)</option>
                        <option value="DE">Bachelor of Engineering (B.Eng.)</option>
                    </select>
                </div>
                <div>
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service<span className='text-red-500'> *</span> </label>
                    <select required id="countries" class="bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="US">Tutoring Services</option>
                        <option value="CA">Online Courses and Workshops</option>
                        <option value="FR">Language Learning</option>
                        <option value="DE">Skill Development Classes</option>
                    </select>
                </div>
                <div className='flex gap-2 items-start flex-col'>
                    <label className='text-sm font-semibold '>Course Affiliation</label>
                    <div className='flex w-[100%]'>
                        <input type="text" className='w-[92%] border text-sm rounded-l px-2 h-10' placeholder='Select course affiliation' />
                        <div className='px-3 py-3  bg-[#e0e7ff]'><span ><GrFormAdd size={16} className='text-[#6366f1]' /></span></div>
                    </div>

                </div>
                <div className='flex  gap-2 items-start flex-col'>
                    <label className='text-sm font-semibold'>Entrance Required</label>
                    <div className='flex w-[100%]'>
                        <input type="text" className='w-[92%] border rounded-l px-2 h-10 text-sm' placeholder='Select entrance' />
                        <div className='px-3 py-3  bg-[#e0e7ff]'><span ><GrFormAdd size={16} className='text-[#6366f1]' /></span></div>
                    </div>

                </div>
                <div className='flex  gap-2 items-start flex-col'>
                    <label className='text-sm font-semibold'>Document Required <span className='text-red-500'>*</span></label>
                    <div className='flex w-[100%]'>
                        <input type="text" className='w-[92%] border rounded-l px-2 h-10 text-sm' placeholder='Select Document' />
                        <div className='px-3 py-3  bg-[#e0e7ff]'><span ><GrFormAdd size={16} className='text-[#6366f1]' /></span></div>
                    </div>

                </div>
                <div className='flex  gap-2 items-start flex-col'>
                    <label className='text-sm font-semibold'>Specialization <span className='text-red-500'>*</span></label>
                    <div className='flex w-[100%]'>
                        <input type="text" className='w-[92%] border rounded-l px-2 h-10 text-sm' placeholder='Select Specialization' />
                        <div className='px-3 py-3  bg-[#e0e7ff]'><span ><GrFormAdd size={16} className='text-[#6366f1]' /></span></div>
                    </div>
                </div>

            </div>
            <hr className='border-dashed mt-9 border' />

            <div className='mt-3'>
                <p className='font-bold'>Intakes</p>
            </div>
            <div className='grid grid-cols-2 mt-6' >
                <div><p className='font-medium'>Intake <span className='text-red-500'>*</span></p></div>
                <div><p className='font-medium'>Duration <span className='text-red-500'>*</span></p></div>

                <div className=' h-32 border w-[100%] bg-[#fafaf9] flex justify-center mt-1'>
                    <div className='flex gap-3 px-2 justify-center items-center w-[100%] '>
                        <div className='p-3 bg-red-100'> <span className='text-red-500'><MdDelete /></span></div>
                        <select required id="countries" class="bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

                            <option value="US">December</option>
                            <option value="CA">January</option>
                            <option value="FR">February</option>
                            <option value="DE">March</option>
                        </select>

                    </div>
                </div>
                <div className=' h-32 w-[100%] border  bg-[#fafaf9] flex flex-col justify-center mt-1'>
                    <div className='w-[100%] flex gap-2 p-2 justify-center'>
                        <input type="text" className='w-[76%] border rounded px-2 h-10 text-sm' placeholder='1 year' />
                        <div className='p-3  bg-[#e0e7ff]'><span ><GrFormAdd size={16} className='text-[#6366f1]' /></span></div>
                        <div className='p-3 bg-red-100'><span className='text-red-500'><MdDelete /></span></div>
                    </div>
                    <div className='w-[100%] flex gap-2 p-2 justify-center '>
                        <input type="text" className='w-[76%] border rounded px-2 h-10 text-sm' placeholder='2 year' />
                        <div className='p-3  bg-[#e0e7ff]'><span ><GrFormAdd size={16} className='text-[#6366f1]' /></span></div>
                        <div className='p-3 bg-red-100'><span className='text-red-500'><MdDelete /></span></div>
                    </div>
                </div>

            </div>
            <div className=' p-2 bg-[#e0e7ff] flex  items-center justify-center w-28 mt-6'><span ><GrFormAdd size={20} className='text-[#6366f1]' /></span><span className='text-sm font-bold'>Add Row</span></div>
            <hr className='border-dashed mt-9 border' />
            <div>
                <div className='flex justify-between items-center'>
                    <p className='font-bold'>Course Tag</p>
                    <div className=' p-2 bg-[#e0e7ff] flex  items-center justify-center w-36 mt-6'><span ><GrFormAdd size={20} className='text-[#6366f1]' /></span><span className='text-sm font-bold'>New Course Tag</span></div>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-3'>
                <div>
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tag</label>
                    <select required id="countries" class="bg-white border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="Ut">Select tag</option>
                        <option value="US">Tutoring Services</option>
                        <option value="CA">Online Courses and Workshops</option>
                        <option value="FR">Language Learning</option>
                        <option value="DE">Skill Development Classes</option>
                    </select>
                </div>
                <div>
                    <div className='flex flex-col w-[100%]  '>
                        <label className='text-sm font-semibold mb-2'>Specialization </label>
                        <div className='flex gap-2'>
                            <input type="text" className='w-[85%] border rounded px-2 h-11 text-sm' placeholder='Enter description' />
                            <div className='p-3 bg-red-100'><span className='text-red-500'><MdDelete /></span></div>
                        </div>
                    </div>

                </div>
            </div>
            <div className=' p-2 bg-[#e0e7ff] flex  items-center justify-center w-28 mt-6'><span ><GrFormAdd size={20} className='text-[#6366f1]' /></span><span className='text-sm font-bold'>Add Row</span></div>
            <hr className='border-dashed mt-9 border' />


            <div className='mt-5 flex justify-end'>
                <div className='flex gap-1'>
                    <div className='px-2 p-1 border  border-[#2563eb] flex gap-1 justify-center items-center text-[#2563eb] cursor-pointer'>  <span><FaArrowLeft /></span><span>Pre</span> </div>
                    <div onClick={()=>handlePage("/post")} className='px-2 p-1  cursor-pointer bg-[#2563eb] flex gap-1 justify-center items-center text-white'><span>Next</span> <span><FaArrowRight /></span> </div>
                </div>
            </div>


        </div>
    )
}

export default Additionalinfo
