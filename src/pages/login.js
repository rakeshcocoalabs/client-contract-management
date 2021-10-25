
 import React , {useState} from 'react';
 import MaterialUIForm from 'react-material-ui-form'
 import { TextField,Button } from '@material-ui/core';
 import { withStyles } from "@material-ui/core/styles";
 
 import { useHistory } from "react-router-dom";
 
 
 
 
 const Login = withStyles()(props => {
 
     const history = useHistory();
 
      const [email,setEmail] = useState("")
      const [password,setPassword] = useState("")
 
     const emailChange = (e) =>{
         setEmail(e.target.value);
     }
 
     const passwordChange = (e) =>{
         setPassword(e.target.value);
     }
 
 
     const handleSubmit = () => {
 
         if(email === "admin@company.com" && password === "123456"){
             let value = "123456"
             localStorage.setItem('token', value)
             history.push("/home", { from: "Login" })
         }
         else {
 
             alert('wrong credentials')
         }
     }
 
     const forgotPassword = () => {
         console.log('forgot password')
     }
 
 
 
     return (
         <div   >
             <div  style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh',}}>
                 <MaterialUIForm  method="post" style={{paddingBottom: '125px'}}>
 
 
 
                     
 
                     <TextField id="outlined-basic-email" type="email" label="E mail"
                         rows={1} variant="outlined" name="email" size="small" fullWidth  onChange={emailChange}/>
 
                     <br />
                     <br />
 
                     <TextField id="outlined-basic-password" type="password" label="Password"
                         maxRows={1} variant="outlined" name="password" size="small" fullWidth onChange={passwordChange} />
 
                         <br/>
                         <br/>
 
 
                         <Button variant="contained" style={{marginRight:"10px", backgroundColor: '#CE3311', color: '#FFFFFF'}} onClick={()=>{forgotPassword()}}>Forgot Password</Button>
                         <Button variant="contained" style={{marginLeft:"10px", backgroundColor: '#12824C', color: '#FFFFFF'}} onClick={()=>{handleSubmit()}}>Sign In</Button>
 
 
 
 
                 </MaterialUIForm>
             </div>
         </div>
     );
 })
 
 export default Login;