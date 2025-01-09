import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import './app.css';

export default class App extends Component {
    state = {
        selectedPerson: null // Изначально selectedPerson равен null
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id // Обновляем selectedPerson на выбранный id
        });
    };

    render() {
        return (
            <div>
                <Header />
                <RandomPlanet />
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onPersonSelected} />
                    </div>
                    <div className="col-md-6">
                        {/* Передаем selectedPerson как пропс personID в PersonDetails */}
                        <PersonDetails personID={this.state.selectedPerson} />
                    </div>
                </div>
            </div>
        );
    }
}