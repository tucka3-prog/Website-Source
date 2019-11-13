import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import HeaderComponent from './HeaderComponent.jsx'
import Galery from "./Galery"
import UserGalery from "./UserGalery"

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <>
                        <HeaderComponent/>
                        <Switch>
                            <Route path="/my-firstwebsite/" exact component={Galery}/>
                            <Route path="/userGalery" component={UserGalery}/>
                            <Route component={Galery}/>
                        </Switch>
                       
                    </>
                </Router>
                {/*<LoginComponent/>
                <WelcomeComponent/>*/}
            </div>
        )
    }
}

export default TodoApp