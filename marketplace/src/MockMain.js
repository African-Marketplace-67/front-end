import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { getItems, editItem, deleteItem } from '../src/actions/index'
import { useHistory } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'

const Wrapper = styled.div``

const Nav = styled.div`
  background-color: #c3e3ff;
  height: 7vh;
  display:flex;
  width:100%;
  justify-content:space-between;
  
`;
const NavTop = styled.nav`
  font-size: 2rem;
  font-weight: bold;
  margin-left: 2%;
    display:flex;
  :hover {
    color: aliceblue;
  }
  float:left;
`;

const Image = styled.img`
    height: 950px;
    width: 100%;

    
`

const ItemDisplay = styled.div`
    display: flex;
    flex-flow: wrap;
    justify-content: space-evenly;
`

const Welcome = styled.div`
    display: inline-block;
    justify-content: center;
    align-items: center;
    color:red;
    font-size: 64pt;
    font-weight: 700;
`
const To = styled.div`
    display: inline-block;
    justify-content: center;
    align-items: center;
    color:black;
    font-size: 64pt;
    font-weight: 700;
`
const The = styled.div`
    display: inline-block;
    justify-content: center;
    align-items: center;
    color:black;
    font-size: 64pt;
    font-weight: 700;
`

const Market = styled.div`
    display: inline-block;
    justify-content: center;
    align-items: center;
    color:green;
    font-size: 64pt;
    
    font-weight: 700;
    
    
`


const ItemWrapper = styled.div`
    background: #FF7373;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .15);
    width: 20rem;
    margin: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const NavLink = styled.div`
    align-items: center;
    justify-content: right;
    display:flex;
    flex:right;
    width: 300px;
`
const ALink = styled.a`
  padding:10px;
  

`
const ImageDiv = styled.div`
  margin: 10px 85px 15px 85px;
`
const Title = styled.div`
  display:flex;
  justify-content:space-around;
`

const ItemButton = styled.button`
  background-color:#5AC18E;
  border-width:1px;


`

function MockMain ({items}) {
    const history = useHistory()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getItems())
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token')
    }

    return (
        <Wrapper>
            <Nav>
                <NavTop>
                <Link className="text-link" to="/">
                 African Marketplace
                 </Link>
                </NavTop>
                <NavLink>
                    <Link to='/add-item'><ALink>Item Form</ALink></Link>
                    <Link  className="ALink"  to='/' onClick={handleLogout}><ALink>Logout</ALink></Link>
                </NavLink>
            </Nav>
            <ImageDiv>
                <Title>
                    <Welcome>
                    Welcome
                    </Welcome>
                    
                    <To>
                    to 
                    </To> 
                    <The>
                    the
                    </The>
                    <Market>
                    Market!    
                    </Market>
                </Title>
                <Image src='https://images.unsplash.com/photo-1533900298318-6b8da08a523e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' />

                
            
            </ImageDiv>
            <ItemDisplay>
                {items.map((item) => {
                    return (
                        <ItemWrapper>
                            <h3>{item.name}</h3>
                            <h4>Price: {item.price}</h4>
                            <h4>Description: {item.description}</h4>
                            <h4>Location: {item.location}</h4>
                            <ItemButton onClick={(event) => {
                                event.preventDefault()
                                history.push(`/edit-item/${item.id}`)
                            }}>Edit</ItemButton>
                            <ItemButton onClick={()=>{
                                dispatch(deleteItem(item))
                            }}>Delete</ItemButton>
                        </ItemWrapper>
                    )
                })}
            </ItemDisplay>
            
        </Wrapper>
        
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        items: state.items
    }
}

export default connect(mapStateToProps, { getItems, editItem })(MockMain)

