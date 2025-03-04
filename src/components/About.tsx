
import mesa from "../assets/mesa.png"
import mostrador from "../assets/mostrador.png"
import ButtonMenu from "./ButtonMenu"

export default function About() {
    return (
        <article className="flex flex-col md:flex-row justify-center items-center  w-full  max-w-6xl  lg:justify-between gap-14 px-4 mx-auto">
            <div className="relative pb-10 z-10">
                <img src={mostrador} alt="mostrador" className="w-60 h-72 mr-30 lg:w-72 lg:h-80" />
                <img src={mesa} alt="mesa"  className="size-44 absolute -right-3 -bottom-2 -z-10 lg:size-52  lg:-bottom-6"/>
            </div>
            <section className="flex flex-col justify-center items-center p-4 gap-5 max-w-96 lg:max-w-lg">
                <p className="text-base">CAFETERIA Y ZONA DE ESTUDIO</p>
                <h2 className="text-3xl lg:text-4xl font-medium text-center">Acerca de nosotros</h2>
                <p className="text-center md:text-xl lg:text-2xl">Somos una cafeteria con mucho amor Ubicados en la calle del cafe #78 Ciudad</p>
                <ButtonMenu />
            </section>
        </article>
    )
}