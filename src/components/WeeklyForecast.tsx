import React from "react";
import { SafeAreaView, View } from "react-native";
import { TextInput, Text, Surface, IconButton } from "react-native-paper";
import findForecastByCity from "../services/weather";
import DailyWeatherForecast from "../types/dailyWeatherForecast";
import { WeeklyProps } from "../types/navigation";


export default function WeeklyForecast({navigation}: WeeklyProps) {
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
                <IconButton icon="magnify" onPress={() => {
                    navigation.navigate('Daily', {dailyForecast : dailyForecast.hourlyForecastList})
                }}/>
            </Surface>
            
          ))}
        </SafeAreaView>
    );
}

function getDayOfWeek(date : Date) {
    const days = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"]

    return days[date.getDay()]
}