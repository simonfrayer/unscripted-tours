import { AppBar, Toolbar, Container, Box, Button } from "@mui/material";
import theme from "../utils/theme";

const pages = ['How does it work', 'Cooperation', 'About us'];

export const Navbar = () => {
    return (
      <AppBar position='static' sx={{color: theme.palette.primary.dark}}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    )
}