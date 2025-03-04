
interface ButtonMenuProps {
    className?: string;
}

export default function ButtonMenu({ className }: ButtonMenuProps) {

    return(
        <button className={`relative ${className} border-2 px-6 py-2 rounded-full font-medium`}>	
            Ver menú
        </button>
    )
}