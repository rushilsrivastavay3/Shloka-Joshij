import React from "react";
import reactDom from "react-dom";
import Container from '@mui/material/Container';
import './body.css'
import { Grid,Button } from "@material-ui/core";
import CheckIcon from '@mui/icons-material/Check';
import { Card, CardContent } from "@mui/material";
import Typography from '@mui/material/Typography';
import AppRegistrationTwoToneIcon from '@mui/icons-material/AppRegistrationTwoTone';
import HowToRegTwoToneIcon from '@mui/icons-material/HowToRegTwoTone';
import LocalHospitalTwoToneIcon from '@mui/icons-material/LocalHospitalTwoTone';
import { makeStyles } from "@material-ui/core";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import '../../../styles/common-style.css'
const buttonStyle = makeStyles({
    button: {
      backgroundColor: 'var(--solid-button-color)',
      color: 'var(--button-text-color)',
      margin:'10px 0 0',
      fontFamily:'Nunito',textTransform:'none',fontWeight:'700',border:'1px solid var(--solid-button-color)',
      '&:hover': {
        backgroundColor: 'var(--button-color-hover)',color:'var(--solid-button-color)'
        
    },

  }})

 
function HomeBody(){
    const classes = buttonStyle()
    return(
        <>
       <div className='first-row' >       
       <div class="row-inner"> 
            <Container>
                <Grid container spacing={2} >
                    <Grid item xs={12} sm={12} lg={7} style={{padding:'0'}} >
                        <div className="col-left">
                            <div>
                                <h2>We Take Care Of</h2>
                                <h1 className="heading-para" >Your Health</h1>
                                <p>Some text comes  here Some text comes here Some text comes hereSome text comes here  Some text comes here Some text comes here Some text comes hereSome text comes here  Some text comes here Some text comes here Some text comes hereSome text comes here  Some text comes here Some text comes here Some text comes here</p>
                            <h3 className="sub-heading">Track and analyze all your data in one central location.</h3>
                            <ul>
                                <li><CheckIcon style={{color:'var(--list-icon-color)', paddingRight:'5px' }}/> Demographics  </li>
                                <li><CheckIcon style={{color:'var(--list-icon-color)', paddingRight:'5px' }}/> Medication </li>
                                <li><CheckIcon style={{color:'var(--list-icon-color)', paddingRight:'5px' }}/> Vitals  </li>
                            </ul>
                            <Button className={classes.button} variant="container">
                                Get Appointment
                            </Button>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4} lg={5}>
                            <div className="col-right">

                            </div>
                    </Grid>
                </Grid>
                
            </Container>
            </div>
      </div> 
      <div className="second-row">
          <div class="row-inner">
              <container>
                  <Grid item lg={12} sm={12} xs={12} container spacing={0} style={{margin:'0 auto'}}>
                    <Grid item xs={12} sm={6} lg={4}>
                <div  className="card-data">
                    <Card style={{borderRadius:'0',boxShadow:'0',backgroundColor:'var(--card-bg-color1)'}} >
                        <CardContent className="card">
                            <span className="cardIcons"><AccessTimeIcon style={{fontSize:'3rem'}}/></span> <br/>    
                            <h2>Opening Hours</h2>
                            <p>
                                Some text comes here  Some text comes here Some text comes here Some text comes here
                            </p>
                        </CardContent>
                    </Card>
                </div>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                <div  className="card-data">
                    <Card style={{borderRadius:'0',boxShadow:'0',backgroundColor:'var(--card-bg-color2)'}}>
                        <CardContent className="card">
                        <span className="cardIcons"><AppRegistrationTwoToneIcon style={{fontSize:'3rem'}}/></span>   
                            <h2>Book an Appointment</h2>
                            <p>
                                Some text comes here  Some text comes here Some text comes here Some text comes here
                            </p>
                        </CardContent>
                    </Card>
                </div>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                    <div  className="card-data">
                        <Card style={{borderRadius:'0',boxShadow:'0',backgroundColor:'var(--card-bg-color1)'}}>
                        <CardContent className="card">
                        <span className="cardIcons"><PermPhoneMsgIcon style={{fontSize:'3rem'}}/></span> <br/>    
                            <h2>Contact Us</h2>
                            <p>
                                Some text comes here  Some text comes here Some text comes here Some text comes here
                            </p>
                        </CardContent>
                    </Card>
                    </div>
                </Grid>
              </Grid>
          </container>
          </div>
      </div>
      </>
    );
}

export default HomeBody;