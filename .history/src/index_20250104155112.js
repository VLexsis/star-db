

class SwapiService {
    _apiBase = 'https://swapi.py4e.com/api'
    async getResource(url) {
        const res = await fetch(url)

        if(!res.ok) {
            throw new Error (`Could not fetch ${url}`  + `, recived ${res.status}`)
        }
       return await res.json()
       
    }

    getAllPeople() {
        return this.getResource()
    }
    getPerson(id) {
        return this.getResource()
    }
}

