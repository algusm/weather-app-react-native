import { ScrollView, View } from "react-native";
import { Props } from "../types/navigation";
import { Divider, Text, Surface, Icon } from "react-native-paper";

export default function DailyForecast({route, navigation} : Props) {

    const {dailyForecast} =route.params

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
            {dailyForecast.map((hourlyForecast) =>(
            
            <Surface elevation={2} style={{padding:10, margin: 5, borderRadius : 10}}>
                <View style={{flexDirection : "row"}}>
                    <Text style={{flex : 9}}>lorem ipsum</Text>
                    <Icon source={icons.get(hourlyForecast.weatherType)} size={40}/>
                </View>
                <View style={{marginBottom : 50, marginTop : 50}}>
                    <Text style={{textAlign : "center"}} variant="displayLarge">{hourlyForecast.temperature}</Text>
                    <Text style={{textAlign : "center"}} variant="bodySmall">{hourlyForecast.weatherDescription}</Text>
                    <Text style={{textAlign : "center"}} variant="bodySmall">{hourlyForecast.date.toLocaleString()}</Text>
                </View>
                <Divider/>
                <View>
                <Text>lorem ipsum</Text>
                </View>
                
            </Surface>
            
          ))}
        </ScrollView>
    );

}