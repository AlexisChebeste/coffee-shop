import rama from "../assets/Vector.svg"
import {Icon} from "@iconify/react"

export default function Footer() {
    return (
        <footer className="bg-secondary py-4 mt-20">
            <div className="mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-8 px-4">
                <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
                    <img src={rama} alt="Logo" className="size-12 md:size-9" />
                    <h3 className="text-2xl">COFFE SHOP</h3>
                </div>
                <ul className="flex flex-col gap-4 list-none text-center md:hidden text-xl">
                    <li>
                        <a href="#inicio">
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a href="#about">
                            Sobre nosotros
                        </a>
                    </li>
                    <li>
                        <a href="#galery">
                            Galería
                        </a>
                    </li>
                    <li>
                        <a href="#events">
                            Eventos
                        </a>
                    </li>
                </ul>
                <div className="flex items-center gap-4">
                    <Icon icon="fa-brands:facebook" className="size-8 text-tertiary cursor-pointer" />
                    <Icon icon="fa-brands:instagram" className="size-8 text-tertiary cursor-pointer" />
                    <Icon icon="basil:gmail-solid" className="size-9 text-tertiary cursor-pointer" />
                </div>
            </div>
        </footer>
    )
}