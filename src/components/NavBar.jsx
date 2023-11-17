import { NavLink } from "react-router-dom"

export default function NavBar({fullName}){
  return(
  <nav>
  <ul className='nav nav-tabs'>
    <li className="nav-item">
    <NavLink to='/' className='nav-link active'>
      Home
    </NavLink>
    </li>
    <li className="nav-item">
    <NavLink to='/login' className='nav-link active'>
      Login
    </NavLink>
    </li>
    <li className="nav-item">
    <NavLink to='/contact' className='nav-link active'>
      Contact
    </NavLink>
    </li>
    {fullName &&
    <>
    <li className="nav-item">
      <NavLink to='/profile' className='nav-link'>
        {fullName}
      </NavLink>
    </li>
    <li className="nav-item">
      <button className='nav-link' >
        Logout
      </button>
    </li>
    </>
    }
  </ul>
</nav>
  )
}