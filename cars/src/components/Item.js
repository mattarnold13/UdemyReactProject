import React from "react";
import { View, Text } from "react-native";


const Item = props => {
    return <View style={styles.viewStyle}>{props.children}</View>;
}; 

const styles = {
    viewStyle: {
        borderWidth: 1,
        borderColor: "lightsteelblue",
        borderBottomWidth: 5,
        shadowColor: "black",
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.1,
        marginLeft: 5,
        marginRight: 5,
        martinTop: 10
    }
};


export default Item;