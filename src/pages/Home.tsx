import Hero from "../components/Hero"
import Container from "../components/Container"
import theme from "../utils/theme";
import { Grid, Typography } from "@mui/material";
import DolinaApartment from "../tours/DolinaApartment";

function Home() {
    return (
    <>
        <Hero/>
        <Container 
            title="How Does It Work"
            backgroundColor={theme.palette.primary.main}
        >
            <Grid item xs={12} md={5}>
                <Typography>
                    Hello
                </Typography>
            </Grid>
            <Grid item xs={12} md={7}>
                <DolinaApartment/>
            </Grid>
        </Container>
    </>
        )
}

export default Home;