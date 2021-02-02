import './App.css';
import React, { useState } from 'react'
import MockHome from './login/MockHome'
import LoginForm from './login/LoginForm.js'
import MockMain from './login/MockMain'
import axios from 'axios'
import { Route, Switch} from 'react-router-dom'
import * as yup from 'yup'
import schema from './login/FormSchema'

const initialFormValues = {
  userName: '',
  password: ''
}

const initialFormErrors = {
  userName: '',
  password: ''
}
// const initialValues = []

function App() {

  const [login, setLogin] = useState({})
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [passwordShown, setPasswordShown] = useState(false) 

  const postNewLogin = (newLogin) => {
    axios
    .post('https://reqres.in/api/users', newLogin)
    .then((res) => {
      console.log("reqres res", res.data)
      setLogin(res.data)
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

  const submit = () => {
    const newLogin = {
      userName: formValues.userName.trim(),
      password: formValues.password.trim()
    }

    postNewLogin(newLogin)
  }

  return (
    <div className="App">
      <Switch>
        <Route path="/login">
          <LoginForm
            values={formValues}
            submit={submit}
            errors={formErrors}
            login={login}
            change={inputChange}
            />
        </Route>

        <Route path="/MockMain">
          <MockMain />
        </Route>

        <Route exact path="/">
          <MockHome />
        </Route>
      </Switch>
    </div>
  );
}

export default App;



