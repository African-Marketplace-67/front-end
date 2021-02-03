import React, { useState } from 'react'
import {editItem, addItem} from '../actions/index'
import { useHistory } from "react-router-dom";
const initialState = {
    location: '',
    name: '',
    description: '',
    price: ''
}

const ItemForm = ()=> {
    const [values, setValues] = useState(initialState);
    const history = useHistory();

    const onSubmit = e => {
        e.preventDefault()
        if(history.location.pathname === '/edit-item'){
            editItem(values)
            history.push()
        } else if (history.location.pathname === '/add-item') {
            addItem(values)
            history.push()
        }
      }
    
      const handleChange = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    
      return (
        <form onSubmit={onSubmit}>
            <h2>Add an item</h2>
            <label>Name;
              <input
                value={values.name}
                onChange={handleChange}
                name='name'
                type='text'
              />
            </label>

            <label>Location
              <input
                value={values.email}
                onChange={handleChange}
                name='email'
                type='text'
              />
            </label>

            <label>Price
              <input
                value={values.price}
                onChange={handleChange}
                name='price'
                type='text'
              />
            </label>
    
            <label>Decription
              <input
                value={values.decription}
                onChange={handleChange}
                name='description'
                type='text'
              />
            </label>

            <button>Submit</button>
        </form>
      )}
export default ItemForm