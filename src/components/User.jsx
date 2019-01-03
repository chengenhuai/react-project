import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return (
            <div>
                <p>您当前的登录状态为:未登录</p> 
                <button>点击登录</button>
            </div>
        )
    }
}
