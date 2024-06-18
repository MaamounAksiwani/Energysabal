import React, { useState, useEffect } from 'react';
import WOW from 'wowjs';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


import { Container, TextField, Button, Grid } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import {
    PersonOutline as PersonOutlineIcon,
    Mail as MailIcon,
    Business as BusinessIcon,
    Phone as PhoneIcon,
    Feed as FeedIcon,
} from '@mui/icons-material';


const Makeplan = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        Email: '',
        PhoneNumber: '',

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
        const wow = new WOW.WOW();
        wow.init();

        window.scrollTo(0, 0)
    }, [])


    useEffect(() => {
        document.title = "MakePlan | Energy Sabal";
        return () => {
            document.title = "";
        };
    }, []);

    return (
        <div className='wow fadeInDown' data-wow-duration='1s' style={{ backgroundColor: '#E7F0E9', paddingTop: '100px' }}>


            <div style={{ padding: '50px 0' }}>
                <Container maxWidth="lg">
                    <div className='content'>
                        <div>
                            <p className='first-child'>CONTACT OUR EXPERTS
                            </p>
                            <h1>Make a Plan with our Electrification Advisors</h1>
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
                                                        field === 'PhoneNumber' ? PhoneIcon : field === 'Email' ? MailIcon : PersonOutlineIcon,
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
                                <div>

                                    <h4 style={{ color: '#76867E', fontWeight: "300", paddingRight: '10px', fontSize: '15px' }}>Which products are you interested in?</h4>
                                </div>
                                <div>
                                    <FormControlLabel
                                        control={<Checkbox sx={{ '&.Mui-checked': { color: '#80aa45' } }} />}
                                        label="Heat Pump"
                                        sx={{
                                            '& .MuiFormControlLabel-label': {
                                              fontWeight: '300',
                                              color:"#76867E"
                                            },
                                          }} 
                                    />
                                    <FormControlLabel
                                        control={<Checkbox sx={{ '&.Mui-checked': { color: '#80aa45' } }} />}
                                        label="Solar"
                                        sx={{
                                            '& .MuiFormControlLabel-label': {
                                              fontWeight: '300',
                                              color:"#76867E"
                                            },
                                          }} 
                                    />
                                    <FormControlLabel
                                        control={<Checkbox sx={{ '&.Mui-checked': { color: '#80aa45' } }} />}
                                        label="Water Heater"
                                        sx={{
                                            '& .MuiFormControlLabel-label': {
                                              fontWeight: '300',
                                              color:"#76867E"
                                            },
                                          }} 
                                    />
                                    <FormControlLabel
                                        control={<Checkbox sx={{ '&.Mui-checked': { color: '#80aa45' } }}  />}
                                        label="Electrical Panel"
                                        sx={{
                                            '& .MuiFormControlLabel-label': {
                                              fontWeight: '300',
                                              color:"#76867E"
                                            },
                                          }} 
                                    />

                                    <FormControlLabel
                                        control={<Checkbox sx={{ '&.Mui-checked': { color: '#80aa45' } }} />}
                                        label="EV Charger"
                                        sx={{
                                            '& .MuiFormControlLabel-label': {
                                              fontWeight: '300',
                                              color:"#76867E"
                                            },
                                          }} 
                                    />
                                    <FormControlLabel
                                        control={<Checkbox sx={{ '&.Mui-checked': { color: '#80aa45' } }} />}
                                        label="Cooktop"
                                        sx={{
                                            '& .MuiFormControlLabel-label': {
                                              fontWeight: '300',
                                              color:"#76867E"
                                            },
                                          }} 
                                    />

                                    <FormControlLabel
                                        control={<Checkbox sx={{ '&.Mui-checked': { color: '#80aa45' } }} />}
                                        label="Oven"
                                        sx={{
                                            '& .MuiFormControlLabel-label': {
                                              fontWeight: '300',
                                              color:"#76867E"
                                            },
                                          }} 
                                    />

                                    <FormControlLabel
                                        control={<Checkbox sx={{ '&.Mui-checked': { color: '#80aa45' } }} />}
                                        label="Clothes Dryer"
                                        sx={{
                                            '& .MuiFormControlLabel-label': {
                                              fontWeight: '300',
                                              color:"#76867E"
                                            },
                                          }}  
                                    />
                                </div>

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
};

export default Makeplan;
