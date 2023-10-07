import Container from "../components/Container";
import ContainerBackgroundImage from "../assets/container-1.jpg";
import FactsCard from "../components/FactsCard";
import VillaOutlinedIcon from '@mui/icons-material/VillaOutlined';
import MuseumOutlinedIcon from '@mui/icons-material/MuseumOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const Facts = () => {
    return (
        <>
            <Container backgorundImage={ContainerBackgroundImage} title="Why Virtual Tour?" titlePosition="start">
                <FactsCard 
                text={"Transforming house hunting, 3D virtual tours offer a lifelike exploration of properties, allowing buyers to tour homes remotely before scheduling visits."} 
                Icon={VillaOutlinedIcon} 
                />
                <FactsCard 
                text={"Bridging distances, 3D virtual tours bring museums and historical sites to global audiences, preserving cultural heritage through immersive online experiences."} 
                Icon={MuseumOutlinedIcon} 
                />
                <FactsCard 
                text={"Revolutionizing learning, 3D virtual tours take students on virtual field trips, enabling exploration of everything from historical landmarks to microscopic details in anatomy."} 
                Icon={SchoolOutlinedIcon} 
                />
                <FactsCard 
                text={"Redefining online shopping, businesses leverage 3D virtual tours to create interactive storefronts, allowing customers to explore products and make informed decisions from the comfort of their screens."} 
                Icon={ShoppingBagOutlinedIcon} 
                />
            </Container>
        </>
    )
}

export default Facts;