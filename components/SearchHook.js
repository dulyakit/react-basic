import React, { useState, useEffect } from 'react'
import { useRouter, withRouter } from 'next/router';

function index(props) {
    const router = useRouter()
    const [textSearch, setTextSearch] = useState('');

    useEffect(() => {
        console.log('-->useEffect did mount');
        return () => {
            console.log('-->useEffect will unmount');
        };
    }, []);

    useEffect(() => {
        const textFunction = () => {
            console.log('-->useEffect text search');
        }
        textFunction()
    }, [textSearch]);

    useEffect(() => {
        console.log('useEffect all');
    });

    const handleChangeText = (event) => {
        setTextSearch(event.target.value)
    }

    return (
        <>
            {props.children} <input type="text" style={{ width: "50%" }} value={textSearch} onChange={handleChangeText} />
            <br />
            <div className="btn btn-primary mt-3" onClick={() => router.push('/test')}>go to test page</div>
        </>
    )
}

export default withRouter(index) 
