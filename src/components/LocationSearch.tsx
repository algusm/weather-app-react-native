import React from "react";
import { TextInput, Button, SafeAreaView } from "react-native";
import findForecastByCity from "../services/weather";


export default function LocationSearch() {
    const [cityName, setCityName] = React.useState('')

    const searchLocation = async () => {
        const forecast = await findForecastByCity(cityName)
        //console.log(forecast)
    } 
    
    return (
        <SafeAreaView>
          <TextInput onChangeText={setCityName} value={cityName}/>
          <Button title="Search" onPress={searchLocation}/>
        </SafeAreaView>
    );
}