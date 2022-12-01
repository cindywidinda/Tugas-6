import fetch from 'node-fetch'

const carinama = (url) => {
    return new Promise ((resolve, reject) =>{
        return fetch('https://jsonplaceholder.typicode.com/users')
        .then(function(response){
            resolve(response.json())
        }).then(function(response){
            console.log(response.name)
        }).catch (function(error) {
            reject('File not found.', error)
        })
    })
    }

carinama().then(word => {
    console.log(word)
}).catch(gagal => {
    console.log(gagal)
})

//belum bisa menemukan cara untuk hanya menampilkan nama