
const getResource = async (url) => { 
    const res = await fetch(url)
    const body = await res.json()
    return body
}

getResource('https://swapi.py4e.com/api/people/1/')
.then((body=> )



fetch(')
.then((res) =>  {
   return res.json()
})
.then((body) => {
    console.log(body)
})
