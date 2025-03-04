import evento1 from '../assets/evento1.png'
import evento2 from '../assets/evento2.png'

export default function Event() {

    return(
        <section className=" flex flex-col items-center justify-center">
            <div className="relative h-16 w-60 flex items-center justify-center z-20">
                <h2 className="text-3xl font-medium ">Eventos</h2>
                <div className="absolute bottom-0 left-0 bg-secondary w-full h-8 -z-10"></div>
            </div>
            <article className="flex flex-col md:flex-row-reverse justify-center items-center  w-full  max-w-6xl  lg:justify-between gap-14 px-4 mx-auto py-12 lg:py-20">
                <div className="relative pb-10 z-10">
                    <img src={evento1} alt="evento 1" className="w-60 h-72 ml-10 lg:ml-30 lg:w-72 lg:h-80" />
                    <img src={evento2} alt="evento 2"  className="size-44 absolute -left-3 -bottom-2 -z-10 lg:size-52  lg:-bottom-6"/>
                </div>
                <section className="flex flex-col justify-center items-center p-4 gap-5 max-w-96 lg:max-w-lg">
                    <h2 className="text-3xl lg:text-4xl font-medium text-center">Nuestros eventos</h2>
                    <div>
                        <p className="text-center md:text-xl lg:text-2xl">
                            Tenemos diversos eventos los fines de semana en nuestras instalaciones 
                        </p>
                        <p className="text-center md:text-xl lg:text-2xl">
                            Ven a pasar un buen rato con tus amigos y con tu familia
                        </p>
                    </div>
                    
                </section>
            </article>
        </section>
    )
}