import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <h1 className='m-4 font-semibold text-center'>React MySQL</h1>

        <ul className='space-y-4'>
            <li>
                <Link to="/" className='p-2 bg-slate-200 mx-2'>Home</Link>
            </li>
            <li>
                <Link to="/new" className='p-2 bg-slate-200'>Create Task</Link>
            </li>
        </ul>

    </div>
  )
}

export default NavBar