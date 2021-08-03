// // const p = Promise.resolve({
// //     id: 1
// // })

//p.then(result => console.log(result))

const p = Promise.reject({
    id: 1
})

p.catch(err => console.log(err))

