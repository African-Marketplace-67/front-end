import './App.css';
import React, { useState, useEffect } from 'react'
import Home from './Home'
import LoginForm from './LoginForm.js'
import MockMain from './MockMain'
import axios from 'axios'
import { Route, Switch} from 'react-router-dom'
import * as yup from 'yup'
import schema from './formSchema'
import SignUpForm from "./SignUpForm"


const memberList = [];
const initialFormValues = {
   userName:"", 
   firstname: "", 
   lastname:"", 
   email:"", 
   password:"", 
   passwordConfirmation:""
  };
const initialFormErrors = {
   userName:"", 
   firstname: "", 
   lastname:"", 
   email:"", 
   password:"", 
   passwordConfirmation:""
  };
const initialDisable = true;
const initialLogin = {
  userName: "",
  password: ""
};

function App() {
  const [ member , setMember ] = useState(memberList)
  const [login, setLogin] = useState(initialLogin) // Add initialLogin to state. Changed to setLogin and on line 81.
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors)
 // const [passwordShown, setPasswordShown] = useState(false) // not sure we need this.
  const [ disable, setDisable ] = useState(initialDisable)

  const getMember = (newMember) => {
    axios
    .post('https://reqres.in/api/users', newMember)
    .then((res) => {
      setMember([...member, ])
      setMember(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const inputChange = (name, value) => {
    yup
    .reach(schema, name)
    .validate(value)
    .then(() => {
      setFormErrors ({
        ...formErrors,
        [name]: "",
      })
    })
    .catch((err)=>{
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0]
      })
    })
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const onSubmit = () => {
    const newLogin = {
      userName: formValues.userName.trim(),
      password: formValues.password.trim()
    }
    setLogin(newLogin)
  }

  const formSubmit = () => {
    const newMember = {
      username:formValues.username.trim(),
      firstname:formValues.firstname.trim(),
      lastname:formValues.lastname.trim(),
      email:formValues.email.trim(),
      password:formValues.password.trim(),
      passwordConfirmation:formValues.passwordConfirmation.trim()
    }
  }

  useEffect(() => {
    getMember()
  },[])

  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      setDisable(!valid)
    })
  },[formValues])

  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <LoginForm
            values={formValues}
            submit={onSubmit}
            errors={formErrors}
            login={login}
            change={inputChange}
            disabled={disable}
            />
        </Route>

        <Route path="/SignUpForm">
          <SignUpForm
            values={formValues}
            submit={onSubmit}
            errors={formErrors}
            change={inputChange}
            disabled={disable}
            />
        </Route>


        <Route path="/MockMain">
          <MockMain />
        </Route>

      

        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;



