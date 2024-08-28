// Task 3: addUser(first_name, last_name, email)

import fetch from "node-fetch";

export async function addUser(first_name, last_name, email){
    const url = 'http://localhost:3000/users'
    const users = await fetch(url)

    let data = await users.json()
    let length = `${data.length+1}`

    const newUSer = {
        id: length,
        first_name: first_name,
        last_name: last_name,
        email: email
    }

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'content-Type': 'application/json'
        },
        body: JSON.stringify(newUSer)
    })
}

