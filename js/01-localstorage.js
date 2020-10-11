console.log(localStorage)

localStorage.setItem('my-data', JSON.stringify({ name: 'Mango', age: 2 }))

console.log(localStorage.getItem('my-data'))

console.log('parse', JSON.parse(localStorage.getItem("my-data")))