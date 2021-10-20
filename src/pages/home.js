import React, { useEffect } from "react";
import { Button, Select, TextField, MenuItem } from '@material-ui/core'
import Container from '@material-ui/core/Container'
import { Grid, FormControl } from '@material-ui/core'

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

  const [value, setValue] = React.useState('')
  const [loading, setLoading] = React.useState(0)
  const [dataSet,setDataSet] = React.useState([]);
  const handleChange = (event) => {
    setValue(event.target.value)
  }
  const makeAPICall = async (obj) => {
    try {

      var url = 'http://143.198.168.131:9000/clients/list-project'
      if (obj && obj.search){
        url = 'http://143.198.168.131:9000/clients/list-project?search=' + obj.search;
      }

      const response = await axios.get(url, {mode:'cors'});
    
      if(response && response.data && response.data.output){

        let arr = response.data.output
       
        let outArr = []

        for (let x=0;x <arr.length;x++){
          let item = arr[x];
          let obj = {
            project:item.project,
            client:item.clientId.contactName,
            status:item.status
          }
          outArr.push(obj)
        }
      

          setDataSet(outArr)
      }
    }
    catch (e) {
      console.log(e.message)
    }
    setLoading(1)
  }
  useEffect(() => {
    if(loading === 0) {
      makeAPICall({});
    }
    // eslint-disable-next-line
  }, [])


  const onSearch = (e) => {

    makeAPICall({search:e.target.value});
  }
 

    return (
      <Container>
  
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
  
              <Select
                id="select-demo"
                labelId="select-demo"
                value={value}
                onChange={handleChange}
              >
  
                <MenuItem value={"active"}>active</MenuItem>
                <MenuItem value={"completed"}>completed</MenuItem>
                <MenuItem value={"dropped"}>dropped</MenuItem>
  
              </Select>
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
  
                dataSet.map((p, index) => {
                  return <TableRow key={index}>
  
  
                    <TableCell align="center">{p.client}</TableCell>
  
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
  
          <Pagination style={{ display: "inline-block" }} count={10} />
        </div>
      </Container>
    )

  
}

  
 
export default Home;