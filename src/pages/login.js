
import React, { useState } from 'react';
import MaterialUIForm from 'react-material-ui-form'
import { TextField, Button } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";



//import { useHistory } from "react-router-dom";
import { useHistory } from "react-router-dom";

import axios from "axios"

import ClipLoader from "react-spinners/ClipLoader";


const Login = withStyles()(props => {

    const history = useHistory();

    //business logic
    const handleSubmit = async () => {

        let body = { email: email, password: password }


        let resp = await axios.post('http://143.198.168.131:3080/accounts/login', body, { mode: 'cors' });
        setLoading(true)
        setVisible('hidden')
        setTimeout(function () { setLoading(false); setVisible('visible') }, 1000);

        const d1 = new Date();
     
        const d2 = d1.getTime() + (8*60*60*1000)
     

      //  let history = useHistory();

        if(resp && resp.data && resp.data.token){

           
            
            localStorage.setItem('user', resp.data.token);
            localStorage.setItem('validity', d2);
            history.push("/");
        }

        

    }

    const forgotPassword = () => {
        console.log('forgot password')
    }

    //end of business logic

    //const history = useHistory();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false);

    const [visible, setVisible] = useState('visible');

    const emailChange = (e) => {
        setEmail(e.target.value);
    }

    const passwordChange = (e) => {
        setPassword(e.target.value);
    }







    return (


        <div   >


            <div style={{ textAlign: 'center' }}><ClipLoader align="center" loading={loading} size={75} /></div>
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', visibility: visible }}>
                <MaterialUIForm method="post" style={{ paddingBottom: '125px' }}>





                    <TextField id="outlined-basic-email" type="email" label="E mail"
                        rows={1} variant="outlined" name="email" size="small" fullWidth onChange={emailChange} />

                    <br />
                    <br />

                    <TextField id="outlined-basic-password" type="password" label="Password"
                        maxRows={1} variant="outlined" name="password" size="small" fullWidth onChange={passwordChange} />

                    <br />
                    <br />


                    <Button variant="contained" style={{ marginRight: "10px", backgroundColor: '#CE3311', color: '#FFFFFF' }} onClick={() => { forgotPassword() }}>Forgot Password</Button>
                    <Button variant="contained" style={{ marginLeft: "10px", backgroundColor: '#12824C', color: '#FFFFFF' }} onClick={() => { handleSubmit() }}>Sign In</Button>




                </MaterialUIForm>


            </div>
        </div>
    );
})

export default Login;