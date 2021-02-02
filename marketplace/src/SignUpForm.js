import React, {useState} from "react";
import { useHistory } from "react-router-dom";



export default function SignupForm(props){

const {values, submit, change, disable, errors} = props


const onChange = (evt) => {
  const {name, value}= evt.target;
  change(name,value)
};

const onSubmit = (evt) => {
  evt.preventDefault()
  submit()
  routeToMain()
}


const history = useHistory()
const routeToMain = () => {
  history.push(('/mockMain'))
}


return (

  <div className="container">
    <div className="errordiv">
      <div>{errors.username}</div>
      <div>{errors.firstname}</div>
      <div>{errors.lastname}</div>
      <div>{errors.email}</div>
      <div>{errors.password}</div>
      <div>{errors.passwordConfirmation}</div>
    </div>
    <div className="subcon">
    <h1>Sign up here.</h1>
      <form onSubmit={onSubmit}>
      <label>Username:</label>
        <input type="text" name="username" value={values.username} onChange={onChange} ></input>
        <label>First Name:</label>
        <input type="text" name="firstname" value={values.firstname} onChange={onChange} ></input>
        <label>Last Name:</label>
        <input type="text" name="lastname" value={values.lastname} onChange={onChange} ></input>
        <label>Email:</label>
        <input type="email" name="email" value={values.email} onChange={onChange} ></input>
        <label>Password:</label>
        <input type="password" name="password" value={values.password} onChange={onChange}></input>
        <label>Confirm Password:</label>
        <input type="password" name="passwordConfirmation" value={values.passwordConfirmation} onChange={onChange}></input>
      </form>
      <button id="subbutton" disabled={disable}>submit</button>
    </div>
  </div>



)
}


