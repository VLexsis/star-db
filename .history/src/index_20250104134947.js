
const getResource = async (url) => { 
    const res = await fetch(url)
    const body = await res.json()
    return body
}

getResource()



fetch(')
.then((res) =>  {
   return res.json()
})
.then((body) => {
    console.log(body)
})
