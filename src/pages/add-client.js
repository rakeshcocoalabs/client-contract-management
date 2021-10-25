import React, { useState } from "react";
import {  TextField,  Button } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import { Grid, FormControl } from '@material-ui/core'
import CustomSelect from "../component/customselect.js";

// import Table from '@material-ui/core/Table';

// import TableBody from '@material-ui/core/TableBody';

// import TableCell from '@material-ui/core/TableCell';

// import TableContainer from '@material-ui/core/TableContainer';

// import TableHead from '@material-ui/core/TableHead';

// import TableRow from '@material-ui/core/TableRow';

// import Paper from '@material-ui/core/Paper';



import axios from 'axios';




function Home() {




    const [name, setName] = useState('')
    const [contact, setContact] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [gst, setGst] = useState('')

    const [country, setcountry] = useState('')
    const [state, setState] = useState('')
    const [place, setPlace] = useState('')
    const [phone, setPhone] = useState('')


    const nameChange = (e) => { setName(e.target.value); }
    const contactChange = (e) => { setContact(e.target.value); }
    const emailChange = (e) => { setEmail(e.target.value); }
    const addressChange = (e) => { setAddress(e.target.value); }
    const gstChange = (e) => { setGst(e.target.value); }

    const countryChange = (e) => { setcountry(e.target.value); }
    const stateChange = (e) => { setState(e.target.value); }
    const placeChange = (e) => { setPlace(e.target.value); }
    const phoneChange = (e) => { setPhone(e.target.value); }

    var data1 = [
        {
            id: "1",
            name: "India"
        },
        {
            id: "2",
            name: "UAE"
        },
        {
            id: "3",
            name: "KSA"
        },
        {
            id: "4",
            name: "Bahrein"
        }
    ];


    const addClient = async () => {

       

        if (name.trim() === "") { alert('fill client name') }
        if (contact.trim() === "") { alert('fill client contact name') }
        if (email.trim() === "") { alert('fill email') }
        if (address.trim() === "") { alert('fill billing address') }
        if (gst.trim() === "") { alert('fill client gst id') }
        if (country.trim() === "") { alert('fill client country id') }
        if (state.trim() === "") { alert('fill client state id') }
        if (place.trim() === "") { alert('fill client place id') }
        if (phone.trim() === "") { alert('fill client phone id') }

        if (gst.length !== 15) { alert('improper gst code') }


        try {
            let url = "http://localhost:3080/clients/add-client"

            let params = {
                name: name,
                contactName: contact,
                email: email,
                address: address,
                gstIn: gst,
                country: country,
                state: state,
                phone: phone,
                supplyPlace: place
            }

            let config = {
                headers: {
                    mode: 'cors'
                }
            }

            let response = await axios.post(url, params, config);

            console.log(response);
        }

        catch (err) {

        }

    }



    return (
        <Container>
            <br />
            <br />
            <Grid container spacing={3} >



                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <p>Client name</p>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <TextField style={{ textAlign: 'center', alignItems: "center" }} variant="outlined" size="small" onChange={nameChange} id={'name'} ></TextField>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <p>Country</p>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <FormControl style={{ minWidth: '200px', margin: "1px" }}>

                        {/* <Select
                            id="select-demo"
                            labelId="select-demo"
                            value={''}
                            onChange={countryChange}

                        >

                            <MenuItem value={"India"}>active</MenuItem>
                            <MenuItem value={"UAE"}>completed</MenuItem>
                            <MenuItem value={"KSA"}>dropped</MenuItem>

                        </Select> */}
                        <CustomSelect data={data1} onSelectChange={countryChange} />
                    </FormControl>

                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <p>Client Contact name</p>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <TextField style={{ textAlign: 'center', alignItems: "center" }} variant="outlined" size="small" onChange={contactChange} ></TextField>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <p>State</p>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <TextField style={{ textAlign: 'center', alignItems: "center" }} variant="outlined" size="small" onChange={stateChange} ></TextField>

                </Grid>


                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <p>E mail</p>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <TextField style={{ textAlign: 'center', alignItems: "center" }} variant="outlined" size="small" type="email" onChange={emailChange} ></TextField>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <p>Phone </p>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <TextField style={{ textAlign: 'center', alignItems: "center" }} variant="outlined" size="small" onChange={phoneChange}></TextField>

                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <p>Billing address</p>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <TextField id="outlined-basic-email" type="text" label="Addres"
                        multiline rows={2} variant="outlined" name="Address" size="medium" style={{ textAlign: 'center', alignItems: "center" }}
                        rowsMax={4} onChange={addressChange} />
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <p>Place of supply</p>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <TextField style={{ textAlign: 'center', alignItems: "center" }} variant="outlined" size="small" onChange={placeChange}></TextField>

                </Grid>


                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <p>GST IN</p>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <TextField style={{ textAlign: 'center', alignItems: "center" }} variant="outlined" size="small" type="text" onChange={gstChange}></TextField>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <Button style={{ backgroundColor: "#1288AA" }} onClick={addClient}>Submit</Button>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <Button style={{ backgroundColor: "#12AD12" }}>Add new contract</Button>
                </Grid>



            </Grid>

            <br />
            <br />
            <br />










        </Container>
    )


}



export default Home;