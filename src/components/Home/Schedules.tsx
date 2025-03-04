import rama from '../../assets/Vector.svg';

export default function Schedules() {

    return(
        <section className="flex flex-col items-center justify-center py-10 mx-auto w-full">
            <img src={rama} alt="rama" className="size-28 my-8 " loading='lazy'/>
            <h2 className="text-3xl  font-medium text-center">Martes a Sábado</h2>
            <p className="text-center md:text-xl lg:text-2xl">9:00am - 1:30 pm</p>
            <p className="text-center md:text-xl lg:text-2xl">5:00pm - 9:00pm</p>	
            <h2 className="text-3xl  font-medium text-center mt-4">Domingos</h2>
            <p className="text-center md:text-xl lg:text-2xl">5:00pm - 9:00pm</p>
        </section>
    )
}