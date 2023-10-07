import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#D1E0DE",
            light: "#F5F5F7",
            dark: "#383838",
            contrastText: "#525266",
        },
    },
    components: {
        // Name of the component
        MuiButton: {
          styleOverrides: {
            // Name of the slot
            root: {
              // Some CSS
              fontSize: '1rem',
            },
          },
        },
      },
});

export default theme;