import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class HeaderComponent extends Component {
    render() {


        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="https://tucka3-prog.github.io/my-firstwebsite/" className="navbar-brand">EricsMemes</a></div>
                    <ul className="navbar-nav">
                    <li><Link className="nav-link" to="/my-firstwebsite" >Galery</Link></li>}
                    <li><Link className="nav-link" to="/userGalery" >User Galery</Link></li>}
                    </ul>
      
                </nav>
            </header>
        )
    }
}

export default HeaderComponent