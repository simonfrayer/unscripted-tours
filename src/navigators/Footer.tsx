import { Grid, Typography } from "@mui/material";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import theme from "../utils/theme";
import { styled } from '@mui/system';

const FooterLink = styled('a')(({ theme }) => ({
    color: theme.palette.primary.light,
    textDecoration: 'none', // Optional: Remove underline
    '&:hover': {
      textDecoration: 'underline', // Optional: Add underline on hover
    },
  }));

const Footer = () => {
    return (
        <>
            <Grid container spacing={1} xs={12} sx={{padding: 5, backgroundColor: theme.palette.primary.dark, color: theme.palette.primary.light}}>
                <Grid item xs={4}>
                    <LocalPhoneOutlinedIcon/>
                    <Typography variant="body1">
                        +45 55 22 91 35
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <EmailOutlinedIcon/>
                    <Typography variant="body1">
                        unsciptedtours@gmail.com
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <CodeOutlinedIcon/>
                    <Typography variant="body1">
                        <FooterLink href="https://www.linkedin.com/in/simon-mayer-b92480219/" target="_blank">
                            Simon Mayer
                        </FooterLink>
                        <br />
                    </Typography>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;