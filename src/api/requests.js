export const getUsers = () => 
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'GET',
        async: false
    })
    .then(response => response.json())

export const getPosts = () => 
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
        async: false
    })
    .then(response => response.json())
