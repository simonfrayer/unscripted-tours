import { Grid, Typography, Box } from "@mui/material";
import { FC } from "react";
import theme from "../utils/theme";

interface FactsCardProps {
    text : string,
    Icon : React.ElementType,
}

const FactsCard : FC<FactsCardProps> = ({text, Icon}) => {
    return(
        <>
            <Grid item xs={12} md={6} sx={{
                display: "flex", 
                flexDirection: "column", 
                justifyContent: "center", 
                alignItems: "center",
                padding: 4
                }}>
                    <Box
                        sx={{
                            boxShadow: 10,
                        borderRadius: 10,

                        }}
                    >
                    <Grid item sx={{
                        backgroundColor: theme.palette.primary.dark,
                        padding: {xs: 5, md: 10},
                        borderRadius: 10,
                        color: theme.palette.primary.light,
                        opacity: "80%"
                    }}>
                <Icon />

                <br/>
                <br/>

                <Typography variant="subtitle2" color={theme.palette.primary.light}>
                    {text}
                </Typography>
                </Grid>
                </Box>
            </Grid>
        </>
    )
}

export default FactsCard;