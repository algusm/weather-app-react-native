import React from "react";
import { SafeAreaView } from "react-native";
import { TextInput } from "react-native-paper";
import findForecastByCity from "../services/weather";


export default function WeeklyForecast() {
    const [cityName, setCityName] = React.useState('')

    const searchLocation = async () => {
        const forecast = await findForecastByCity(cityName)
    } 
    
    return (
        <SafeAreaView>
          <TextInput mode="outlined" label="Cidade" onChangeText={setCityName} value={cityName} right={<TextInput.Icon icon="magnify" onPress={searchLocation}/>}/>
        </SafeAreaView>
    );
}