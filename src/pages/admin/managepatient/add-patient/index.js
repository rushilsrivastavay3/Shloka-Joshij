import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './add-patient.css';
import Button from '@mui/material/Button';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';
// import LocalizationProvider from '@mui/lab/LocalizationProvider';
// import DatePicker from '@mui/lab/DatePicker';

export default function Addpatient() {
  const [value, setValue] = React.useState(null);
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
     <div>
        <TextField
          label="Firstname*"
          id="outlined-size-small"
          size="small"
        />
        <TextField
          label="Lastname*"
          id="outlined-size-small"
          size="small"
        />
      </div>
      <div>

        <TextField
          type="date"
          id="outlined-size-small"
          size="small"
        />

        <TextField
          label="Email Address*"
          id="outlined-size-small"
          size="small"
        />
      </div>
      <div>
        <TextField
          label="Password*"
          id="outlined-size-small"
          size="small"
        />
        <TextField
          label="Re-Type Password*"
          id="outlined-size-small"
          size="small"
        />
      </div>
      <div>
        <TextField
          label="Contact*"
          id="outlined-size-small"
          size="small"
        />

<Button  variant="text" style={{margin:'0', Padding:'0'}}><span className="button1">Submit</span></Button>
      </div>
    </Box>
  );
}
