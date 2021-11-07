import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, TextField } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import { Grid, FormControl } from '@material-ui/core'

import CustomSelect from "../component/customselect.js";

import Table from '@material-ui/core/Table';

import TableBody from '@material-ui/core/TableBody';

import TableCell from '@material-ui/core/TableCell';

import TableContainer from '@material-ui/core/TableContainer';

import TableHead from '@material-ui/core/TableHead';

import TableRow from '@material-ui/core/TableRow';

import Paper from '@material-ui/core/Paper';

import Pagination from '@material-ui/lab/Pagination';

import axios from 'axios';



function Home() {

  const history = useHistory();

  var data1 = [
    {
      id: "active",
      name: "Active"
    },
    {
      id: "dropped",
      name: "Dropped"
    },
    {
      id: "completed",
      name: "Completed"
    }
  ];


  const [dataSet, setDataSet] = React.useState([]);

  const [search, setSearch] = React.useState('');

  const [status, setStatus] = React.useState('');

  const [page, setPage] = React.useState(1);


  // const handleChange = (event) => {
  //   setValue(event.target.value)
  // }

  useEffect(() => {
    console.log("heloo rakesh")
    let validity = localStorage.getItem('validity')

    if (validity) {
      const d1 = new Date();

      const d2 = d1.getTime()

      if (d2 > validity) {
        history.push("/login");
      }
    }



    if (dataSet.length === 0) {
      makeAPICall();
    }

    // eslint-disable-next-line
  }, [search, status, page, dataSet])

  const pageNumberUpdated = (event, data) => {

    console.log(data)
    setPage(data)
  }

  const changeStatus = (event) => {



    setStatus(event.target.value)


  }

  const onSearch = (e) => {

    console.log("ji", search)
    console.log("pi", e.target.value)
    setSearch(e.target.value);
    console.log("xi", search)

  }

  const editclient = (e) => {
    localStorage.setItem('client', e);
    history.push("/edit-client");
  }

  const makeAPICall = async () => {
    try {

      var url = 'http://143.198.168.131:3080/clients/list-project?'

      console.log("hi", search)

      if (search.length > 0 && status.length > 0) {
        url = url + 'search=' + search + '&status=' + status;
      }
      else if (search !== '') {
        url = url + 'search=' + search;
      }
      else if (status !== '') {
        url = url + 'status=' + status;
      }






      url = url + "&page=" + page

      console.log(url);


      const response = await axios.get(url, { mode: 'cors' });



      if (response && response.data && response.data.output) {

        let arr = response.data.output

        console.log(arr)
        setDataSet(arr)


      }
    }
    catch (e) {
      console.log(e.message)
    }

  }


  return (
    <Container>



      <div >
        <Grid container spacing={3} >

          <Grid item xs={12} md={12} lg={12} style={{ marginTop: '10px', textAlign: 'right' }} >
            <Button variant="contained" color="primary">Add new client</Button>
          </Grid>

          <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
            <p>Seacrch client</p>
          </Grid>

          <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
            <TextField label="Clients" style={{ textAlign: 'center', alignItems: "center" }} variant="outlined" size="small" onChange={onSearch}></TextField>
          </Grid>

          <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
            <p>Status</p>
          </Grid>

          <Grid item xs={12} md={6} lg={3} style={{ textAlign: 'center', alignItems: "center" }} >
            <FormControl style={{ minWidth: '200px', margin: "1px" }}>


              <CustomSelect data={data1} onSelectChange={changeStatus} />
            </FormControl>

          </Grid>

        </Grid>

        <br />
        <br />
        <br />


        <TableContainer component={Paper}>

          <Table stickyHeader aria-label="sticky table" >

            <TableHead>

              <TableRow>



                <TableCell align="center">Name</TableCell>

                <TableCell align="center">Project</TableCell>

                <TableCell align="center">Status</TableCell>



              </TableRow>

            </TableHead>

            <TableBody>

              {
                dataSet.map((p) => {
                  // eslint-disable-next-line
                  { console.log(p) }
                  return <TableRow >
                    <TableCell align="center" ><p onClick={() => { editclient(p.name) }} value={p.name}>{p.name}</p></TableCell>
                    <TableCell align="center">{p.project}</TableCell>
                    <TableCell align="center">{p.status}</TableCell>
                  </TableRow>
                })
              }

            </TableBody>

          </Table>

        </TableContainer>

        <br />
        <br />
        <div style={{ textAlign: "center" }} align="center">

          <Pagination style={{ display: "inline-block" }} count={10} onChange={pageNumberUpdated} />
        </div>
      </div>
    </Container>)


}



export default Home;