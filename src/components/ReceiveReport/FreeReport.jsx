import React, { useState } from 'react';
import './index.css';
import { Container, TextField, Button, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { FileUploader } from "react-drag-drop-files";
import {
    PersonOutline as PersonOutlineIcon,
    Home as HomeIcon,
    EmailOutlined as EmailOutlinedIcon,
    AcUnit as AcUnitIcon,
    Business as BusinessIcon,
    Phone as PhoneIcon,
    Water as WaterIcon,
    LocationCity as LocationCityIcon,
    LocationOn as LocationOnIcon,
  } from '@mui/icons-material';

const fileTypes = ["JPG", "PNG", "GIF"];

const FreeReport = () => {
    const [file, setFile] = useState(null);
    const handleFileChange = (file) => {
        setFile(file);
    };

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        addressLine: '',
        apartment: '',
        city: '',
        homeSquareFootage: '',
    });

    const [formErrors, setFormErrors] = useState({
        firstName: false,
        lastName: false,
        email: false,
        phoneNumber: false,
        addressLine: false,
        apartment: false,
        city: false,
        homeSquareFootage: false,
    });

    const handleInputChange = (field) => (event) => {
        setFormData({ ...formData, [field]: event.target.value });
        setFormErrors({ ...formErrors, [field]: false });
    };

    const handleSubmit = () => {
        const errors = {};
        Object.keys(formData).forEach((field) => {
            if (!formData[field].trim()) {
                errors[field] = true;
            }
        });

        if (Object.keys(errors).length === 0) {
            console.log('Form submitted:', formData);
        } else {
            setFormErrors(errors);
        }
    };

    const [age, setAge] = useState('');
    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };

    const textFieldStyles = {
        '& .MuiInput-underline:before': { borderBottomColor: 'gray' },
        '&:hover .MuiInput-underline:before': { borderBottomColor: 'gray' },
        '& .MuiInput-underline:after': { borderBottomColor: 'green' },
    };

    const iconStyles = {
        color: '#76867E', paddingRight: '10px', fontSize: '25px', padding: '10px 10px 10px 0',
    };

    const iconStyless = {
        marginRight: 8,
    };

    return (
        <div style={{ backgroundColor: '#FFF', padding: '50px', borderRadius: '20px' }}>
            <Container maxWidth="xl">
            <Grid container spacing={1}>
      <Grid item sm={6} xs={12}>
        <TextField
          size="small"
          variant="outlined"
          label="First Name"
          fullWidth
          margin="dense"
          value={formData.firstName}
          onChange={handleInputChange('firstName')}
          InputProps={{
            startAdornment: (
              <PersonOutlineIcon style={iconStyles} />
            ),
          }}
          InputLabelProps={{
            style: { color: '#76867E' },
          }}
          sx={textFieldStyles}
        />
      </Grid>

      <Grid item sm={6} xs={12}>
        <TextField
          size="small"
          variant="outlined"
          label="Home Square Footage (in feet)"
          fullWidth
          margin="dense"
          value={formData.homeSquareFootage}
          onChange={handleInputChange('homeSquareFootage')}
          InputProps={{
            startAdornment: (
              <HomeIcon style={iconStyles} />
            ),
          }}
          InputLabelProps={{
            style: { color: '#76867E' },
          }}
          sx={textFieldStyles}
        />
      </Grid>

      <Grid item sm={6} xs={12}>
        <TextField
          size="small"
          variant="outlined"
          label="Last Name"
          fullWidth
          margin="dense"
          value={formData.lastName}
          onChange={handleInputChange('lastName')}
          InputProps={{
            startAdornment: (
              <PersonOutlineIcon style={iconStyles} />
            ),
          }}
          InputLabelProps={{
            style: { color: '#76867E' },
          }}
          sx={textFieldStyles}
        />
      </Grid>

      <Grid item sm={6} xs={12}>
        <FormControl variant="outlined" fullWidth margin="dense" sx={textFieldStyles}>
          <InputLabel id="heating-cooling-type-label">Heating & Cooling Type</InputLabel>
          <Select
            labelId="heating-cooling-type-label"
            id="heating-cooling-type-select"
            size="small"
            value={age}
            onChange={handleAgeChange}
            label="Heating & Cooling Type"
            startAdornment={
              <AcUnitIcon style={iconStyles} />
            }
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item sm={6} xs={12}>
        <TextField
          size="small"
          variant="outlined"
          label="Email"
          fullWidth
          margin="dense"
          value={formData.email}
          onChange={handleInputChange('email')}
          InputProps={{
            startAdornment: (
              <EmailOutlinedIcon style={iconStyles} />
            ),
          }}
          InputLabelProps={{
            style: { color: '#76867E' },
          }}
          sx={textFieldStyles}
        />
      </Grid>

      <Grid item sm={6} xs={12}>
        <FormControl variant="outlined" fullWidth margin="dense" sx={textFieldStyles}>
          <InputLabel id="water-heater-type-label">Water Heater Type</InputLabel>
          <Select
            labelId="water-heater-type-label"
            id="water-heater-type-select"
            size="small"
            value={age}
            onChange={handleAgeChange}
            label="Water Heater Type"
            startAdornment={
              <WaterIcon style={iconStyles} />
            }
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item sm={6} xs={12}>
        <TextField
          size="small"
          variant="outlined"
          label="Phone Number"
          fullWidth
          margin="dense"
          value={formData.phoneNumber}
          onChange={handleInputChange('phoneNumber')}
          InputProps={{
            startAdornment: (
              <PhoneIcon style={iconStyles} />
            ),
          }}
          InputLabelProps={{
            style: { color: '#76867E' },
          }}
          sx={textFieldStyles}
        />
      </Grid>

      <Grid item sm={6} xs={12}>
        <FormControl fullWidth>
          <InputLabel id="state-select-label">State (We operate only within the USA.)</InputLabel>
          <Select
            labelId="state-select-label"
            id="state-select"
            size="small"
            value={age}
            onChange={handleAgeChange}
            label="State (We operate only within the USA.)"
            startAdornment={
              <LocationOnIcon style={iconStyles} />
            }
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item sm={6} xs={12}>
        <TextField
          size="small"
          variant="outlined"
          label="Address Line"
          fullWidth
          margin="dense"
          value={formData.addressLine}
          onChange={handleInputChange('addressLine')}
          InputProps={{
            startAdornment: (
              <BusinessIcon style={iconStyles} />
            ),
          }}
          InputLabelProps={{
            style: { color: '#76867E' },
          }}
          sx={textFieldStyles}
        />
      </Grid>

      <Grid item sm={6} xs={12}>
        <TextField
          size="small"
          variant="outlined"
          label="City"
          fullWidth
          margin="dense"
          value={formData.city}
          onChange={handleInputChange('city')}
          InputProps={{
            startAdornment: (
              <LocationCityIcon style={iconStyles} />
            ),
          }}
          InputLabelProps={{
            style: { color: '#76867E' },
          }}
          sx={textFieldStyles}
        />
      </Grid>

      <Grid item sm={6} xs={12}>
        <TextField
          size="small"
          variant="outlined"
          label="Apartment, suite, etc."
          fullWidth
          margin="dense"
          value={formData.apartmentSuite}
          onChange={handleInputChange('apartmentSuite')}
          InputProps={{
            startAdornment: (
              <BusinessIcon style={iconStyles} />
            ),
          }}
          InputLabelProps={{
            style: { color: '#76867E' },
          }}
          sx={textFieldStyles}
        />
      </Grid>

      <Grid item sm={6} xs={12}>
        <FileUploader classes="custom-file-uploader" handleChange={handleFileChange} name="file" types={fileTypes} />
      </Grid>

      <Grid item sm={6} xs={12}>
        <TextField
          size="small"
          variant="outlined"
          label="ZIP Code"
          fullWidth
          margin="dense"
          value={formData.zipCode}
          onChange={handleInputChange('zipCode')}
          InputProps={{
            startAdornment: (
              <LocationOnIcon style={iconStyles} />
            ),
          }}
          InputLabelProps={{
            style: { color: '#76867E' },
          }}
          sx={textFieldStyles}
        />
      </Grid>

      <Grid item sm={6} xs={12}>
        <Button
          size="small"
          style={{ backgroundColor: '#80aa45', borderRadius: '5px', color: '#fff', padding: '11px 0', margin: '8px 0' }}
          color="primary"
          fullWidth
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Grid>
    </Grid>
            </Container>
        </div>
    );
};

export default FreeReport;
