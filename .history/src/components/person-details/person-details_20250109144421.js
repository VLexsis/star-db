import React, { Component } from 'react';

import './person-details.css';
import SwapiService from '../../services/swapi-service';

export default class PersonDetails extends Component {

    swapiService = new SwapiService()

    state = {
        person: null
    }

    componentDidMount() {
        this.updatePerson()
    }

    updatePerson() {
const { personID } =  this.props
if(personID){
    return
}
this.swapiService.getPerson(personID)
.then((person) => {
    this.setState({ person })
})
    }

  render() {

    if(!this.state.person) {
        return <span> Select a person from a list </span>
    }

    const { id, name, gender, birthYear, eyeColor } = this.state.person
    }}
    return (
      <div className="person-details card">
        <img className="person-image"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>male</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>{birthYear}</></span>
            </li>
            <li className="list-group-item">
              <span className="term">Eye Color</span>
              <span>red</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}