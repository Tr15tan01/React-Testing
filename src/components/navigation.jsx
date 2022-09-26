import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className="navigation">
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="/counter">Counter</Link> |{" "}
                <Link to="/todo">Todo</Link>
                <Link to="/reducer">Reducer</Link>
                <Link to="/redux">Redux</Link>
                <Link to="/toolkit">ReduxToolit</Link>
            </nav>
        </div>
    )
}

export default NavBar;