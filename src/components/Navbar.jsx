import { ShoppingCart } from 'lucide-react'
import React from 'react'

const Navbar = () => {

    const links = ['Copyrights','All books','About us','Submit a book']

  return (
    <header className='shadow-md rounded-md px-20 py-5 mx-auto flex justify-between items-center'>
        <h2 className='text-xl font-medium text-neutral-700'>BooksHere</h2>
        <nav className='flex gap-5 font-medium text-sm'>
            {links.map((link,idx)=>(
                <a className='hover:scale-105 duration-500 ' href={`/${link}`} key={idx}>{link}</a>
            ))}
        </nav>
        <div>
            <span>
                <ShoppingCart/>
            </span>
        </div>
    </header>
  )
}

export default Navbar