import Container from "../components/Container";
import ContainerBackgroundImage from "../assets/container-2.jpg";
import BackgroundImage from "../assets/contact-form.jpeg";
import { Box, Grid, Typography } from "@mui/material";

const Collaboration = () => {
    return (
        <>
            <Container title="Collaboration" backgorundImage={ContainerBackgroundImage} titlePosition="start">
                <Grid item xs={12}>
                    <Typography variant="body1">
                        Collaborating with a 3D Virtual Tour business ensures a competitive edge by offering an immersive, visually engaging experience that transcends geographical limitations, enhances customer confidence, and provides a cost-effective, versatile solution across diverse industries.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{
                        width: "100%",
                        backgroundImage: `url(${BackgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}>

                    </Box>
                </Grid>
            </Container>
        </>
    )
}

export default Collaboration;