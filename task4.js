// Task 4: delUser(number)
import fetch from "node-fetch";

export async function delUser(id){
    const url = `http://localhost:3000/users/${id}`

    const response = await fetch(url, {
        method: 'DELETE'
    })
}