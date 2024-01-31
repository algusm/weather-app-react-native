import React from "react";
import { TextInput, Button, SafeAreaView } from "react-native";
import findLocationByName from "../repositories/Geocoding";
import findForecastByCoordinate from "../repositories/Forecast";

export default function LocationSearch() {
    const [cityName, setCityName] = React.useState('')

    const searchLocation = async () => {
        const coordinate = await findLocationByName(cityName)
        console.log(coordinate)

        const forecast = findForecastByCoordinate(coordinate)
        console.log(forecast)
    } 
    
    return (
        <SafeAreaView>
          <TextInput onChangeText={setCityName} value={cityName}/>
          <Button title="Search" onPress={searchLocation}/>
        </SafeAreaView>
    );
}