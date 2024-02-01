import React from "react";
import { SafeAreaView } from "react-native";
import { IconButton, TextInput } from "react-native-paper";
import findForecastByCity from "../services/weather";


export default function LocationSearch() {
    const [cityName, setCityName] = React.useState('')

    const searchLocation = async () => {
        const forecast = await findForecastByCity(cityName)
        //console.log(forecast)
    } 
    
    return (
        <SafeAreaView>
          <TextInput mode="outlined" label="Cidade" onChangeText={setCityName} value={cityName}/>
          <IconButton icon="magnify" onPress={searchLocation}/>
        </SafeAreaView>
    );
}