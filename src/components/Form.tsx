import { useFormik } from 'formik';
import * as yup from 'yup';
import { Grid, TextField, Button } from "@mui/material";
import theme from "../utils/theme";
import emailjs from '@emailjs/browser';

const Form = () => {
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
        sendEmail(values);

        alert(JSON.stringify(values, null, 2));
      },
    });

    const sendEmail = async (e : any) => {
      e.preventDefault();

      await emailjs.send('service_purmlat', 'template_x7jez5d', formik.values , 'OTY2l7yLpD49mFSjF').then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    }

    return (
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
    );
  };

  return <FormWithMaterialUI />;
};

export default Form;
