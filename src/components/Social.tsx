import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

function Social() {
  return (
    <nav className='absolute bottom-0 left-4 z-100'>
      <ul className='flex flex-col gap-0 text-3xl text-black'>
        <li>
          <a
            href='https://github.com/thang241190'
            target='_blank'
            className='p-2 rounded-full hover:bg-black hover:text-white block transition-colors duraion-200'>
            <AiFillGithub />
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/thang-nguyen-914764173/'
            target='_blank'
            className='p-2 rounded-full hover:bg-black hover:text-white block transition-colors duraion-200'>
            <AiFillLinkedin />
          </a>
        </li>
        <li>
          <span className='block w-1 h-24 bg-black mx-auto'></span>
        </li>
      </ul>
    </nav>
  )
}

export default Social
