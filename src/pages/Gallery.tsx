import galeria1 from '../assets/galery/galeria1.webp';
import galeria2 from '../assets/galery/galeria2.png';
import galeria3 from '../assets/galery/galeria3.png';
import galeria4 from '../assets/galery/galeria4.webp';
import galeria5 from '../assets/galery/galeria5.jpg';
import galeria6 from '../assets/galery/galeria6.jpg';
import galeria7 from '../assets/galery/galeria7.jpg';
import galeria8 from '../assets/galery/galeria8.jpg';
import galeria9 from '../assets/galery/galeria9.jpg';
import galeria10 from '../assets/galery/galeria10.jpg';
import galeria11 from '../assets/galery/galeria11.jpg';

export default function Gallery() {

    return(
        <main className="flex-1 flex flex-col items-center justify-center gap-4 mt-6 ">
            <h1 className="text-4xl font-medium ">Galería</h1>
            <div className="flex-1 max-w-6xl grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 auto-rows-[250px]">
                
                <img src={galeria2} alt="Café" className="w-full h-full object-cover "/>
                <img src={galeria1} alt="Café" className="w-full h-full object-cover md:col-span-2  "/>
                <img src={galeria3} alt="Café" className="w-full h-full object-cover "/>
                <img src={galeria4} alt="Café" className="w-full h-full object-cover lg:col-span-2 "/>
                <img src={galeria7} alt="Café" className="w-full h-full object-cover sm:row-span-2" loading='lazy'/>
                <img src={galeria8} alt="Café" className="w-full h-full object-cover md:row-span-2" loading='lazy'/>
                <img src={galeria5} alt="Café" className="w-full h-full object-cover"/>
                <img src={galeria9} alt="Café" className="w-full h-full object-cover md:row-span-2" loading='lazy'/>
                <img src={galeria10} alt="Café" className="w-full h-full object-cover sm:row-span-2 lg:row-span-1" loading='lazy'/>
                <img src={galeria11} alt="Café" className="w-full h-full object-cover sm:row-span-2 lg:col-span-2" loading='lazy'/>
                <img src={galeria6} alt="Café" className="w-full h-full object-cover md:col-span-2" loading='lazy'/>
            </div>
        </main>
    )
}