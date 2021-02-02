import React from 'react'
import { useHistory, Link } from 'react-router-dom' 
import styled from 'styled-components'
import '../App.css'
// import {EmailIcon, FacebookIcon, TwitterIcon} from "react-share"


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
     <Bod>
         <NavContainer>
            <NavTop>
            <   Link className="text-link" to="/">African Marketplace</Link>
            </NavTop>
         </NavContainer>
         <Banner></Banner>
         <Container onSubmit={onSubmit}>
           {errors && <div className= "errors">
               <div>{errors.userName}</div>
               <div>{errors.password}</div>
            </div>}

            <div>
            
            <H1>LOGIN</H1>
            <H2>Username</H2>
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
            <H2>Password</H2>
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

            <Button>
                <button id="submitBtn">LOGIN</button>
            </Button>
            
            </div>
            <Bottom>
                {/* <TwitterIcon size={40} round={true} />
                <FacebookIcon size={40} round={true} />
                <EmailIcon size={40} round={true} /> */}
            </Bottom>
         </Container>
         
     </Bod>
    )
    
}

export default LoginForm

const Bod = styled.div`
margin:0;
padding:0;
`

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
height: 5vh;
width: 100%;
text-align:center;
`
const Container = styled.form`
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
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
const NavContainer = styled.div`
background-color: #c3e3ff;
height: 7vh;
width: 100%;
`
const Button = styled.div`
margin: 15% 0%;
text-align:center;
`
const H1 = styled.h1`
text-align:center;
font-weight: bold;
font-size: 2rem;
`
const H2 = styled.h2`
text-align:center;
`

