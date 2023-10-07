import { Box } from "@mui/material";
import { FC } from 'react';

interface DolinaApartmentProps {
}

const DolinaApartment: FC<DolinaApartmentProps> = () => {
    return (
        <>
        <Box sx={{
            padding: "12px", 
            width: "80%", 
            height: "auto",
            boxShadow: 3,
            borderRadius: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            }}>
            <iframe width="90%" height="90%" frameborder="0" allow="xr-spatial-tracking; gyroscope; accelerometer" allowfullscreen scrolling="no" src="https://kuula.co/share/collection/7JQY7?logo=1&info=1&fs=1&vr=0&sd=1&autorotate=0.08&thumbs=3" style={{color: "white"}}></iframe>        </Box>
        </>
    )
}

export default DolinaApartment;