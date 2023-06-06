import React from 'react';
import { View, Text, Image } from 'react-native';
import Item from './Item';
import ItemSection from './ItemSection';
import Button from './Button';


const CarDetail = ({ a }) => {
    return (
    <Item>
        < ItemSection> 
            <View style={styles.headerContainer} >

                <Text style={styles.headerText}>{a.Date.toString().substr(0,10)}</Text>
                <Text style={styles.headerText}>{a.ExerciseType}</Text>

            </View>
        </ItemSection>
        <ItemSection>
            <Image  
                style={styles.tinyLogo} 
                source={require('./Treadmill.jpg')} />
        </ItemSection>
        <ItemSection>
            <Button />
        </ItemSection>
        
    </Item>
    );
};


const styles = {
    headerContainer: {
        
        flexDirection: "column",
        justifyContent: "space-between"

    },
    headerText: {
        fontSize: 18,
        fontWeight: '500',
        textTransform: 'uppercase'
    },
    tinyLogo: {
        height: 50,
        width: 50,
      },
};

export default CarDetail;

