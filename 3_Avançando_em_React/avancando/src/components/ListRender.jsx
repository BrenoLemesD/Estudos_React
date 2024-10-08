import React, { useState } from 'react'

const ListRender = () => {

    const [list] = useState(['Breno', 'Matheus', 'Pedro', 'Rodrigo'])
    const [users, setUsers] = useState([
        {id: 1, name: 'Breno', age: 18},
        {id: 2, name: 'Alysson', age: 21},
        {id: 3, name: 'Mariana', age: 24},
    ])

    const deleteRandow = () => {
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => {

            return prevUsers.filter((user) => randomNumber !== user.id)

        })
    }

  return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age} - {}</li>
            ))}
        </ul>
        <button onClick={deleteRandow}>Delete random user</button>
    </div>
  )
}

export default ListRender