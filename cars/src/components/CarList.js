import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import CarDetail from './CarDetail';


class CarList extends Component {
    constructor() {
        super();

        this.state = { carList: [] };
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then((response) => {
                this.setState({ carList: response.data });
            });
    }

    renderList = () => {
        return this.state.carList.map((a) => {
            return <CarDetail key={a.id} title={a.title} />;
        })
    }

    render() {
        console.log(this.state);
        return (
            <View>
                {this.renderList()}
            </View>
        );
    }
}

export default CarList;