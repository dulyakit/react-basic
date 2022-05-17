import React, { Component, PureComponent } from 'react'

// PureComponent  render แค่บางครั้ง แต่ component จะ render  ทุกครั้งที่เปลี่ยนแปลง
export default class index extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { textSearch: '' }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log("-----Start Debug-----");
        console.log("==getDerivedStateFromProps==");
        // console.log('nextProps -->', nextProps);
        // console.log('prevState -->', prevState);
        // return {
        //     textSearch: 'new state'
        // }
    }

    componentDidMount() {
        console.log("==componentDidMount==");
        // call service
    }

    componentDidUpdate(preProps, prevState) {
        console.log("==componentDidUpdate==");
        console.log('preProps -->', preProps);
        console.log('prevState -->', prevState);
        console.log('nextState -->', this.state);
    }

    componentWillUnmount() {
        console.log("==componentWillUnmount==");
        // call service
    }

    handleChangeText = (event) => {
        this.setState({ textSearch: event.target.value })
    }

    render() {
        console.log(this.state);
        return (
            <>
                {this.props.children} <input type="text" style={{ width: "50%" }} value={this.state.textSearch} onChange={this.handleChangeText} />
            </>
        )
    }
}
