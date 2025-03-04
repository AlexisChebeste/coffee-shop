import About from "../components/Home/About";
import Curiosity from "../components/Home/Curiosity";
import Favorites from "../components/Home/Favorites";
import Galery from "../components/Home/Galery";
import Hero from "../components/Home/Hero";
import Event from "../components/Home/Event";
import Schedules from "../components/Home/Schedules";


export default function Home() {
    return (
        <main className=" min-h-screen flex flex-col">
            <Hero />
            <About />
            <Favorites />
            <Curiosity />
            <Event />
            <Galery />
            <Schedules />
        </main>
    )
}