import React from 'react'
import Header from '../../components/navbar/Header'
import Search from '../../components/Search'
const sendText = () => {
    return "please input"
}

const index = () => {
    return (
        <>
            <Header title="Class Component"></Header>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-center employee-body">
                        <h4 className='mt-3'>Empolyee</h4>
                        <hr />
                        <Search funcText={sendText}>
                            <b>
                                Search ::
                            </b>
                        </Search>
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