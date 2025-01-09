import React, { Component } from 'react';

import './item-list.css';
import SwapiService from '../../services/swapi-service';

export default class ItemList extends Component {
    swapiService = new SwapiService

    state = {
        peopleList: null
    }

    componentDidMount() {
this.swapiService
.getAllPeople()
.then(() => {
    
})
    }
  render() {
    return (
      <ul className="item-list list-group">
        <li className="list-group-item">
          Luke Skywalker
        </li>
        <li className="list-group-item">
          Darth Vader
        </li>
        <li className="list-group-item">
          R2-D2
        </li>
      </ul>
    );
  }
}