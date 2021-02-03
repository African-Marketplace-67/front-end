import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { getItems, editItem } from './actions/index'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'

const Wrapper = styled.div``

const Nav = styled.div`
    display: flex;
    flex-direction: column;
`

const Image = styled.img`
    height: 60vh;
    width: 100%;
`

const ItemDisplay = styled.div`

`

const Welcome = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const ItemWrapper = styled.div``

const ItemButton = styled.button``

function MockMain ({items}) {
    const history = useHistory()

    useEffect(() => {
        getItems()
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('token')
    }

    return (
        <Wrapper>
            <Welcome>
                Welcome to the Market!
            </Welcome>
            <Nav>
                <Link to='/' onClick={handleLogout}>Logout</Link>
                <Link to='/items:id'>Item Form</Link>
            </Nav>
            <Image src='https://images.unsplash.com/photo-1533900298318-6b8da08a523e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80' />
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
                                editItem(item)
                                history.push('/items/:id')
                            }}>Edit/Delete</ItemButton>
                        </ItemWrapper>
                    )
                })}
            </ItemDisplay>
        </Wrapper>
    )
}

const mapStateToProps = state => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps, { getItems, editItem })(MockMain)

