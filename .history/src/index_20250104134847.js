
const getResource = async (url) => { 
    const res
}



fetch('https://swapi.py4e.com/api/people/1/')
.then((res) =>  {
   return res.json()
})
.then((body) => {
    console.log(body)
})