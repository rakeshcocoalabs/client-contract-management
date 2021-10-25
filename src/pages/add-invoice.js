import React from "react";
import { TextField, Button } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import { Grid } from '@material-ui/core'




const Addinvoice = ()=>{



    return (
        <Container>
            <br />
            <br />
            <Grid container spacing={3} >

                


                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <p>Client name</p>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <TextField style={{ textAlign: 'center', alignItems: "center" }} variant="outlined" size="small"  id={'name'} ></TextField>
                </Grid>

               
                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <p>invoice number</p>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <TextField style={{ textAlign: 'center', alignItems: "center" }} variant="outlined" size="small" onChange={nameChange} id={'name'} ></TextField>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <p>Client contact </p>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <TextField style={{ textAlign: 'center', alignItems: "center" }} variant="outlined" size="small" onChange={nameChange} id={'name'} ></TextField>
                </Grid>

               
                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <p>invoice date</p>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <TextField style={{ textAlign: 'center', alignItems: "center" }} variant="outlined" size="small" onChange={nameChange} id={'name'} ></TextField>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <p>email</p>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <TextField style={{ textAlign: 'center', alignItems: "center" }} variant="outlined" size="small" onChange={nameChange} id={'name'} ></TextField>
                </Grid>

               
                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <p>phone</p>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <TextField style={{ textAlign: 'center', alignItems: "center" }} variant="outlined" size="small" onChange={nameChange} id={'name'} ></TextField>
                </Grid>

               



            </Grid>

            <br />
            <br />


            <br />
            <br />

           



        </Container>
    )
}
export default AddInvoice;