import React, { Component } from 'react';

import './person-details.css';
import SwapiService from '../../services/swapi-service';

export default class PersonDetails extends Component {

    swapiService = new SwapiService()

    state = {
        person: null
    }

    componentDidMount

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
    return (
      <div className="person-details card">
        <img className="person-image"
          src="https://starwars-visualguide.com/assets/img/characters/3.jpg" />

        <div className="card-body">
          <h4>R2-D2</h4>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <span className="term">Gender</span>
              <span>male</span>
            </li>
            <li className="list-group-item">
              <span className="term">Birth Year</span>
              <span>43</span>
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