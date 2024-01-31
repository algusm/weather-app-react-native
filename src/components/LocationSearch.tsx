import React from "react";
import { TextInput, Button, SafeAreaView } from "react-native";
import findLocationByName from "../repositories/Geocoding";

export default function LocationSearch() {
    const [text, onChangeText] = React.useState('')

    const searchLocation = () => {
        findLocationByName(text)
    } 
    
    return (
        <SafeAreaView>
          <TextInput onChangeText={onChangeText} value={text}/>
          <Button title="Search" onPress={searchLocation}/>
        </SafeAreaView>
    );
}