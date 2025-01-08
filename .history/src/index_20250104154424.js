

class SwapiService {
    async getResource() {

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

