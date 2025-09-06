import React from 'react'
import './NavBar.css'
import notification_icon from '../../assets/icons/bell-solid-full.svg'


function NavBar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Brand / Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold">MyBrand</a>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900"><img src={notification_icon} className='icons'/></a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Admin</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
