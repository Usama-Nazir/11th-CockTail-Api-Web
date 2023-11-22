import React from 'react'

function Navbar() {
  return (
    <>
    <nav className='bg-gray-500 flex justify-between items-center p-5 text-white'>
    <div className="text-3xl">
        CockTail Hub
    </div>
    <div className="w-36">
        <ul className='list-none flex justify-between'>
            <li>Home</li>
            <li>About</li>
        </ul>
    </div>
    </nav>
    </>
  )
}

export default Navbar
