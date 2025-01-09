import React, { Component } from 'react';

import './random-planet.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner/spinner';

export default class RandomPlanet extends Component {

    swapiService = new SwapiService()

    state = {
        planet: {},
        loading: false,
        error: false
     }
сomponentDidMount() {
this.updatePlanet()
this.interval = setInterval(this.updatePlanet, 10000)
}

   

    async getAllPeople() {
        const res = await this.getResource(`/people/`)
        return res.results.map(this._transformPerson)
         }
         async getPerson(id) {
          const person =  await this.getResource(`/people/${id}/`)
          return this._transformPerson(person)
     
         }
         async getAllPlanets() {
             const res = await this.getResource(`/planets/`)
             return res.results.map(this._transformPlanet)
              }
              
         async getPlanet(id) {
                 const planet = await this.getResource(`/planets/${id}/`)
                 return this._transformPlanet(planet)
         }
     
         async getAllStarships() {
             const res = await this.getResource(`/starships/`)
             return res.results.map(this._transformStarship)
              }
     
         async getStarship(id) {
             const starship = this.getResource(`/starships/${id}/`)
             return this._transformStarship(starship)
         }
     
         _extractId(item) {
             const idRegExp = /\/([0-9]*)\/$/
             return item.url.match(idRegExp)[1]
         }
     
         _transformPlanet = (planet)=>{
             return {
                 id: this._extractId(planet),
                 name: planet.name,
                 population: planet.population,
                 rotationPeriod: planet.rotation_period,
                 diameter: planet.diameter
             }
         }
         _transformStarship(starship) {
             return {
                 id: this._extractId(starship),
                 name: starship.name,
                 model: starship.model,
                 manufacturer: starship.manufacturer,
                 costInCredits: starship.costInCredits,
                 length: starship.length,
                 crew: starship.crew,
                 passenger: starship.passenger,
                 cargoCapacity: starship.cargoCapacity
             }
         }
         _transformPerson(person) {
             return {
                 id: this._extractId(person),
                 name: person.name,
                 gender: person.gender,
                 birthYear: person.birthYear,
                 eyeColor: person.eyeColor
             }
         }
     
         onPlanetLoaded = (planet) => {
             this.setState({planet})
         }
         onError = (err) => {
this.setState({
    error: true,
loading: false
})
         }
     
      updatePlanet = () => {
        
             const id = Math.floor(Math.random() * 25) + 2;
             this.swapiService
             .getPlanet(id)
             .then(this.onPlanetLoaded)
             .catch(this.onError)
         }

         

    

  render() {
    const {planet, loading, error } = this.state

    const hasData = !(loading || error)

    const errorMessage = error ? <p> Ошибка </p> : null
    const spinner = loading ? <Spinner/> : null
    const content = hasData ? <PlanetView/> : null
    

    return (
      <div className="random-planet jumbotron rounded">
        {errorMessage}
        {spinner}
        {content}
<PlanetView planet = {planet}/>
      </div>

    );
  }
}

const PlanetView = ({planet}) => {

      // Проверяем, что planet не пустой объект или undefined
  if (!planet || Object.keys(planet).length === 0) {
    return null;
  }
    const { id, name, population, 
        rotationPeriod, diameter
    } = planet

    return ( <React.Fragment>
        <img className="planet-image"
            src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
       <div>
         <h4>{name}</h4>
         <ul className="list-group list-group-flush">
           <li className="list-group-item">
             <span className="term">{population}</span>
             <span>123124</span>
           </li>
           <li className="list-group-item">
             <span className="term">{rotationPeriod}</span>
             <span>43</span>
           </li>
           <li className="list-group-item">
             <span className="term">{diameter}</span>
             <span>100</span>
           </li>
         </ul>
       </div>
   </React.Fragment>)
   
}