import React from 'react'
import useLocalStorage from '../hook/useLocalStorage'
import useAlert from '../hook/useAlert'

export default function customHook() {
    const [text, setText] = useLocalStorage('test_key', '')
    useAlert(text)
    return (
        <div>
            Custom Hook Page -- {text}
            <br />
            <button type="button" onClick={() => setText('123')}>to 123</button>
            <button type="button" onClick={() => setText('456')}>to 456</button>
            <button type="button" onClick={() => setText('789')}>to 789</button>
        </div>
    )
}
