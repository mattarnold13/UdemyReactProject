import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
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
          .then((response) => this.setState({ carList : response.data.WorkOutList}, () => {
            console.log(this.state.carList)
          }))
          .catch((err) => console.log(err))
            
        }

        

    renderList = () => {
        return this.state.carList.map((a) => {
          return <CarDetail key={a.Date} key2={a.ExerciseType} a={a} />;


        //   return <CarDetail key={a.Date}>
        //     {a.Date} {a.ExerciseType} {a.Distance} a={a} </CarDetail>;
          //return <CarDetail key={a.ExerciseType} />;
        })
    }

    render() {
        console.log(this.state);
        return (
          <ScrollView>
            {this.renderList()}
          </ScrollView>
        );
    }
}

export default CarList;