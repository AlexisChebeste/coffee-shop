import coffeInfo from '../../assets/coffee-info.png'
import coffeInfo2 from '../../assets/coffee-info2.png'

export default function Curiosity() {
    return (
        <div className="mb-20 px-4 ">
            {/* Mobile (hasta md) */}
            <div className="flex flex-col items-center text-center max-w-md mx-auto md:hidden">
                <h2 className="text-3xl font-semibold mb-4">¿Sabías que...?</h2>
                <img src={coffeInfo} alt="coffee info" className="w-full max-w-80" />
                <p className="font-medium mt-4">Se cree que el café se remonta al año 8000 d. C. cuando fue descubierto por pastores de cabras en el siglo IX.</p>
                <p className="font-medium mt-4">Se dijo que notaron que sus cabras comían la planta y luego parecía como si estuvieran "bailando".</p>
            </div>

            {/* Tablet (md) */}
            <div className="hidden md:grid grid-cols-2 gap-8 items-center max-w-3xl mx-auto lg:hidden">
                <img src={coffeInfo} alt="coffee info" className="w-full max-w-80 mx-auto" />
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-semibold mb-4">¿Sabías que...?</h2>
                    <p className="font-medium">Se cree que el café se remonta al año 8000 d. C. cuando fue descubierto por pastores de cabras en el siglo IX.</p>
                    <p className="font-medium mt-4">Se dijo que notaron que sus cabras comían la planta y luego parecía como si estuvieran "bailando".</p>
                </div>
            </div>

            {/* Desktop (lg+) */}
            <div className="hidden lg:grid grid-cols-3 gap-8 items-center w-full max-w-6xl   mx-auto">
                <img src={coffeInfo} alt="coffee info" className="w-full  mx-auto" />
                <div className="text-center">
                    <h2 className="text-4xl font-semibold mb-4">¿Sabías que...?</h2>
                    <p className="font-medium">Se cree que el café se remonta al año 8000 d. C. cuando fue descubierto por pastores de cabras en el siglo IX.</p>
                    <p className="font-medium mt-4">Se dijo que notaron que sus cabras comían la planta y luego parecía como si estuvieran "bailando".</p>
                </div>
                <img src={coffeInfo2} alt="coffee info" className="w-full  mx-auto" />
            </div>
        </div>
    )
}