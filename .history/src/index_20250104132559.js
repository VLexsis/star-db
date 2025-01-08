fetch('https://swapi.py4e.com/api/planets/1/')
.then((res) =>  {
    console.log('Got Response', res.status)
})
