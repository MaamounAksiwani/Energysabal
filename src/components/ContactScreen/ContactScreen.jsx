import React, { useState, useEffect } from 'react';
import WOW from 'wowjs';
import EmailOutlinedIcon  from '@mui/icons-material/EmailOutlined';
import { Container, TextField, Button, Grid } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import './ContactScreen.css'
import {
    PersonOutline as PersonOutlineIcon,
    Mail as MailIcon,
    Business as BusinessIcon,
    Phone as PhoneIcon,
    Feed as FeedIcon,
} from '@mui/icons-material';

const ContactScreen = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        Email: '',
        PhoneNumber: '',
        Subject: '',
        HowCanWeHelpYou: '',
    });

    const [formErrors, setFormErrors] = useState({
        firstName: false,
        lastName: false,
    });

    const handleInputChange = (field) => (event) => {
        setFormData({ ...formData, [field]: event.target.value });
        setFormErrors({ ...formErrors, [field]: false });
    };

    const handleSubmit = () => {
        // Validation logic
        const errors = {};
        Object.keys(formData).forEach((field) => {
            if (!formData[field].trim()) {
                errors[field] = true;
            }
        });

        // If no validation errors, proceed with form submission
        if (Object.keys(errors).length === 0) {
            // Perform form submission or other actions here
            console.log('Form submitted:', formData);
        } else {
            setFormErrors(errors);
        }
    };

    useEffect(() => {
        document.title = "Contact | Energy Sabal";
        return () => {
          document.title = "";
        };
      }, []);


    useEffect(() => {
        const wow = new WOW.WOW();
        wow.init();

        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='header wow fadeInDown'  data-wow-duration='1s' style={{ backgroundColor: '#D6E2D9' }}>
            <div>
                <Container maxWidth="lg">
                    <div className='content'>
                        <div>
                            <p className='first-child'>CONTACT OUR EXPERTS
                            </p>
                            <h1>Get in Touch with our
                                Electrification Advisors</h1>
                            <h2>Hello,</h2>
                            <p>We are eager to hear from you. Kindly fill out the
                                form, and we’ll respond promptly. Your inquiry is
                                valuable to us, and we’re here to assist you with all
                                your electrification needs
                            </p>

                            <div style={{ display: 'flex', alignItems: 'center' }}>

                                <PhoneIcon style={{ backgroundColor: '#689030', color: '#fff', borderRadius: '50%', padding: '10px', marginRight: '10px' }} />
                                <h2 style={{ fontWeight: 'bold' }}>
                                    0 800 555 44 33</h2>
                            </div>



                        </div>
                        <div className='main-form'>

                            <Grid container spacing={1}>
                                {Object.keys(formData).map((field) => (
                                    <Grid item xs={field === 'firstName' || field === 'lastName' ? 12 : 12} key={field}>
                                        <TextField
                                            size='medium'
                                            variant="standard"
                                            label={field === 'firstName' ? 'First Name' : field === 'lastName' ? 'Last Name' : field.replace(/([A-Z])/g, ' $1').trim()}
                                            fullWidth
                                            margin="dense"
                                            value={formData[field]}
                                            onChange={handleInputChange(field)}
                                            // error={formErrors[field]}
                                            // helperText={formErrors[field] && `${field === 'firstName' || field === 'lastName' ? 'Name' : field} is required`}
                                            InputProps={{
                                                startAdornment: (
                                                    React.createElement(
                                                        field === 'PhoneNumber' ? PhoneIcon : 
                                                        field === 'Email' ? EmailOutlinedIcon :
                                                        field === 'Subject' || field === 'HowCanWeHelpYou' ? BusinessIcon  : PersonOutlineIcon,
                                                        { style: { color: '#76867E', paddingRight: '10px', fontSize: '25px', padding: '10px 10px 10px 0' } }
                                                    )
                                                ),
                                            }}
                                            InputLabelProps={{
                                                style: { color: '#76867E' },
                                            }}
                                        />
                                    </Grid>
                                ))}

                                <Grid item xs={12}>
                                    <Button
                                        size='medium'
                                        style={{ backgroundColor: '#80aa45', borderRadius: '25px', color: "#fff", padding: '10px 0', marginTop: '20px' }}
                                        color="primary"
                                        fullWidth
                                        onClick={handleSubmit}
                                    >
                                        Send
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </div>

                </Container>
            </div>
        </div>


    )
}

export default ContactScreen;
