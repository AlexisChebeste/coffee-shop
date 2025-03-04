import galery1 from '../../assets/galery/galeria1.webp'
import galery2 from '../../assets/galery/galeria2.png'
import galery3 from '../../assets/galery/galeria3.png'
import galery4 from '../../assets/galery/galeria4.webp'

export default function Galery() {

    return(
        <section className="max-w-6xl mx-auto px-4 py-8" id='galery'>
            <h2 className="text-3xl  font-medium  text-center">Galería</h2>
            <div className="grid md:grid-cols-3 md:grid-rows-2 gap-4 mt-8  md:max-h-[800px]">
                <div className='col-span-2 w-full h-full'>
                    <img src={galery1} alt="galeria 1" className='w-full h-full object-cover'/>
                </div>
                <div className='md:col-span-1 w-full h-full'>
                    <img src={galery2} alt="galeria 2" className='w-full h-full object-cover'/>
                </div>
                <div className='md:col-span-1 w-full h-full'>
                    <img src={galery3} alt="galeria 3" className='w-full h-full object-cover'/>
                </div>
                <div className='col-span-2 w-full h-full'>
                    <img src={galery4} alt="galeria 4" className='w-full h-full object-cover'/>
                </div>

            </div>
        </section>
    )
}