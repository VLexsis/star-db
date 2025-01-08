
const getResource = async (url) => { 
    const res = await fetch(url)

    if(!res.ok) {
        throw new Error (`Could not fetch ${}`)
    }
    const body = await res.json()
    return body
}

getResource('https://swapi.py4e.com/api/people/1/')
.then((body)=> {
    console.log(body)
})
.catch((err) => {
    console.error('Could not fetch', err)
})

