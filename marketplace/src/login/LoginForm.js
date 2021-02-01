import React from 'react'
import { useHistory, Link } from 'react-router-dom' 
import styled from 'styled-components'
import '../App.css'

function LoginForm (props) {

    const {values, submit, errors, change} = props

    const onChange = (evt) => {
        const {name, value} = evt.target
        
        change(name, value)
    }

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
     <div>
         <NavTop>
         <Link className="text-link" to="/">African Marketplace</Link>
         </NavTop>
         <Banner></Banner>
         <Container onSubmit={onSubmit}>
           {errors && <div className= "errors">
               <div>{errors.userName}</div>
               <div>{errors.password}</div>
            </div>}

            <div>
            
            <h1>LOGIN</h1>
            <h2>Username</h2>
            <label>
                <input 
                    type ="text"
                    name ="userName"
                    value ={values.userName}
                    onChange={onChange}
                    placeholder='enter your username'
                    maxLength='50'
                />
            </label>
            <h2>Password</h2>
            <label>
                <input 
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={onChange}
                    placeholder='enter your password'
                    maxLength='50'
                />
            </label>

            <div>
                <button id="submitBtn">LOGIN</button>
            </div>
            
            </div>
            <Bottom></Bottom>
         </Container>
         
     </div>
    )
    
}

export default LoginForm

const Banner = styled.div`
background-image: url('https://images.unsplash.com/photo-1452804882841-573355623310?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
height: 40vh;
width: 100%;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`
const Bottom = styled.div`
background-color: #c3e3ff;
height: 15vh;
width: 100%;
`
const Container = styled.form`
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Nav = styled.nav`
margin: 1.5%;
`
const NavTop = styled.nav`
background-color: #c3e3ff;
height: 7vh;
width: 100%;
font-size: 2rem;
`