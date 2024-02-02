import { ScrollView, View } from "react-native";
import { Props } from "../types/navigation";
import { Divider, Text, Surface, Icon, IconButton } from "react-native-paper";
import { useSelector } from 'react-redux';
import { selectWeeklyForecast } from "../slices/forecastSlice";
import { getDayOfWeek, getLocaleTime } from "../utils/date";

export default function DailyForecast({route, navigation} : Props) {

    const {index} =route.params
    const weeklyForecast = useSelector(selectWeeklyForecast)
    const dailyForecast = weeklyForecast[index]


    const icons = new Map([
        ["Thunderstorm", "weather-lightning"],
        ["Drizzle", "weather-pouring"],
        ["Rain", "weather-pouring"],
        ["Snow", "snowflake"],
        ["Clear", "white-balance-sunny"],
        ["Clouds", "weather-cloudy"],
        ["Mist", "weather-dust"],
        ["Smoke", "weather-dust"],
        ["Haze", "weather-dust"],
        ["Dust", "weather-dust"],
        ["Fog", "weather-dust"],
        ["Sand", "weather-dust"],
        ["Dust", "weather-dust"],
        ["Ash", "weather-dust"],
        ["Squall", "weather-dust"],
        ["Tornado", "weather-dust"]
    ]);

    return (
        <ScrollView>
            <View style={{flexDirection : "row"}}>
                <IconButton size={20} icon="arrow-left" onPress={() => navigation.goBack()}/>
                <Text style={{padding : 10}} variant="titleLarge">{getDayOfWeek(dailyForecast.date)}</Text>
            </View>
            
            {dailyForecast.hourlyForecastList.map((hourlyForecast) =>(
            
            <Surface elevation={2} style={{padding:10, margin: 5, borderRadius : 10}}>
                <View style={{flexDirection : "row"}}>
                    <Text style={{flex : 9, textAlignVertical : "center"}} variant="headlineSmall">{getLocaleTime(hourlyForecast.date)}</Text>
                    <Icon source={icons.get(hourlyForecast.weatherType)} size={40}/>
                </View>
                <View style={{marginBottom : 50, marginTop : 50}}>
                    <Text style={{textAlign : "center"}} variant="displayLarge">{`${hourlyForecast.temperature}ºC`}</Text>
                    <Text style={{textAlign : "center"}} variant="bodySmall">{hourlyForecast.weatherDescription}</Text>
                </View>
                <Divider/>
                <View style={{marginTop : 10}}>
                    <View style={{flexDirection : "row"}}>
                        <Text style={{flex : 1, fontWeight : "bold"}}>Feels like</Text>
                        <Text style={{flex : 1, textAlign : "right"}}>{`${hourlyForecast.feelsLike}ºC`}</Text>
                    </View>
                    
                    <View style={{flexDirection : "row"}}>
                        <Text style={{flex : 1, fontWeight : "bold"}}>Humidity</Text>
                        <Text style={{flex : 1, textAlign : "right"}}>{`${hourlyForecast.humidity}%`}</Text>
                    </View>
                    
                    <View style={{flexDirection : "row"}}>
                        <Text style={{flex : 1, fontWeight : "bold"}}>Pressure</Text>
                        <Text style={{flex : 1, textAlign : "right"}}>{`${hourlyForecast.pressure} HPA`}</Text>
                    </View>
                </View>
                
            </Surface>
            
          ))}
        </ScrollView>
    );

}

