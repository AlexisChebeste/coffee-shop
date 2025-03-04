import { Link } from "react-router-dom";

interface ButtonMenuProps {
    className?: string;
}

export default function ButtonMenu({ className }: ButtonMenuProps) {

    return(
        <Link to="/menu" className={`relative ${className} border-2 px-6 py-2 rounded-full font-medium`}>	
            Ver menú
        </Link>
    )
}