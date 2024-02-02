import React from "react";
import { SafeAreaView, View, Pressable } from "react-native";
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
        <View>
          <Text variant="titleMedium" style={{marginTop : 20, paddingLeft : 10}}>Selecione uma cidade</Text>
          <TextInput mode="outlined" label="Cidade" onChangeText={setCityName} value={cityName} right={<TextInput.Icon icon="magnify" onPress={searchLocation}/>} style={{marginBottom : 20}}/>
          <Text style={{paddingLeft : 10}}>Previsão para a semana:</Text>
          {weeklyForecast.map((dailyForecast) =>(
            
            <Pressable onPress={() => {
                navigation.navigate('Daily', {dailyForecast : dailyForecast.hourlyForecastList})
            }}>
            <Surface elevation={2} style={{padding:10, margin: 5, flexDirection : "row", borderRadius : 10}}>
                <Text variant="titleLarge" style={{flex :4}}>
                    {getDayOfWeek(dailyForecast.date)}
                </Text>
                <View style={{flex :2, flexDirection : "row"}}>
                    <Text style={{paddingTop : 7}}>min.</Text>
                    <Text variant="titleLarge">
                        {dailyForecast.minimumTemperature}
                    </Text>
                </View>
                <View style={{flex :2, flexDirection : "row"}}>
                    <Text style={{paddingTop : 7}}>max.</Text>
                    <Text variant="titleLarge">{dailyForecast.maximumTemperature}</Text>
                </View>
            </Surface>
            </Pressable>
            
          ))}
        </View>
    );
}

function getDayOfWeek(date : Date) {
    const days = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"]

    return days[date.getDay()]
}