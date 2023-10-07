import Container from "../components/Container"
import theme from "../utils/theme";
import DolinaApartment from "../tours/DolinaApartment";
import { Box } from "@mui/material";

const VirtualTour = () => {
    return(
        <>
            <Container backgroundColor={theme.palette.primary.light}>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItemns: "center",
                    width: "100%",
                    paddingTop: 5,
                }}>
                    <DolinaApartment />
                </Box>
            </Container>
        </>
    )
}

export default VirtualTour;