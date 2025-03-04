interface CardProps {
    children: React.ReactNode;
    title?: string;
    subtitle?: string;
    className?: string;
}

export default function Card({children,title, className, subtitle}: CardProps) {

    return(
        <section className={`bg-menu shadow-md max-w-6xl mx-auto w-full p-8 ${className}`} >
            <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center gap-7">
                <h2 className="text-4xl font-medium text-center ">{title}</h2>
                <h2 className="text-4xl font-medium text-center -mt-4 ">{subtitle}</h2>
                {children}
            </div>
        </section>
    )
}