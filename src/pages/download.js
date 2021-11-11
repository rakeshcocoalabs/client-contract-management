import React, { useState, useEffect } from "react";
import { Button, Select, MenuItem } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import { Grid, FormControl } from '@material-ui/core'

import axios from "axios";
//import { saveAs } from "file-saver";

import CustomSelect from "../component/customselect.js";

//import { saveAs } from "file-saver";

import DateMomentUtils from '@date-io/moment';
import {
    DatePicker,

    MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import Table from '@material-ui/core/Table';

import TableBody from '@material-ui/core/TableBody';

import TableCell from '@material-ui/core/TableCell';

import TableContainer from '@material-ui/core/TableContainer';

//import TableHead from '@material-ui/core/TableHead';

import TableRow from '@material-ui/core/TableRow';

import Paper from '@material-ui/core/Paper';
import { useHistory } from "react-router";

// import Pagination from '@material-ui/lab/Pagination';

//import axios from 'axios';





function Download() {
    var history = useHistory()
    var data1 = []
    //var estimate = [{ invNum: "22548", invDate: "23/08/21", description: "hello teting" }, { invNum: "22548", invDate: "23/08/21", description: "hello teting" }]
    // eslint-disable-next-line
    const [invoiceDate1, setInvoiceDate1] = React.useState(new Date())
    // eslint-disable-next-line
    const [invoiceDate2, setInvoiceDate2] = React.useState(new Date())
    const [clients, setClients] = useState([])
    // eslint-disable-next-line
    const [invoices, setInvoices] = useState([])
    const [mounted, setMounted] = useState(false)
    // eslint-disable-next-line
    const [t1, setT1] = useState(0)
    // eslint-disable-next-line
    const [t2, setT2] = useState(0)

    const [name, setName] = useState("")



    useEffect(() => {

        let validity = localStorage.getItem('validity')

        const d1 = new Date();

        const d2 = d1.getTime()

        if (d2 > validity) {
            history.push("/login");
        }


        if (mounted === false) {
            setMounted(true)
            showClients()

        }

        if (clients.length > 0) { console.log(clients[0]) }
        // eslint-disable-next-line
    }, [clients])

    const showClients = async () => {
        var url = "http://143.198.168.131:3080/clients/list-clients"



        try {
            const resp = await axios.get(url);

            if (resp && resp.data && resp.data.output) {

                setClients(resp.data.output)
                console.log(clients)
            }
        }
        catch (err) {
        }
    }
    // eslint-disable-next-line

    const dateChanged1 = (e) => {

        let date = new Date(e); // some mock date
        let milliseconds = date.getTime();

        setT1(milliseconds);

        setInvoiceDate1(date)

    }

    const dateChanged2 = (e) => {
        let date = new Date(e); // some mock date
        let milliseconds = date.getTime();

        setT2(milliseconds);

        setInvoiceDate2(date)
    }

    const search = async () => {

        if (name === "") {
            return alert("please fill client name")
        }

        if (t1 === 0) {
            return alert("please fill start date")
        }

        if (t2 === 0) {
            return alert("please fill end date")
        }

        var url = "http://143.198.168.131:3080/clients/list-invoices"

        var query = `?T1=${t1}&T2=${t2}&client=${name}`

        url = url + query

        try {
            const resp = await axios.get(url);
            if (resp && resp.data && resp.data.output) {
                setInvoices(resp.data.output)
            }
        }
        catch (err) {
        }
    }

    const selectName = (e) => {

        let index= e.target.value;
        let item = clients[index]

        setName(item.name)

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
                    <FormControl style={{ minWidth: '200px', margin: "1px" }}>

                        <Select onChange={selectName}>
                            {clients.map((post, key) =>
                                <MenuItem value={key}>
                                    {post.name}
                                </MenuItem>
                            )}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <p>Invoice ID</p>
                </Grid>
                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <FormControl style={{ minWidth: '200px', margin: "1px" }}>

                        <CustomSelect data={data1} />
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <p>Start date</p>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <MuiPickersUtilsProvider utils={DateMomentUtils}>
                        <DatePicker value={invoiceDate1} onChange={dateChanged1} />

                    </MuiPickersUtilsProvider>

                </Grid>
                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <p>End date</p>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <MuiPickersUtilsProvider utils={DateMomentUtils}>
                        <DatePicker value={invoiceDate2} onChange={dateChanged2} />

                    </MuiPickersUtilsProvider>

                </Grid>
                <Grid item xs={12} md={12} lg={12} style={{ textAlign: 'center', alignItems: "center" }} >
                    <Button style={{ backgroundColor: "#1583fe", fontSize: "14", borderRadius: "22" }} onClick={search}> <span style={{ fontSize: "14", font: "Helvetica-Bold" }}>Search</span></Button>
                </Grid>



            </Grid>

            <br />
            <br />
            <TableContainer component={Paper}>

                <Table stickyHeader aria-label="sticky table" >



                    <TableBody>

                        {

                            invoices.map((item, index) => {
                                return <TableRow key={index}>

                                    <TableCell align="center">{item.number}</TableCell>

                                    <TableCell align="center">{item.date}</TableCell>
                                    <TableCell align="center">{item.description}</TableCell>
                                    <TableCell align="center"> <a href={item.path} rel="noreferrer" target="_blank">download</a></TableCell>
                                    {console.log(item.path)}
                                </TableRow>
                            })

                        }

                    </TableBody>

                </Table>

            </TableContainer>
        </Container>
    )
}



export default Download;

