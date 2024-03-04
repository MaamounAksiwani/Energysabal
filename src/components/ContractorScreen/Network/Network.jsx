import { Container } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { TextField, Button, Grid } from '@mui/material';

const Network = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
        setFirstNameError(false);
    };

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
        setLastNameError(false);
    };

    const handleSubmit = () => {
        // Validation logic
        if (!firstName) {
            setFirstNameError(true);
        }

        if (!lastName) {
            setLastNameError(true);
        }

        // Additional validation logic can be added here

        // If no validation errors, you can proceed with form submission
        if (!firstNameError && !lastNameError) {
            // Perform form submission or other actions here
            console.log('Form submitted:', { firstName, lastName });
        }
    };
    return (
        <Container>
            <div className='titleTailored'>
                <h1>Join Our Network</h1>
                <h3>Streamline your workload, we handle the marketing, sales, and administrative tasks while you focus on installation</h3>
            </div>

            <Grid container spacing={1}>
                <Grid item xs={6}>
                    <TextField
                        label="First Name"
                        fullWidth
                        margin="normal"
                        size='medium'
                        value={firstName}
                        onChange={handleFirstNameChange}
                        error={firstNameError}
                        helperText={firstNameError && 'First Name is required'}
                    />
                </Grid>
                <Grid item xs={6}>
                    <TextField
                        label="Last Name"
                        fullWidth
                        size='medium'
                        margin="normal"
                        value={lastName}
                        onChange={handleLastNameChange}
                        error={lastNameError}
                        helperText={lastNameError && 'Last Name is required'}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField size='medium' label="E-Mail" fullWidth margin="normal" />
                </Grid>

                <Grid item xs={12}>
                    <TextField size='medium' label="Phone Number" fullWidth margin="normal" />
                </Grid>

                <Grid item xs={12}>
                    <TextField  size='medium' label="Company Name" fullWidth margin="normal" />
                </Grid>

                <Grid item xs={12}>
                    <TextField size='medium' label="My Company Operates In" fullWidth margin="normal" />
                </Grid>

                <Grid item xs={12}>
                    <TextField size='medium'  label="Additional Information" fullWidth margin="normal" />
                </Grid>

                <Grid item xs={12} style={{ marginBottom: '50px' }}>
                    <Button   size='medium' style={{ backgroundColor: '#3b715a', color: "#fff", padding: '15px 0' }} color="primary" fullWidth onClick={handleSubmit}>
                        Submit
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Network;
