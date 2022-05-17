import React from 'react'
import Header from '../../components/navbar/Header'
import SearchHook from '../../components/SearchHook'
const sendText = () => {
    return "please input"
}

const index = () => {
    console.log('render !');
    return (
        <>
            <Header title="Hooks"></Header>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center employee-body">
                        <h4 className='mt-3'>Empolyee</h4>
                        <hr />
                        <SearchHook funcText={sendText}>
                            <b>
                                Search ::
                            </b>
                        </SearchHook>
                    </div>
                    <div className="col-md-6 text-center">
                        <h4 className='mt-3'>EmployeeDetail</h4>
                        <hr />
                    </div>
                </div>
            </div>
        </>
    )
}

export default index