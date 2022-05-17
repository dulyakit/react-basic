import React, { Component } from 'react'

export default class event extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: 'first'
        }
        // กรณีที่ไม่ใช้ arrow function ต้องเรียกใช้ฟังก์ชั่นแบบนี้
        // this.handleClick = this.handleClick.bind(this)
    }

    handleClick = () => {
        console.log('click')
        this.setState({ text: 'second' })
    }

    render() {
        return (
            <div>
                {this.state.text}
                <button onClick={this.handleClick} >click</button>
            </div>
        )
    }
}
