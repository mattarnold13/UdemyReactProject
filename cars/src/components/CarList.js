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

        const url="http://mattarnold13.com/api/workout";
        //const url="https://jsonplaceholder.typicode.com/photos";
      

        axios.get(url, {} )
          .then((response) => console.log(response.data))
          .catch((err) => console.log(err)) }

        

    renderList = () => {
        return this.state.carList.map((a) => {
          //  return <CarDetail key={a.id} title={a.title} />;
            return <CarDetail key={a.id} />;
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