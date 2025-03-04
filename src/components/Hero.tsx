import cafeteria from '../assets/cafeteria.webp'
import ButtonMenu from './ButtonMenu'

export default function Hero() {
  return (
    <div 
        style = {{backgroundImage: `url(${cafeteria})`}}
        className="relative bg-cover bg-center h-80  flex flex-col justify-center items-center gap-4 my-14 shadow-lg"
    >
        <div className="absolute w-full inset-0 bg-black/60"></div>
        <h1 className="relative text-3xl font-medium text-white">COFFEE SHOP</h1>
        <ButtonMenu className='border-white text-white'/>
    </div>
  )
}