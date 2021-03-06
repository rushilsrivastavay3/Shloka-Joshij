import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core';
import {Container} from '../../../utils/mui';
import {Button} from  '../../../utils/mui';
import { Grid } from  '../../../utils/mui';
import {MenuItem} from  '../../../utils/mui';
import { CssBaseline } from '@material-ui/core';
import TextField from '@mui/material/TextField';
import { Typography } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { connect,useSelector ,useDispatch} from "react-redux";
import {adddemographicsdata,getdemographicsdata} from "../../../redux/actions/common-action-creator";
import { FormControl } from "@mui/material";
import { InputAdornment } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";
import { Switch, Route, useRouteMatch ,useParams,useHistory} from "react-router";
import './demographics.css';
import Select from '@mui/material/Select';
import BasicModal from "../../../components/modals";


const theme = createTheme();
const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(6)
    }
}));  

function PatientDemographics({DemographicsData,adddemographicsdata,getdemographicsdata}) 
{
 
  const [demographicsformdata, setdemographicsformdata] = React.useState(DemographicsData);
  let { id, role } = useParams();

  const SubmitDemographicsDetails = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
   let body = {};
    for (let entry of data.entries()) {
      body[entry[0]] = entry[1];
    }
    body = {...body,userId: id,UpdatedDate:new Date()}
    adddemographicsdata(body);
    handleOpen();
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false)
  };
   const [addFormValue,setFormValue] = React.useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValue(prevState => ({
      formdata: { ...prevState, [id]: value }
    }));
  };



  useEffect(()=>{
    getdemographicsdata(id);
    if(demographicsformdata?.length>0){
       setFormValue(prevState => ({
          ...prevState,...demographicsformdata[0]
       }))
    }
  },[demographicsformdata])

    const genders = ["Male", "Female","Others"];
    const classes = useStyles();

    return (
        <>
        <Container component="main" maxWidth="lg" className="contain">
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'right' }}>
          <Grid container>
            <Grid item sm={12} lg={12} xl={12} md={12} xs={12}>
              <h2 className="header-title" style={{margin:'0'}}>Demographics </h2>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container className="inside-page-cards" maxWidth='md' overflow="auto" style={{marginTop:'16px'}}>
      <Container className={classes.container} >
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="lg">
          <CssBaseline />
          <Box >
        <Box component="form" name="demographics" onSubmit={SubmitDemographicsDetails}  style={{padding:'0px'}}>
          <Grid container spacing={2} style={{padding:'0px'}}>
            <Grid item xs={12} sm={6}>
              <TextField
                required fullWidth id="firstName" name="firstName" 
                label="First Name"   placeholder='First Name'
                autoComplete="off" 
                onChange={handleChange}
                value={addFormValue.firstName}
                InputProps={{
                    startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                  }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required fullWidth id="lastName"   placeholder='Last Name'name="lastName" label="Last Name"
                autoComplete="off" 
                onChange={handleChange}
                value={addFormValue.lastName}
                InputProps={{
                    startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                  }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField required fullWidth id="dob"  placeholder='Birth Date' name="dob"
                label="Birth Date" type="date" autoComplete="off"
                onChange={handleChange}
                value={addFormValue.dob}
                    InputProps={{
                    startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                  }}/>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                  SelectProps={{
                    MenuProps: {
                      PopoverClasses: {
                        root: classes.customMenuPopover
                      }
                    }
                  }}
                variant="outlined" select id="gender"  placeholder='Gender' name="gender"
                label="Gender" value={addFormValue.gender} onChange={handleChange} fullWidth   InputProps={{
                    startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                  }}
              >
              {genders.map((gender, index) => (
                <MenuItem key={index} value={gender}>
                  {gender}
                </MenuItem>
              ))}
             </TextField>
      </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required fullWidth id="ethnicity"  placeholder='Ethnicity' name="ethnicity"
                label="Ethnicity / Race" autoComplete="off" value={addFormValue.ethnicity}   InputProps={{
                    startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                  }} /> 
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required fullWidth id="education"  placeholder='Patient Education' name="education"
                label="Patient Education" autoComplete="off" value={addFormValue.education}   InputProps={{
                    startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                  }} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required fullWidth id="occupation" name="occupation" label="Employment"
                autoComplete="off"  value={addFormValue.occupation} placeholder='Employment'  InputProps={{
                    startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                  }}/>
            </Grid> 
           


            <Grid item xs={12} sm={6}>
                <TextField
                required fullWidth id="contact"  placeholder='Contact Number'   name="contact"
                label="Contact Number" type="tel" value={addFormValue.contact} autoComplete="off"   InputProps={{
                    startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                  }}/>
            </Grid>
           
            <Grid item xs={12} sm={6}>
              <TextField
                required fullWidth id="medicalHistory"  placeholder='Medical History' name="medicalHistory"
                label="Medical History" autoComplete="off" value={addFormValue.medicalHistory}  InputProps={{
                    startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                  }}/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required fullWidth id="familyMedicalHistory"  placeholder='Family Medical History' name="familyMedicalHistory" value={addFormValue.familyMedicalHistory}
                label="Family Medical History" autoComplete="off"   InputProps={{
                    startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                  }}/>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                required fullWidth id="surgeries" name="surgeries"  placeholder='Surgery' label="Surgery"
                autoComplete="off" value={addFormValue.surgeries}  InputProps={{
                    startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                  }}/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required fullWidth id="insuranceProvider"  placeholder='Insurance Provider' name="insuranceProvider" value={addFormValue.insuranceProvider}
                label=" Insurance Provider"  autoComplete="off"   InputProps={{
                    startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                  }}/>
            </Grid>

            <Grid item xs={12}>
                <TextField
                required fullWidth id="address"  placeholder='Address' name="address" label="Address"
                autoComplete="off" value={addFormValue.address}  InputProps={{
                    startAdornment: <InputAdornment style={{ padding: '0' }} position="start"> </InputAdornment>,
                  }} />
            </Grid>
              <Grid item xs={12} sm={6}>
          <Button 
                                    styles={{ padding: '0', margin: '30' }} type="submit" fullWidth sx={{ mt: 3, mb: 2 }}>
                                    <div className='solid-button'>Submit</div>
                                    </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
          <Button 
          styles={{ padding: '0', margin: '30' }}
          type="button"
          fullWidth
          sx={{ mt: 3, mb: 2 }}>
          <div className='solid-button'>Cancel</div>
          </Button>
            </Grid>
          </Grid>         
        </Box>
      </Box>
    </Container>
  </ThemeProvider>
  <BasicModal state={open} onClose={handleClose}>
  Demographics Data Added Successfully
                  </BasicModal>
     </Container>
     </Container>
     </>
  )
}

const mapStateToProps = (state) => {
  return {
      DemographicsData: state.demographicsdata.DemographicsData,
  };
};
const mapdispatchToProps = (dispatch) => {
  return {
      getdemographicsdata: (id) => dispatch(getdemographicsdata(id)),
      adddemographicsdata: (data) => dispatch(adddemographicsdata(data)),
    };
};

export default connect(mapStateToProps, mapdispatchToProps)(PatientDemographics);