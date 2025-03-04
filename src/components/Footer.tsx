import { Link } from "react-router-dom"
import rama from "../assets/Vector.svg"
import {Icon} from "@iconify/react"

export default function Footer() {
    return (
        <footer className="bg-secondary py-4 mt-20">
            <div className="mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-8 px-4">
                <div className="flex flex-col md:flex-row items-center gap-4 mt-4 md:mt-0">
                    <img src={rama} alt="Logo" className="size-12 md:size-9" loading='lazy'/>
                    <h3 className="text-2xl">COFFE SHOP</h3>
                </div>
                <div className="flex flex-col gap-4 list-none text-center md:hidden text-xl">
                    <Link to="/">
                        Inicio
                    </Link>
                    <Link to="/menu">
                        Menú
                    </Link>
                    <Link to="/gallery">
                        Galería
                    </Link>
                </div>
                <div className="flex items-center gap-4">
                    <Icon icon="fa-brands:facebook" className="size-8 text-tertiary cursor-pointer" />
                    <Icon icon="fa-brands:instagram" className="size-8 text-tertiary cursor-pointer" />
                    <Icon icon="basil:gmail-solid" className="size-9 text-tertiary cursor-pointer" />
                </div>
            </div>
        </footer>
    )
}