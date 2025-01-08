import React, { Component } from 'react';

import './random-planet.css';
import SwapiService from '../../services/swapi-service';

export default class RandomPlanet extends Component {

    swapiService = new SwapiService()

    state = {
        name: null,
        population: null,
        rotationPeriod: null,
        diameter: null
    }

    updatePlanet() {
        
    }

  render() {
    const { name, population, 
        rotationPeriod, diameter
    } = this.state


    return (
      <div className="random-planet jumbotron rounded">
        <img className="planet-image"
             src="https://starwars-visualguide.com/assets/img/planets/5.jpg" />
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
      </div>

    );
  }
}