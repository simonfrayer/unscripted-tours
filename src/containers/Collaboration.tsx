import Container from "../components/Container";
import ContainerBackgroundImage from "../assets/container-2.jpg";
import BackgroundImage from "../assets/contact-form.jpeg";
import { Box, Grid, Typography } from "@mui/material";
import theme from "../utils/theme";
import Form from "../components/Form";

const Collaboration = () => {

      

    return (
        <>
            <Container title="Collaboration" backgorundImage={ContainerBackgroundImage} titlePosition="start">
                <Grid item xs={12} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Typography variant="body1" sx={{width: "60%"}}>
                        Collaborating with a 3D Virtual Tour business ensures a competitive edge by offering an immersive, visually engaging experience that transcends geographical limitations, enhances customer confidence, and provides a cost-effective, versatile solution across diverse industries.
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <Box sx={{
                        width: "60%",
                        heigth: "",
                        backgroundImage: `url(${BackgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        padding: 5,
                        display: "flex", 
                        flexDirection: "column",
                        justifyContent: "center", 
                        alignItems: "center",
                    }}>
                        <Typography variant="h3" sx={{padding: 2, paddingTop: 0}}>
                            Contact Us
                        </Typography>
                        <Box sx={{
                            padding: 5, 
                            width: "80%", 
                            height: "auto",
                            boxShadow: 3,
                            borderRadius: 10,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: theme.palette.primary.main,
                        }}>
                            <Form />
                        </Box>
                    </Box>
                </Grid>
            </Container>
        </>
    )
}

export default Collaboration;