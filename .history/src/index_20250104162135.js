

class SwapiService {
    _apiBase = 'https://swapi.py4e.com/api'
    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`)

        if(!res.ok) {
            throw new Error (`Could not fetch ${url}`  + `, recived ${res.status}`)
        }
       return await res.json()
       
    }

   async getAllPeople() {
   const res = await this.getResource(`/people/`)
   return res.results
    }
    getPerson(id) {
        return this.getResource(`/people/${id}`)
    }
}

const swapi = new SwapiService();
swapi.getPerson(3).then((person) => {
    console.log(person.name)
})
