import rama from "../assets/Vector.svg"
import {Icon} from "@iconify/react"

export default function Footer() {
    return (
        <footer className="bg-secondary py-4 ">
            <div className="mx-auto max-w-6xl flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <img src={rama} alt="Logo" className="size-9" />
                    <h3 className="text-2xl">COFFE SHOP</h3>
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