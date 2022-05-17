import React, { useCallback, useState, useEffect } from 'react'

export default function usecallback() {

    const [color, setColor] = useState('white')
    const [number, setNumber] = useState(0)

    const funcX = useCallback(() => {
        console.log('in function')
        return 'John'
    }, [number])

    // const funcX = () => {
    //     console.log('in function')
    //     return 'John'
    // }

    return (
        <div style={{ background: color }}>
            <h1>Use Callback</h1>
            <button onClick={() => setColor((color === 'white') ? 'gray' : 'white')} >change color</button>
            <br />
            <button onClick={() => setNumber(number + 1)} >plus number</button>{number}
            <br />
            <ChildComponent functionX={funcX} />
        </div>
    )
}

const ChildComponent = (props) => {
    useEffect(() => {
        console.log('---- change function X ----')
    }, [props.functionX])
    console.log('//--- render ChildComponent')
    return (<div>Child Component : {props.functionX()}</div>)
}