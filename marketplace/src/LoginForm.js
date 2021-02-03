import axios from 'axios'
import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom' 
import styled from 'styled-components'
import './App.css'
// import {EmailIcon, FacebookIcon, TwitterIcon} from "react-share"

const initial = {
    username: '',
    password: ''
}

function LoginForm (props) {

    const [credentials, setCredentials] = useState(initial)

    const {values, submit, errors, change} = props

    const onChange = (evt) => {
        const {name, value} = evt.target
        setCredentials({
            ...credentials,
            [evt.target.name]: evt.target.value
        })
        
        change(name, value)
    }

    const onSubmit = (evt) => {
        evt.preventDefault()
        axios
            .post('https://african-marketplace-67/auth/login', credentials)
            .then(res => {
                console.log(res.data)
                submit()
                routeToMain()
            })
            .catch(err => {console.log(err)})
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
         {/* <Banner></Banner> */}
         <Container onSubmit={onSubmit}>
           {/* {errors && <div className= "errors">
               <div>{errors.userName}</div>
               <div>{errors.password}</div>
            </div>} */}

            {/* <div> */}
                {/* <LeftImg></LeftImg> */}

                <H1></H1>
                <H2>Username</H2>
                <label>
                    <input 
                        type ="text"
                        name ="userName"
                        value ={values.userName}
                        onChange={onChange}
                        placeholder='USERNAME'
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
                        placeholder='PASSWORD'
                        maxLength='50'
                    />
                </label>

                <Button>
                    <button id="submitBtn">ENTER</button>
                </Button>
                {/* <RightImg></RightImg> */}
            {/* </div> */}
            </Container>
            <Banner></Banner>
            {/* <Bottom>
                <TwitterIcon size={40} round={true} />
                <FacebookIcon size={40} round={true} />
                <EmailIcon size={40} round={true} /> 
            </Bottom>*/}
         
         
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
height: 30vh;
width: 100%;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`
const LeftImg = styled.img`
background-image: url('https://images.unsplash.com/photo-1524414621493-7dec026782c3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80');
height: 50vh;
width: 100%;
border: 4px solid #d3d2d2;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`
const RightImg = styled.img`
background-image: url('https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1051&q=80');
height: 50vh;
width: 100%;
border: 4px solid #d3d2d2;
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
margin: 5% 0%;
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

