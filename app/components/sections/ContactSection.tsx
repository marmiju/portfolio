import { homeData } from '@/public/content/content'
import { Facebook, Github, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { TbBrandLeetcode } from 'react-icons/tb'

const ContactSection = () => {
    return (
        <div id='contact' className=' min-h-screen py-20 px-4 md:px-10 bg-green-50  flex flex-col items-center justify-center'>
            <h3 className='text-4xl pb-6 font-semibold'>Contact Me</h3>
            <p className='text-center max-w-[1200px]'>{`I’m always open to discussing new projects, backend development opportunities, freelance work, or collaboration ideas. If you have a question, a project in mind, or just want to connect, feel free to reach out — I’ll get back to you as soon as possible`}</p>
            <Link href={'https://wa.me/+8801860131470'} className='bg-green-600 text-white flex items-center p-2 my-6 gap-2 rounded' > <FaWhatsapp/> Contact with WhatsApp</Link>
            <div className='flex gap-2 w-full justify-center relative'>
                <p className='w-full md:w-[50%] absolute border border-dashed top-[50%] z-1 border-gray-300'></p>
                <Link className="bg-black/90 w-10 text-white p-2 rounded z-2" href={homeData.socialLinks.github}><Github /></Link>
                <Link className="bg-black/90  w-10 text-white p-2 rounded z-2" href={homeData.socialLinks.leetcode}><TbBrandLeetcode /></Link>
                <Link className="bg-black/90 w-10 text-white p-2 rounded z-2" href={homeData.socialLinks.linkedin}><Linkedin /></Link>
                <Link className="bg-black/90 w-10 text-white p-2 rounded z-2 " href={homeData.socialLinks.facebook}><Facebook /></Link>
            </div>

        </div>
    )
}

export default ContactSection