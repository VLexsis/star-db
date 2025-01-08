

class SwapiService {
    _api
    async getResource(url) {
        const res = await fetch(url)

        if(!res.ok) {
            throw new Error (`Could not fetch ${url}`  + `, recived ${res.status}`)
        }
       return await res.json()
       
    }
}

