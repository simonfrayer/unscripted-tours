import { Grid, Typography } from "@mui/material";
import LogoSvg from "../assets/Unscripted.svg"
import DolinaApartment from "../tours/DolinaApartment"

const Hero = () => {
    return (
        <>
        <Grid container spacing={1}>
        <Grid item xs={12} md={6}>
                <DolinaApartment padding="25px"/>
            </Grid>
            <Grid item xs={12} md={6}>
                <img src={LogoSvg} width="300vw" height={"auto"} alt="Logo"/>
                <Typography variant="h2" sx={{display: {xs: "none", md: "flex"}, justifyContent: "center"}}>
                    Immersive <br/>
                    3D Virtual Tours
                </Typography>   
            </Grid>
        </Grid>
        </>
    )
}

export default Hero;