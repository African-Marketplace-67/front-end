import React from 'react'
import { Link } from 'react-router-dom'

function MockHome () {
    return (
        <div>Mock Homepage
            <div>
                <Link className="text-link" to="/login">LOGIN</Link>
            </div>
        </div>
        )
} 

export default MockHome

