import React, { useState } from 'react'

// เงื่อนไข
function condition() {
    const [number, setNumber] = useState(0)

    const renderIfElse = () => (
        (number > 0) ? (
            <b style={{ color: 'red' }}>มีค่ามากกว่า 0</b>
        ) : (
            <b style={{ color: 'green' }}>Zero</b>
        )
    )

    return (
        <div>
            <div>จำนวน number คือ {number}</div>
            <div>{(number) ? `มากกว่า 0 คือ ${number}` : 'เป็น 0'}</div>
            <div>{number && `มีค่า`}</div>
            <button onClick={() => setNumber(number + 1)}>Click to Up</button>
            <br />
            {renderIfElse()}
            <hr />
        </div>
    )
}

export default condition
