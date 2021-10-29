import React, { useEffect } from "react";
// import { Button, TextField } from '@material-ui/core'
// import Container from '@material-ui/core/Container'
// import { Grid, FormControl } from '@material-ui/core'

// import CustomSelect from "../component/customselect.js";

// import Table from '@material-ui/core/Table';

// import TableBody from '@material-ui/core/TableBody';

// import TableCell from '@material-ui/core/TableCell';

// import TableContainer from '@material-ui/core/TableContainer';

// import TableHead from '@material-ui/core/TableHead';

// import TableRow from '@material-ui/core/TableRow';

// import Paper from '@material-ui/core/Paper';

// import Pagination from '@material-ui/lab/Pagination';

import axios from 'axios';





function Home() {

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


    let validity = localStorage.getItem('validity')

    makeAPICall();

    // eslint-disable-next-line
  }, [search, status, page])

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

  const makeAPICall = async () => {
    try {

      var url = 'http://localhost:3080/clients/list-project?'

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

        console.log("1", arr)
        let outArr = []

        for (let x = 0; x < arr.length; x++) {
          let item = arr[x];
          console.log("2", Object.keys(item))
          if (item) {
            if (item.clientId) {
              console.log("hi", item)
              var obj1 = {
                project: item.project,
                client: item.clientId.contactName,
                status: "active"
              }
            }
          }
          outArr.push(obj1)
        }


        setDataSet(outArr)

      }
    }
    catch (e) {
      console.log(e.message)
    }

  }


  return (
    <h1>home</h1>
  )


}



export default Home;