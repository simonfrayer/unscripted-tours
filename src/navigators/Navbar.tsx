import { AppBar, Toolbar, Container, Box, Button } from "@mui/material";

const pages = ['How does it work', 'Cooperation', 'About us'];

export const Navbar = () => {
    return (
      <AppBar position='static'>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
        {/* <img src={LogoSvg} width="60vw" height={"auto"} alt="Logo"/> */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, justifyContent: 'center' }}>
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