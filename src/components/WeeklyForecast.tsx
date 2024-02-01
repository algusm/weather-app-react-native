import React from "react";
import { SafeAreaView, View } from "react-native";
import { TextInput, Text, Surface } from "react-native-paper";
import findForecastByCity from "../services/weather";
import DailyWeatherForecast from "../types/dailyWeatherForecast";


export default function WeeklyForecast() {
    const [cityName, setCityName] = React.useState('')
    const [weeklyForecast, setWeeklyForecast] = React.useState<DailyWeatherForecast[]>([])

    const searchLocation = async () => {
        const forecast = await findForecastByCity(cityName)
        setWeeklyForecast(forecast)
    } 
    
    return (
        <SafeAreaView>
          <TextInput mode="outlined" label="Cidade" onChangeText={setCityName} value={cityName} right={<TextInput.Icon icon="magnify" onPress={searchLocation}/>}/>
          {weeklyForecast.map((dailyForecast) =>(
            
            <Surface elevation={2}>
                <Text>
                    {getDayOfWeek(dailyForecast.date)}
                </Text>
                <Text>
                    min. {dailyForecast.minimumTemperature} max {dailyForecast.maximumTemperature}
                </Text>
            </Surface>
            
          ))}
        </SafeAreaView>
    );
}

function getDayOfWeek(date : Date) {
    const days = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"]

    return days[date.getDay()]
}