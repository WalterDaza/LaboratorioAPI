// Task 2: listUsers()

export function listUsers(){
    const url = 'http://localhost:3000/users';

    fetch(url)
        .then(response => response.json()) 
        .then(data =>{
            const format = data.map(user => 
                `{\n  id: ${user.id},\n  first_name: '${user.first_name}',\n  last_name: '${user.last_name}',\n  email: '${user.email}'\n}`
            ).join(',\n');
            console.log(`[\n${format}\n]`);
        })
}

// listUsers()