import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <div>
      <h3>This is Header</h3>
      <nav>
        <Link to="/" className='p-2'>Home</Link>
        <Link to="/laptops" className='p-2'>Laptops</Link>
        <Link to="/mobiles" className='p-2'>Mobiles</Link>
      </nav>
    </div>
  )
}

export default Header
