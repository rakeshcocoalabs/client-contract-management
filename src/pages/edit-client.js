import React, { useState, useEffect } from "react";
import { TextField, Button, Select, MenuItem } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import { Grid, FormControl } from '@material-ui/core'
import { useHistory } from "react-router-dom";
//import CustomSelect from "../component/customselect.js";

// import Table from '@material-ui/core/Table';

// import TableBody from '@material-ui/core/TableBody';

// import TableCell from '@material-ui/core/TableCell';

// import TableContainer from '@material-ui/core/TableContainer';

// import TableHead from '@material-ui/core/TableHead';

// import TableRow from '@material-ui/core/TableRow';

// import Paper from '@material-ui/core/Paper';



import axios from 'axios';




function EditClient(props) {

    const history = useHistory();

    const [id, setId] = useState('')

    const [load, setLoad] = useState(false)

    const getClient = async (client) => {



        var url = "http://localhost:3080/clients/get-client/" + client

        const info = await axios.get(url);

        if (info && info.data && info.data.output) {

            const out = info.data.output;

            console.log("jqeeeer", out)
            setId(out._id);

            setName(out.name);
            setContact(out.contactName);
            setcountry(out.country);
            setEmail(out.email)
            setLoad(true)
            setState(out.state)
            setPhone(out.phone)
            setGst(out.gstIn)
            let arr1 = out.address1;
            var address1 = ""
            for (let x of arr1) {
                address1 = address1.concat(x)
                address1 = address1.concat("\n")
            }
            setAddressBill(address1)

            let arr2 = out.address2;
            var address2 = ""
            for (let x of arr2) {
                address2 = address2.concat(x)
                address2 = address2.concat("\n")
            }
            setAddressShip(address2)

        }


    }


    useEffect(() => {

        let validity = localStorage.getItem('validity')

        const d1 = new Date();

        const d2 = d1.getTime()

        if (d2 > validity) {
            history.push("/login");
        }

        let client = localStorage.getItem('client')

        if (client && client !== "" && (load === false)) {

            getClient(client)
        }



        // eslint-disable-next-line
    }, [load])




    const [name, setName] = useState('')
    const [contact, setContact] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [gst, setGst] = useState('')

    const [country, setcountry] = useState('')
    const [state, setState] = useState('')
    const [place, setPlace] = useState('')
    const [phone, setPhone] = useState('')

    const [addressBill, setAddressBill] = useState('')
    const [addressShip, setAddressShip] = useState('')


    const nameChange = (e) => { setName(e.target.value); }
    const contactChange = (e) => { setContact(e.target.value); }
    const emailChange = (e) => { setEmail(e.target.value); }
    const addressChange = (e) => { setAddress(e.target.value); }
    const gstChange = (e) => { setGst(e.target.value); }

    const countryChange = (e) => { setcountry(e.target.value); console.log("lil", e.target.value) }
    const stateChange = (e) => { setState(e.target.value); }
    const placeChange = (e) => { setPlace(e.target.value); }
    const phoneChange = (e) => { setPhone(e.target.value); }

    // var data1 = [
    //     {
    //         id: "1",
    //         name: "India"
    //     },
    //     {
    //         id: "2",
    //         name: "UAE"
    //     },
    //     {
    //         id: "3",
    //         name: "KSA"
    //     },
    //     {
    //         id: "4",
    //         name: "Bahrein"
    //     }
    // ];


    const addClient = async () => {



        if (name.trim() === "") { alert('fill client name') }
        if (contact.trim() === "") { alert('fill client contact name') }
        if (email.trim() === "") { alert('fill email') }
        // if (address.trim() === "") { alert('fill billing address') }
        console.log('ji', address.split('\n'))

        var addressList = address.split('\n')
        if (gst.trim() === "") { alert('fill client gst id') }
        if (country.trim() === "") { alert('fill client country id') }
        if (state.trim() === "") { alert('fill client state id') }
        // if (place.trim() === "") { alert('fill client place id) }

        var addressShipList = place.split('\n')
        if (phone.trim() === "") { alert('fill client phone id') }

        if (gst.length !== 15) { alert('improper gst code') }


        try {
            let url = "http://localhost:3080/clients/update-client/" + id;

            console.log("poooooj", url)

            let params = {
                name: name,
                contactName: contact,
                email: email,
                address1: addressList,
                gstIn: gst,
                country: country,
                state: state,
                phone: phone,
                address2: addressShipList
            }

            // let config = {
            //     headers: {
            //         mode: 'cors'
            //     }
            // }

            let response = await axios.patch(url, params);

            console.log(response);
        }

        catch (err) {

        }

    }



    return (
        <Container >
            <br />
            <br />
            <Grid container spacing={3} >



                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <p>Client name</p>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <TextField style={{ textAlign: 'center', alignItems: "center" }} variant="outlined" size="small" onChange={nameChange} id={'name'} value={name} >name</TextField>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <p>Country</p>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <FormControl style={{ minWidth: '200px', margin: "1px" }}>

                        <Select
                            id="select-demo"
                            labelId="select-demo"
                            value={country}
                            onChange={countryChange}

                        >

                            <MenuItem value={"India"}>India</MenuItem>
                            <MenuItem value={"UAE"}>UAE</MenuItem>
                            <MenuItem value={"KSA"}>KSA</MenuItem>

                        </Select>
                        {/* <CustomSelect data={data1} onSelectChange={countryChange} /> */}
                    </FormControl>

                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <p>Client Contact name</p>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <TextField style={{ textAlign: 'center', alignItems: "center" }} variant="outlined" size="small" onChange={contactChange} value={contact} ></TextField>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <p>State</p>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <TextField style={{ textAlign: 'center', alignItems: "center" }} variant="outlined" size="small" onChange={stateChange} value={state}></TextField>

                </Grid>


                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <p>E mail</p>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <TextField style={{ textAlign: 'center', alignItems: "center" }} variant="outlined" size="small" type="email" onChange={emailChange} value={email} ></TextField>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <p>Phone </p>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <TextField style={{ textAlign: 'center', alignItems: "center" }} variant="outlined" size="small" onChange={phoneChange} value={phone}></TextField>

                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <p>Billing address</p>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <TextField id="outlined-basic-email" type="text" label="Addres"
                        multiline rows={4} variant="outlined" name="Address" size="medium" style={{ textAlign: 'center', alignItems: "center" }}
                        rowsMax={4} onChange={addressChange} value={addressBill} />
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <p>Place of supply</p>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <TextField id="outlined-basic-email" type="text" label="Ship to"
                        multiline rows={4} variant="outlined" name="Address" size="medium" style={{ textAlign: 'center', alignItems: "center" }}
                        rowsMax={4} onChange={placeChange} value={addressShip} />

                </Grid>


                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <p>GST IN</p>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <TextField style={{ textAlign: 'center', alignItems: "center" }} variant="outlined" size="small" type="text" onChange={gstChange} value={gst}></TextField>
                </Grid>
                <br />
                <br />

                <Grid item xs={12} md={12} lg={12} style={{ textAlign: 'center', alignItems: "center" }} >
                    <Button style={{ backgroundColor: "#1288AA" }} onClick={addClient}>Update</Button>
                </Grid>





            </Grid>

            <br />
            <br />
            <br />










        </Container>
    )


}



export default EditClient;