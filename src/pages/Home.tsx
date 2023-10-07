import Facts from "../containers/Facts";
import Hero from "../containers/Hero"
import VirtualTour from "../containers/VirtualTour";
import Collaboration from "../containers/Collaboration";

function Home() {
    return (
    <>
        <Hero/>
        <VirtualTour />
        <Facts />
        <Collaboration />
    </>
        )
}

export default Home;