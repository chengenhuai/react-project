import React, { Component } from 'react'
import RouterView from "../router/RouterView"
import {NavLink} from "react-router-dom"
import '../css/style.css'

export default class componentName extends Component {
    render() {
        return (
            <div className='wrap'>
                <div className='wrap-section'>
                    <RouterView routes={this.props.routes}></RouterView>
                </div>
                <footer className='wrap-footer'>
                    <NavLink to='/index'>
                        <span>列表</span>
                    </NavLink>
                    <NavLink to='/user'>
                        <span>用户</span>
                    </NavLink>
                </footer>
            </div>
        )
    }
}
