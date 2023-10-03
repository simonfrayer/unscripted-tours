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
            <Grid container spacing={1} sx={{backgroundColor: backgroundColor, width: "100%", height: height ? height : "auto", padding: 5, margin: 0}}>
                {title? 
                    <Grid item xs={12}>
                        <Typography variant="h3" align="center" sx={{padding: 5}}>
                            {title}
                        </Typography>
                    </Grid>
                : null}

                {children}
            </Grid>
        </>
    )
}

export default Container;