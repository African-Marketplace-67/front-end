import React, {useState} from "react";
import { useHistory, Link } from "react-router-dom";
import styled from 'styled-components'


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
  <Bod>
  <NavContainer>
            <NavTop>
            <   Link className="text-link" to="/">African Marketplace</Link>
            </NavTop>
         </NavContainer>
 <Container onSubmit={onSubmit}>
  <div className="container">
    <Banner></Banner>
    <div className="subcon">
    <h1>Sign up here.</h1>
      <form >
      <label>Username:</label>
        <input type="text" name="userName" value={values.userName} onChange={onChange} ></input>
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
    <div className="errordiv">
      <div>{errors.userName}</div>
      <div>{errors.firstname}</div>
      <div>{errors.lastname}</div>
      <div>{errors.email}</div>
      <div>{errors.password}</div>
      <div>{errors.passwordConfirmation}</div> 
    </div>
  </div>
  </Container>
  </Bod>


)
}

const Bod = styled.div`
margin:0;
padding:0;
`
const NavContainer = styled.div`
background-color: #c3e3ff;
height: 7vh;
width: 100%;
`
const Banner = styled.div`
background-image: url('https://cdn.lifehack.org/wp-content/uploads/2016/01/15145741/Holding-hands-feature.jpg');
height: 60vh;
width: 100%;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`
const NavTop = styled.nav`
/* background-color: #c3e3ff;
height: 7vh;
width: 100%; */
font-size: 2rem;
font-weight: bold;
margin-left: 2%;

:hover {
color: aliceblue
}
`
const Container = styled.form`
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
`