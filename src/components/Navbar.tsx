
import coffeLogo from '../assets/coffee-logo.svg'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    
    
    return(
      <header className='flex flex-col items-center justify-center ' id='inicio'>
        <img 
          src={coffeLogo} 
          alt="coffee logo" 
          className="size-18 my-4"
        />
        <nav className="relative flex justify-center gap-16 border-y-2 w-full md:text-lg font-medium py-3 ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-2 font-bold border-b-2 ${isActive ? 'border-b-stone-700' : 'border-b-transparent'}`
                }
              >
                Inicio
              </NavLink>
              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  `px-2 font-bold border-b-2 ${isActive ? 'border-b-stone-700' : 'border-b-transparent'}`
                }
              >
                Menú
              </NavLink>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  `px-2 font-bold border-b-2 ${isActive ? 'border-b-stone-700' : 'border-b-transparent'}`
                }
              >
                Galería
              </NavLink>
        </nav>
      </header>
    )
}