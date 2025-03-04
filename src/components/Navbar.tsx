import { useState } from 'react'
import coffeLogo from '../assets/coffee-logo.svg'

export default function Navbar() {
    
    const [active, setActive] = useState<string>("Inicio")
    const navs = ['Inicio', 'Menú', 'Galería']
    
    return(
        <header className='flex flex-col items-center justify-center '>
        <img 
          src={coffeLogo} 
          alt="coffee logo" 
          className="size-18 my-4"
        />
        <nav className="relative flex justify-center gap-16 border-y-2 w-full md:text-lg font-medium py-3 ">
          {navs.map((item) => (
            <div key={item} className="relative ">
              <a
                href="#"
                onClick={() => setActive(item)}
                className={`px-2 ${active === item ? "font-bold border-b-2 border-b-stone-700" : ""} `}
              >
                {item}
              </a>
            </div>
          ))}
        </nav>
      </header>
    )
}