import { Grid, Typography } from "@mui/material";
import { FC, ReactNode } from "react";

interface ContainerProps {
    title? : string,
    backgroundColor? : string,
    children: ReactNode
    height?: string,
}

const Container: FC<ContainerProps> = ({title, backgroundColor, children, height}) => {
    return (
        <>
            <Grid container spacing={1} sx={{backgroundColor: backgroundColor, width: "100%", height: height ? height : "400"}}>
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