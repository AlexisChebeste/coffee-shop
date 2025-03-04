import { useEffect, useState } from 'react';
import icedCoffee from '../assets/favorite/iced-coffee.png';
import panini from '../assets/favorite/panini.png';
import sandwich from '../assets/favorite/sandwich.png';

const images = [
    { src: icedCoffee, text: "Iced coffee milk" },
    { src: panini, text: "Panini de jamón" },
    { src: sandwich, text: "Sandwich de jamón" },
  ];

export default function Favorites() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    return(
        <div className="relative py-16 flex flex-col justify-center items-center gap-6 ">
            <h2 className="text-3xl font-medium text-center">Los favoritos</h2>
            <div className='relative w-full justify-center flex items-center gap-6 z-50 '>
                {/* Carrusel en pantallas pequeñas */}
                <div className="relative w-50% overflow-hidden lg:hidden ">
                    <img
                    src={images[currentIndex].src}
                    alt="Carousel"
                    className="w-80 h-64 object-cover rounded-xs"
                    />
                    {/* Botones de navegación */}
                    <div className="flex justify-center mt-2 space-x-2">
                    {images.map((_, index) => (
                        <button
                        key={index}
                        className={`w-3 h-3 rounded-full ${
                            currentIndex === index ? "bg-black" : "bg-gray-400"
                        }`}
                        onClick={() => setCurrentIndex(index)}
                        />
                    ))}
                    </div>
                    <p className="text-center my-4">{images[currentIndex].text}</p>
                    
                </div>
                {/* Galería en pantallas grandes */}
                <div className="hidden lg:flex justify-between w-full max-w-6xl px-4">
                    {images.map((image, index) => (
                    <div key={index} className="">
                        <img
                        src={image.src}
                        alt="Gallery"
                        className="w-80 h-72 object-cover rounded-xs"
                        />
                        <p className="text-center my-4 text-xl">{image.text}</p>
                    </div>
                    ))}
                </div>
                <div className='absolute bottom-0  h-40 w-full bg-secondary -z-10'></div>
            </div>
        </div>
    )
}