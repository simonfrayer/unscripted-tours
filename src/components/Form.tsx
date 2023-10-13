import { useFormik } from 'formik';
import * as yup from 'yup';
import { Grid, TextField, Button } from "@mui/material";
import theme from "../utils/theme";
import emailjs from '@emailjs/browser';
import { Alert } from '@mui/material';
import { useState } from 'react';
import { Snackbar } from '@mui/material';

const Form = () => {
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSuccess(false);
    setOpenError(false);
  };

  const validationSchema = yup.object({
    // Define your validation schema here
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    email: yup.string().email('Invalid email address').required('Email is required'),
  });

  const FormWithMaterialUI = () => {
    const formik = useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        comment: '',
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
      },
    });

    const sendEmail = (e : any) => {
      e.preventDefault();

      emailjs.send('service_purmlat', 'template_x7jez5d', formik.values , 'OTY2l7yLpD49mFSjF').then(() => {
        setOpenSuccess(true)
    }, () => {
        setOpenError(true)
    });
    }

    return (
      <Grid container spacing={2} sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <Grid item xs={12}>
      <form onSubmit={sendEmail}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              id="firstName"
              label="First Name"
              variant="outlined"
              required
              fullWidth
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.firstName && Boolean(formik.errors.firstName)}
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="lastName"
              label="Last Name"
              variant="outlined"
              required
              fullWidth
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              required
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              id="comment"
              label="Comment"
              variant="outlined"
              multiline
              fullWidth
              value={formik.values.comment}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.comment && Boolean(formik.errors.comment)}
              helperText={formik.touched.comment && formik.errors.comment}
            />
          </Grid>
          <Grid item xs={12}>
            <Button color="primary" variant="contained" fullWidth type="submit" sx={{
            '&:hover': {
                color: theme.palette.primary.main,
              },
          }}>
                Submit
            </Button>
          </Grid>
        </Grid>
      </form>
          <Grid item xs={12}>
            <Snackbar open={openSuccess} autoHideDuration={5000} onClose={handleClose}>
              <Alert severity={"success"} variant="outlined"> Successfully sent </Alert>
            </Snackbar>
            <Snackbar open={openError} autoHideDuration={6000} onClose={handleClose}>
              <Alert severity={"error"} variant="outlined"> Could not send the form. Please write us an email instead on the following address: unsciptedtours@gmial.com </Alert>
            </Snackbar>
      </Grid>
      </Grid>
      </Grid>
    );
  };

  return <FormWithMaterialUI />;
};

export default Form;
