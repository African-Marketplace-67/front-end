import React, { useState } from 'react'
import {editItem, addItem}  from '../actions/index'
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

const initialState = {
    location: '',
    name: '',
    description: '',
    price: ''
}

const ItemForm = ()=> {
    const [values, setValues] = useState(initialState);
    const history = useHistory();
    const params = useParams()
    const dispatch = useDispatch()


    const onSubmit = e => {
        e.preventDefault()
        if(history.location.pathname === `/edit-item/${params.id}`){
            dispatch(editItem(values))
            history.push('/mockMain')
        } else if (history.location.pathname === '/add-item') {
            dispatch(addItem(values))
            history.push('/mockMain')
        }
      }
    
      const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    
      return (
        <div>
          <NavContainer>
            <NavTop>African Marketplace</NavTop>
          </NavContainer>
          <Container onSubmit={onSubmit}>
              <H2>Add an item</H2>
              <Label>Name
                <input
                  value={values.name}
                  onChange={handleChange}
                  name='name'
                  type='text'
                />
              </Label>

              <Label>Location
                <input
                  value={values.location}
                  onChange={handleChange}
                  name='location'
                  type='text'
                />
              </Label>

              <Label>Price
                <input
                  value={values.price}
                  onChange={handleChange}
                  name='price'
                  type='text'
                />
              </Label>
      
              <Label>Description
                <input
                  value={values.description}
                  onChange={handleChange}
                  name='description'
                  type='text'
                />
              </Label>

              <button>Submit</button>
            
          </Container>
          <ImgContainer>
            <LeftImg></LeftImg>
            <RightImg></RightImg> 
          </ImgContainer>  
        </div>
      )}
export default ItemForm

const RightImg = styled.img`
background-image: url('https://images.unsplash.com/photo-1569614078353-2bf54d3acc0d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80');
height: 40vh;
width: 40%;
margin: 4%;
border: 4px solid #d3d2d2;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`
const LeftImg = styled.img`
background-image: url('https://images.unsplash.com/photo-1579705745811-a32bef7856a3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80');
height: 40vh;
width: 40%;
margin: 4%;
border: 4px solid  #d3d2d2;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
`
const ImgContainer = styled.div`
display:flex;
justify-content: space-around;
align-items: center;
flex-direction: row;
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
height: 6vh;
width: 100%;
`
const Label = styled.h3`
font-size: 1.5rem;
`
const H2 = styled.h2`
font-size: 3rem;
margin: 7% 0;
`