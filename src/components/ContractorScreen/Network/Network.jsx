import React, { useState } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import { Container, TextField, Button, Grid } from '@mui/material';
import EmailOutlinedIcon  from '@mui/icons-material/EmailOutlined';

import {
  // LocationOnOutlinedIcon as EmailIcon,
  PersonOutline as PersonOutlineIcon,
  Mail as MailIcon,
  Business as BusinessIcon,
  Phone as PhoneIcon,
  Feed as FeedIcon,
} from '@mui/icons-material';

const Network = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    Email: '',
    PhoneNumber: '',
    CompanyName: '',
    MyCompanyOperatesIn: '',
    AdditionalInformation: '',
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

  return (
    <Container style={{ paddingBottom: '50px' }}>

      <div className='content'>
        <div>
          <h1>Join Our Network</h1>
          <p>Streamline your workload, we handle the marketing, sales, and administrative tasks while you focus on installation.</p>

        </div>
        <div className='main-form'>
          <Grid container spacing={1}>
            {Object.keys(formData).map((field) => (
              <Grid item xs={12} key={field}>
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
                      field === 'AdditionalInformation' ? (
                        
                        <CreateIcon style={{ color: '#76867E', paddingRight: '10px', fontSize: '25px' }} />
                      ) : (
                        React.createElement(
                          field === 'PhoneNumber' ? PhoneIcon :
                          field === 'Email' ? EmailOutlinedIcon : 
                          field === 'CompanyName' || field === 'MyCompanyOperatesIn' ? BusinessIcon : 
                          PersonOutlineIcon,
                          { style: { color: '#76867E', paddingRight: '10px', fontSize: '25px', padding: '10px 10px 10px 0' } }
                        )
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

      {/* <div className='titleTailored'>
        <h1>Join Our Network</h1>
        <h3>Streamline your workload, we handle the marketing, sales, and administrative tasks while you focus on installation</h3>
      </div>
      <div style={{ backgroundColor: '#fff', padding: '50px', borderRadius: '20px' }}>

        <Grid container spacing={1}>
          {Object.keys(formData).map((field) => (
            <Grid item xs={field === 'firstName' || field === 'lastName' ? 6 : 12} key={field}>
              <TextField
                size='medium'
                variant="standard"
                label={field === 'firstName' ? 'First Name' : field === 'lastName' ? 'Last Name' : field.replace(/([A-Z])/g, ' $1').trim()}
                fullWidth
                margin="dense"
                value={formData[field]}
                onChange={handleInputChange(field)}
                error={formErrors[field]}
                helperText={formErrors[field] && `${field === 'firstName' || field === 'lastName' ? 'Name' : field} is required`}
                InputProps={{
                  startAdornment: (
                    field === 'AdditionalInformation' ? (
                      <CreateIcon style={{ color: '#76867E', paddingRight: '10px', fontSize: '25px' }} />
                    ) : (
                      React.createElement(
                        field === 'PhoneNumber' ? PhoneIcon : field === 'CompanyName' || field === 'CompanyOperation' ? BusinessIcon : PersonOutlineIcon,
                        { style: { color: '#76867E', paddingRight: '10px', fontSize: '25px', padding: '10px 10px 10px 0' } }
                      )
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
      </div> */}
    </Container>
  );
};

export default Network;
