import React, { useEffect, useState } from "react";
import { TextField, Button } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import { Grid, FormControl, Select, MenuItem } from '@material-ui/core'
// import CustomSelect from "../component/customselect.js";
import axios from "axios";

import DateMomentUtils from '@date-io/moment';
import {
    DatePicker,

    MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import { makeStyles } from '@material-ui/core/styles';


import Table from '@material-ui/core/Table';

import TableBody from '@material-ui/core/TableBody';

import TableCell from '@material-ui/core/TableCell';

import TableContainer from '@material-ui/core/TableContainer';

// import TableHead from '@material-ui/core/TableHead';

import TableRow from '@material-ui/core/TableRow';

import Paper from '@material-ui/core/Paper';





const AddInvoice = () => {




    const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 220,
        },
    }));

    const classes = useStyles();

    const getClients = async () => {
        const url = "http://localhost:3080/clients/list-clients"

        try {

            const resp = await axios.get(url, { mode: "cors" });

            console.log("resp", resp)

            if (resp && resp.data && resp.data.output) {

                setClients(resp.data.output)
            }

        }
        catch (err) {

        }


    }

    const selectClient = (event) => {
        var index = event.target.value
        if (clients[index]) {
            setName(clients[index].name)
            setEmail(clients[index].email)
            setContact(clients[index].contactName)
        }
    }

    const onDescChange = (e) => {
        setDescription(e.target.value)
    }
    const onTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const onSacChange = (e) => {
        setSac(e.target.value)
    }
    const onTaxableChange = (e) => {
        setTaxable(e.target.value)
    }
    const onContractChange = (e) => {
        setContract(e.target.value)
    }

    const onInvnumChange = (e) => {
        setInvoiceNumber(e.target.value)
    }

    // const onInvDateChange = (e) => {
    //     setInvoiceDate(e.target.value)
    // }

    const onphoneChange = (e) => {
        setPhone(e.target.value)
    }

    const addRow = () => {

        setEstimate([...estimate, { description: description, title: title, sac: sac, taxable: taxable, contract: contract }]);
    }



    const [clients, setClients] = useState([])
    const [mounted, setMounted] = useState(false)
    const [email, setEmail] = useState('')

    const [invoicenumber, setInvoiceNumber] = useState('')
    const [invoiceDate, setInvoiceDate] = useState(new Date())
    const [phone, setPhone] = useState('')

    const [contact, setContact] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [title, setTitle] = useState('')
    const [sac, setSac] = useState('')
    const [taxable, setTaxable] = useState('')
    const [contract, setContract] = useState('')

    const [estimate, setEstimate] = useState([])






    useEffect(() => {

        let validity = localStorage.getItem('validity')

        const d1 = new Date();

        const d2 = d1.getTime()

        if (d2 > validity) {
            history.push("/login");
        }


        if (mounted === false) {
            setMounted(true)
            getClients()
        }

        if (clients.length > 0) { console.log(clients[0]) }
        // eslint-disable-next-line
    }, [clients, email, contact, estimate])



    const addClient = async () => {



        if (name.trim() === "") { alert('fill client name') }
        if (contact.trim() === "") { alert('fill client contact name') }
        if (email.trim() === "") { alert('fill email') }

        if (phone.trim() === "") { alert('fill client phone id') }

        if (invoicenumber.trim() === "") { alert('mention invoice number ') }

        // if (invoiceDate.trim() === "") { alert('mention invoice date ') }


        const data = {}


        data.name = name
        data.contactName = contact
        data.email = email
        data.number = parseInt(invoicenumber)
        data.date = invoiceDate.toString();
        data.phone = phone;





        try {
            let url = "http://localhost:3080/clients/add-invoice"





            let response = await axios.post(url, data);
            console.log(response);

            let id = response.data.output._id;

            const url_1 = "http://localhost:3080/clients/add-invoice-line"



            let response_1 = await axios.post(url_1, { id: id, estimate: estimate });
            console.log(response_1);


            //alert(response_2.data);

            const url_2 = "http://localhost:3080/clients/make-pdf"

            var docObject = {
                name: name,
                id: id

            }

            let resp = await axios.post(url_2, docObject);

            console.log(resp)



        }

        catch (err) {

        }

    }

    const onSubmit = async () => {
        await addClient()
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
                    <FormControl className={classes.formControl} >

                        <Select onChange={selectClient}>
                            {clients.map((post, key) =>
                                <MenuItem value={key}>
                                    {post.name}
                                </MenuItem>
                            )}
                        </Select>
                    </FormControl>
                </Grid>


                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <p>invoice number</p>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <TextField style={{ textAlign: 'center', alignItems: "center" }} variant="outlined" size="small" id={'name'} onChange={onInvnumChange}></TextField>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <p>Client contact </p>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <TextField style={{ textAlign: 'center', alignItems: "center" }} variant="outlined" size="small" id={'name'} label={contact} ></TextField>
                </Grid>


                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <p>invoice date</p>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <MuiPickersUtilsProvider utils={DateMomentUtils}>
                        <DatePicker value={invoiceDate} onChange={setInvoiceDate} />

                    </MuiPickersUtilsProvider>

                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <p>email</p>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <TextField style={{ textAlign: 'center', alignItems: "center" }} variant="outlined" size="small" id={'name'} label={email} ></TextField>
                </Grid>


                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <p>phone</p>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <TextField style={{ textAlign: 'center', alignItems: "center" }} variant="outlined" size="small" id={'name'} onChange={onphoneChange} ></TextField>
                </Grid>





            </Grid>

            <br />
            <br />


            <br />
            <br />

            <TableContainer component={Paper}>

                <Table stickyHeader aria-label="sticky table" >



                    <TableBody>

                        {

                            estimate.map((item, index) => {
                                return <TableRow key={index}>


                                    <TableCell align="center">{item.title}</TableCell>

                                    <TableCell align="center">{item.description}</TableCell>
                                    <TableCell align="center">{item.sac}</TableCell>
                                    <TableCell align="center">{item.taxable}</TableCell>
                                    <TableCell align="center">{item.contract}</TableCell>





                                </TableRow>

                            })

                        }

                    </TableBody>

                </Table>

            </TableContainer>

            <br />
            <br />
            <br />


            <Grid container spacing={3} >



                <Grid item xs={12} md={6} lg={4} style={{ textAlign: 'center', alignItems: "center" }} >
                    <TextField style={{ textAlign: 'center', alignItems: "center" }} variant="outlined" size="small" onChange={onTitleChange} placeholder="short description" ></TextField>
                </Grid>

                <Grid item xs={12} md={6} lg={4} style={{ textAlign: 'center', alignItems: "center" }} >
                    <TextField style={{ textAlign: 'center', alignItems: "center" }} variant="outlined" size="small" onChange={onDescChange} placeholder="description"></TextField>
                </Grid>

                <Grid item xs={12} md={6} lg={4} style={{ textAlign: 'center', alignItems: "center" }} >
                    <TextField style={{ textAlign: 'center', alignItems: "center" }} variant="outlined" size="small" onChange={onSacChange} placeholder="SAC code"></TextField>
                </Grid>
                <Grid item xs={12} md={6} lg={4} style={{ textAlign: 'center', alignItems: "center" }} >
                    <TextField style={{ textAlign: 'center', alignItems: "center" }} variant="outlined" size="small" onChange={onTaxableChange} placeholder="taxable value" ></TextField>
                </Grid>

                <Grid item xs={12} md={6} lg={4} style={{ textAlign: 'center', alignItems: "center" }} >
                    <TextField style={{ textAlign: 'center', alignItems: "center" }} variant="outlined" size="small" onChange={onContractChange} placeholder="contract" ></TextField>
                </Grid>


                <Grid item xs={12} md={6} lg={4} style={{ textAlign: 'center', alignItems: "center" }} >
                    <Button style={{ backgroundColor: "#125689" }} onClick={addRow}>   Add new line   </Button>

                </Grid>

            </Grid>

            <br />
            <br />

            <Grid container spacing={3} >

                <Grid item xs={12} md={12} lg={12} style={{ textAlign: 'center', alignItems: "center" }} >
                    <Button style={{ backgroundColor: "#125689" }} onClick={onSubmit}>   Submit  </Button>

                </Grid>

            </Grid>





        </Container>
    )
}
export default AddInvoice;