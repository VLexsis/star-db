

class SwapiService {
    async getResource() {
        const res = await fetch(url)

        if(!res.ok) {
            throw new Error (`Could not fetch ${url}`  + `, recived ${res.status}`)
        }
        const body = await res.json()
        return body
    }
}


const getResource = async (url) => { 
   
}

getResource('https://swapi.py4e.com/api/people/1/')
.then((body)=> {
    console.log(body)
})
.catch((err) => {
    console.error('Could not fetch', err)
})

