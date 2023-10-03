import { Grid, Typography } from "@mui/material";
import { FC, ReactNode } from "react";

interface ContainerProps {
    title? : string,
    backgroundColor? : string,
    children: ReactNode
}

const Container: FC<ContainerProps> = ({title, backgroundColor, children}) => {
    return (
        <>
            <Grid container spacing={1} sx={{backgroundColor: backgroundColor}}>
                {title? 
                    <Grid item xs={12}>
                        <Typography variant="h5" align="center">
                            {title}
                        </Typography>
                    </Grid>
                : null}

                <Grid item xs={12}>
                    {children}
                </Grid>
            </Grid>
        </>
    )
}

export default Container;