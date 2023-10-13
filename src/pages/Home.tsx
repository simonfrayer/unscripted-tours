import Facts from "../containers/Facts";
import Hero from "../containers/Hero"
import VirtualTour from "../containers/VirtualTour";
import Collaboration from "../containers/Collaboration";
import Footer from "../navigators/Footer";

function Home() {
    return (
    <>
        <Hero/>
        <VirtualTour />
        <Facts />
        <Collaboration />
        <Footer />
    </>
        )
}

export default Home;