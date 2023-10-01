import { Box } from "@mui/material";
import { FC } from 'react';

interface DolinaApartmentProps {
    padding? : string;
}

const DolinaApartment: FC<DolinaApartmentProps> = ({padding}) => {
    return (
        <>
        <Box sx={{padding: {padding}}}>
            <iframe width="100%" height="450" frameborder="0" allow="xr-spatial-tracking; gyroscope; accelerometer" allowfullscreen scrolling="no" src="https://kuula.co/share/collection/7JQY7?logo=1&info=1&fs=1&vr=0&sd=1&autorotate=0.08&thumbs=3"></iframe>        </Box>
        </>
    )
}

export default DolinaApartment;