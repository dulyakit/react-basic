import React, { useMemo, useState } from 'react'

export default function usememo() {
    const [color, setColor] = useState('white')
    const [startNumber, setStartNumber] = useState(0)

    const slowFunction = useMemo(() => slowLogic(startNumber), [startNumber])
    // const slowFunction = slowLogic(startNumber)

    console.log('//--- render')
    return (
        <div style={{ background: color }}>
            <h1>Use Memo:{slowFunction}</h1>
            <button onClick={() => setColor((color === 'white') ? 'gray' : 'white')} className="btn btn-primary mb-3" >change color</button>
            <br />
            <input className='form-control' type="text" value={startNumber} onChange={(e) => setStartNumber(parseInt(e.target.value, 10))} />
        </div>
    )
}

const slowLogic = (startNumber = 0) => {
    console.log(startNumber)
    let total = startNumber
    for (let index = 0; index < 1000000; index++) {
        if (index === 1000) console.log('---- logic loop ---')
        total += index
    }
    return total
}