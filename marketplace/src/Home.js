import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

function Home () {
    return (
        <div>
            <NavContainer>
                <NavTop>
                    <Link className="text-link" to="/">African Marketplace</Link>
                </NavTop>
                
            </NavContainer>
            <Banner></Banner>
            <H2>Sauti Africa empowers small business owners, particularly women, to improve <br /> their business and economic opportunities to grow out of poverty.</H2>
            <Container>
                <LeftImg></LeftImg>
                    <LinkContainer>
                    <Button>
                        <Link className="text-link" to="/login"> Welcome Back </Link>
                    </Button>
                    <Button>
                        <Link className="text-link" to="/SignUpForm"> Join the <br /> Team </Link>
                    </Button>
                    </LinkContainer>
                <RightImg></RightImg>
            </Container>  
            <Bottom></Bottom>
        </div>
        )
} 

export default Home

const Banner = styled.div`
background-image: url('https://images.unsplash.com/photo-1567306181708-17c7a7457192?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1038&q=80');
height: 40vh;
width: 100%;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`
const RightImg = styled.img`
background-image: url('https://images.unsplash.com/photo-1571051549906-a659836d71f9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80');
height: 40vh;
width: 40%;
border: 4px solid #d3d2d2;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`
const LeftImg = styled.img`
background-image: url('https://images.unsplash.com/photo-1579705745811-a32bef7856a3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80');
height: 40vh;
width: 40%;
border: 2px solid  #d3d2d2;
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
justify-content: space-around;
align-items: center;
flex-direction: row;
`
const NavTop = styled.nav`
font-size: 2rem;
font-weight: bold;
margin-left: 2%;
`
const NavContainer = styled.div`
background-color: #c3e3ff;
height: 7vh;
width: 100%;
`
const Button = styled.h3`
margin: 15% 0%;
padding: .25%;
text-align:center;
background: #c3e3ff;
border: 4px groove black;
`
const LinkContainer = styled.h2`
display: flex;
flex-direction: column;
`
const H2 = styled.h2`
text-align:center;
`