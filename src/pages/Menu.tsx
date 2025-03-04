import Schedules from "../components/Home/Schedules";
import Card from "../components/Menu/Card";
import logo from "../assets/coffee-logo.svg";
import {cafeMenu, drinksMenu, saltyFootMenu} from "../utility/dataMenu";
import MenuPrice from "../components/Menu/MenuPrice";
import InfusionsMenu from "../components/Menu/InfusionsMenu";


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
                <InfusionsMenu />
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