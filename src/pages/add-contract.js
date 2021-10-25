import React, { useState } from "react";
import { TextField, Button, Select, MenuItem } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import { Grid, FormControl } from '@material-ui/core'
//import CustomSelect from "../component/customselect.js";

import DateMomentUtils from '@date-io/moment';
import {
    DatePicker,

    MuiPickersUtilsProvider,
} from '@material-ui/pickers';


import axios from 'axios';

import Table from '@material-ui/core/Table';

import TableBody from '@material-ui/core/TableBody';

import TableCell from '@material-ui/core/TableCell';

import TableContainer from '@material-ui/core/TableContainer';

// import TableHead from '@material-ui/core/TableHead';

import TableRow from '@material-ui/core/TableRow';

import Paper from '@material-ui/core/Paper';




function Contract() {


    
    


    const [name, setName] = useState('')
    const [contact, setContact] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [gst, setGst] = useState('')

    const [country, setcountry] = useState('')
    const [state, setState] = useState('')
    const [place, setPlace] = useState('')
    const [phone, setPhone] = useState('')

    const [currentDate, setCurrentData] = useState(new Date());

    const [image, setImage] = useState("")

    const [poNumber, setPoNumber] = useState("")

    const [poData, setPoData] = useState("")

    const [poValue, setPoValue] = useState(0)

    const [estimate, setEstimate] = useState([])

    const [estimateRow_1, setEstimateRow_1] = useState('')
    const [estimateRow_2, setEstimateRow_2] = useState('')
    const [estimateRow_3, setEstimateRow_3] = useState('')

    const mileStonechange = (e) => {

        setEstimateRow_1(e.target.value)
    }
    const percentageChange = (e) => {

        setEstimateRow_2(e.target.value)
    }
    const amountChange = (e) => {

        setEstimateRow_3(e.target.value)
    }

    const nameChange = (e) => { setName(e.target.value); }
    const contactChange = (e) => { setContact(e.target.value); }
    const emailChange = (e) => { setEmail(e.target.value); }
    const addressChange = (e) => { setAddress(e.target.value); }
    const gstChange = (e) => { setGst(e.target.value); }

    const countryChange = (e) => {
        setcountry(e.target.value)
    }
    const stateChange = (e) => { setState(e.target.value); }
    const placeChange = (e) => { setPlace(e.target.value); }
    const phoneChange = (e) => { setPhone(e.target.value); }

    const poNumberChange = (e) => { setPoNumber(e.target.value); }

    const poDataChange = (e) => { setPoData(e.target.value); }
    const poValueChange = (e) => { setPoValue(e.target.value); }


    const addEstimateRow = () => {

        

       
        
        

        
        setEstimate([...estimate,{milestone: estimateRow_1,percent: estimateRow_2,amount: estimateRow_3,}]);

        //window.location.reload(false)
        
    }

   

    const addClient = async () => {

        setcountry("India")

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

        if (poNumber.trim() === "") { alert('improper PO Number') }

        //if (currentDate.trim() === "") { alert('provide PO date') }

        if (poData.trim() === "") { alert('improper PO details') }

        if (poValue.trim() === "") { alert('improper PO value') }


        const data = new FormData()
        data.append("file", image)
        data.append("name", name)
        data.append("contactName", contact)
        data.append("email", email)
        data.append("address", address)
        data.append("country", country)
        data.append("state", state)
        data.append("phone", phone)
        data.append("supplyPlace", place)
        data.append("PO", {
            number: poNumber,
            details: poData,
            date: currentDate.toString(),
            value: poValue
        })

        data.append("clientId", "616f9b5abbeb4d7e57b572c2")
        try {
            let url = "http://localhost:3080/clients/add-project"

            // let params = {
            //     name: name,
            //     contactName: contact,
            //     email: email,
            //     address: address,
            //     gstIn: gst,
            //     country: country,
            //     state: state,
            //     phone: phone,
            //     supplyPlace: place,
            //     PO: {
            //         number: "2504",
            //         details: "lorem ipsum",
            //         date: "12/05/25",
            //         value: 50000
            //     },
            //     terms:
            //         [{
            //             milestone: "advances",
            //             percent: 15,
            //             amount: 7500
            //         }],
            //     clientId: "616f9b5abbeb4d7e57b572c2"
            // }

            const config = { headers: { "Content-Type": "multipart/form-data" } };

            let response = await axios.post(url, data, config);
            console.log(response);

            let id = response.data.output._id;
            
            const url_1 = "http://localhost:3080/clients/add-project-milestone/"+id

           

            let response_2 = await axios.post(url_1, estimate);
            console.log(response_2);

            //alert(response_2.data);



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

                        <Select
                            id="select-demo"
                            labelId="select-demo"
                            value={''}
                            onChange={countryChange}

                        >

                            <MenuItem value={"India"}>active</MenuItem>
                            <MenuItem value={"UAE"}>completed</MenuItem>
                            <MenuItem value={"KSA"}>dropped</MenuItem>

                        </Select>
                        {/* <CustomSelect data={data1} onChange={countryChange} /> */}
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
                    <p>E-- mail</p>
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

                <br />
                <br />

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <p>PO number</p>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <TextField style={{ textAlign: 'center', alignItems: "center" }} variant="outlined" size="small" onChange={poNumberChange} ></TextField>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <p>PO date</p>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <MuiPickersUtilsProvider utils={DateMomentUtils}>
                        <DatePicker value={currentDate} onChange={setCurrentData} />

                    </MuiPickersUtilsProvider>

                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <p>PO details</p>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <TextField id="outlined-basic-email" type="text" label="Details"
                        multiline rows={2} variant="outlined" name="Address" size="medium" style={{ textAlign: 'center', alignItems: "center" }}
                        rowsMax={4} onChange={poDataChange} />
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <p>Contract value</p>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <TextField style={{ textAlign: 'center', alignItems: "center" }} variant="outlined" size="small" onChange={poValueChange} ></TextField>
                </Grid>



                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <p>Upload documents </p>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                </Grid>





            </Grid>

            <br />
            <br />


            <br />
            <br />

            <Grid container spacing={3} >

                <Grid item xs={12} md={12} lg={12} style={{ textAlign: 'center', alignItems: "center" }} >
                    <Button onClick={addClient} style={{ backgroundColor: "#125689" }}>   Submit   </Button>
                </Grid>



            </Grid>

            <br />
            <br />

            <TableContainer component={Paper}>

                <Table stickyHeader aria-label="sticky table" >

                    

                    <TableBody>

                        {

                            estimate.map((item, index) => {
                                return <TableRow key={index}>


                                    <TableCell align="center">{item.milestone}</TableCell>

                                    <TableCell align="center">{item.percent}</TableCell>
                                    <TableCell align="center">{item.amount}</TableCell>





                                </TableRow>

                            })

                        }

                    </TableBody>

                </Table>

            </TableContainer>
            <br />
            <br />

            <Grid container spacing={3} >



                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <TextField style={{ textAlign: 'center', alignItems: "center" }} variant="outlined" size="small" onChange={mileStonechange} label={"Advance"} ></TextField>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <TextField style={{ textAlign: 'center', alignItems: "center" }} variant="outlined" size="small" onChange={percentageChange} label={"Percent"} ></TextField>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <TextField style={{ textAlign: 'center', alignItems: "center" }} variant="outlined" size="small" onChange={amountChange} label={"Amount"} ></TextField>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <Button onClick={addEstimateRow} style={{ backgroundColor: "#125689" }}>   Add milestone   </Button>

                </Grid>

            </Grid>



        </Container>
    )
}
export default Contract;