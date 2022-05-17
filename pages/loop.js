import React from 'react'

const users = [{
    id: 1,
    name: 'John',
    age: 18,
}, {
    id: 2,
    name: 'tony',
    age: 30,
}, {
    id: 3,
    name: 'steve',
    age: 40,
}]
console.log(users);
function loop() {

    const forEachhhRender = () => {
        let data = []
        users.forEach(item => {
            data.push(<li>{item.name} : age = {item.age}</li>)
        })
        return data
    }

    const forRender = () => {
        let data = []
        for (let index = 0; index < 3; index++) {
            data.push(<li>{users[index].name} : age = {users[index].age}</li>)
        }
        return data
    }

    return (
        <div>
            <ul>
                {users.map((item, index) => {
                    console.log('index->', index)
                    return <li key={item.id}>{item.name} : age = {item.age}</li>
                })}
            </ul>
            <hr />
            {forEachhhRender()}
            <hr />
            {forRender()}
        </div>
    )
}

export default loop
