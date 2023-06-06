// import libraries
import React from 'react';
import { Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';



//create component
const Header = (props) => {
    const { textStyling, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyling}>{props.title}</Text>
        </View>);
}

const styles = {
    textStyling: {
        fontSize: 40,
        color: 'black',
        fontWeight: 'bold'

    },

    viewStyle: {
        backgroundColor: "lightsteelblue",
        height: 70,
        jusifyContent: "center",
        alignItems: "center",
        paddingTop: 10
    }
};
//Make Component available to other components
export default Header;
