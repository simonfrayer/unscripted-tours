import { Grid, Typography } from "@mui/material";
import { FC, ReactNode } from "react";

interface ContainerProps {
    title? : string,
    titlePosition? : "center"  | "start" | "end",
    backgroundColor? : string,
    children: ReactNode
}

const Container: FC<ContainerProps> = ({title, titlePosition, backgroundColor, children}) => {
    return (
        <>
            <Grid container spacing={1} sx={{backgroundColor: backgroundColor, width: "100%", minHeight: "100vh", padding: 5, margin: 0}}>
                {title? 
                    <Grid item xs={12} style={{display: "flex", justifyContent: titlePosition ? titlePosition : "center"}}>
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