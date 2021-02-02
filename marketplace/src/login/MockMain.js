import React from 'react'
import { Link } from 'react-router-dom'

function MockMain () {
    return (
        <div>mockMain
            <Link className="text-link" to="/login">LOGIN</Link>
        </div>
    )
}

export default MockMain

