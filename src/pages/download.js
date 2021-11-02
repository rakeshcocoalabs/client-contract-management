import React from "react";
import { TextField, Button } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import { Grid, FormControl } from '@material-ui/core'

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

// import Pagination from '@material-ui/lab/Pagination';

//import axios from 'axios';





function Download() {
    var data1 = []
    var estimate = [{ invNum: "22548", invDate: "23/08/21", description: "hello teting" }, { invNum: "22548", invDate: "23/08/21", description: "hello teting" }]
    const [invoiceDate, setInvoiceDate] = React.useState(new Date())


    

    return (
        <Container>
            <br />
            <br />
            <Grid container spacing={3} >
                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <p>Client name</p>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <TextField style={{ textAlign: 'center', alignItems: "center" }} variant="outlined" size="small" label="Client name"></TextField>
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
                        <DatePicker value={invoiceDate} onChange={setInvoiceDate} />

                    </MuiPickersUtilsProvider>

                </Grid>
                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <p>End date</p>
                </Grid>

                <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
                    <MuiPickersUtilsProvider utils={DateMomentUtils}>
                        <DatePicker value={invoiceDate} onChange={setInvoiceDate} />

                    </MuiPickersUtilsProvider>

                </Grid>
                <Grid item xs={12} md={12} lg={12} style={{ textAlign: 'center', alignItems: "center" }} >
                    <Button style={{ backgroundColor: "#1583fe", fontSize: "14", borderRadius: "22" }}> <span style={{ fontSize: "14", font: "Helvetica-Bold" }}>Search</span></Button>
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

                                    <TableCell align="center">{item.invNum}</TableCell>

                                    <TableCell align="center">{item.invDate}</TableCell>
                                    <TableCell align="center">{item.description}</TableCell>
                                    <TableCell align="center"> <a href={"http://localhost/D:/client-contract-server/files/example.pdf"} download>Download</a></TableCell>
                                    



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

