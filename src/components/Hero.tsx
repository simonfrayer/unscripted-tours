import { Grid, Typography } from "@mui/material";
import LogoSvg from "../assets/Unscripted.svg";
import HeroBackground from "../assets/landing-page.jpeg";
import theme from "../utils/theme";

const Hero = () => {      
    return (
        <>
        <Grid container spacing={1} sx={{
            backgroundImage: `url(${HeroBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '101vh',
            }}>
            <Grid item xs={12} md={6} sx={{
                position: "relative", 
                paddingRight: {md: 20},}}
            >
            <img src={LogoSvg} width="400vw" height={"auto"} alt="Logo" />
            </Grid>
            <Grid item xs={12} md={6} sx={{display: {xs: "none", md: "flex"}}} />
            <Grid item xs={12} md={6} sx={{display: {xs: "none", md: "flex"}}} />
            <Grid item xs={12} md={6} sx={{position: {xs: "flex", md: "relative"}}}>
                <Typography variant="h2" sx={{
                    display: {xs: "flex", md: "flex"}, 
                    justifyContent: {md: "start"},
                    margin: "auto",
                    position: 'absolute',
                    transform: {xs: "translate(0%, -75%)",md: 'translate(-13%, -75%)'},
                    textAlign: 'center', 
                    fontSize: "80px",
                    opacity: "12%",  
                    color: theme.palette.primary.dark, 
                    width: '100%',
                    }}>
                    <b style={{width: "100%"}}>Immersive <br/>
                    3D Virtual Tours</b>
                </Typography>   
                <Typography variant="h2" sx={{
                    display: {xs: "flex", md: "flex"}, 
                    justifyContent: {md: "start"},
                    margin: "auto",
                    position: 'absolute',
                    transform: {xs: "translate(0%, -80%)", md: 'translate(-13%, -80%)'},
                    textAlign: 'center', 
                    color: theme.palette.primary.dark, 
                    width: '100%',
                    }}>
                    <b style={{width: "100%"}}>Immersive <br/>
                    3D Virtual Tours</b>
                </Typography> 
            </Grid>
        </Grid>
        </>
    )
}

export default Hero;