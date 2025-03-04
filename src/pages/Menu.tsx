import Schedules from "../components/Home/Schedules";
import Card from "../components/Menu/Card";
import logo from "../assets/coffee-logo.svg";
import {cafeMenu, drinksMenu, saltyFootMenu, infusionsMenu1, infusionsMenu2} from "../utility/dataMenu";
import MenuPrice from "../components/Menu/MenuPrice";


export default function Menu() {
    return (
        <main className="flex-1 flex flex-col items-center justify-center gap-4 mt-6">
            <h1 className="text-4xl font-medium ">Menú</h1>
            <Card >
                <div className="flex flex-col items-center justify-center ">
                    <img src={logo} alt="logo" className="size-44 "/>
                    <h2 className="text-4xl font-medium text-center pb-8">COFFEE SHOP</h2>
                </div>
            </Card>
            <Card title="CAFÉ ">
                <MenuPrice list={cafeMenu}/>
            </Card>
            <Card title="BEBIDAS" >
                <MenuPrice list={drinksMenu}/>
            </Card>
            <Card title="Infusiones " subtitle="(o té de bolsita)" >
                <div className="flex flex-col items-start w-full gap-4">
                    {infusionsMenu1.map((item, index) => (
                        <p key={index} className="text-xl font-medium">{item}</p>
                    ))}
                </div>
                <div className="flex flex-col items-end w-full ">
                    <div className="flex flex-col items-start  gap-4">
                        {infusionsMenu2.map((item, index) => (
                            <p key={index} className="text-xl font-medium">{item}</p>
                        ))}
                    </div>
                    
                </div>
            </Card>
            <Card title="Alimento salados" >
                <MenuPrice list={saltyFootMenu}/>
            </Card>
            <Card>
                <Schedules/>
            </Card>
        </main>
    )
}