import React from 'react';
import { TouchableOpacity,Text } from 'react-native';

export default function MyButton(props) {
    return(
        <TouchableOpacity onPress={props.handlePress}><Text>Add to List</Text></TouchableOpacity>
    ); 
}