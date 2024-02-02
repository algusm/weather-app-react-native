import { ScrollView, View } from "react-native";
import { Props } from "../types/navigation";
import { Divider, Text, Surface, Icon, IconButton } from "react-native-paper";

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
            <View style={{flexDirection : "row"}}>
                <IconButton size={20} icon="arrow-left" onPress={() => navigation.goBack()}/>
                <Text style={{padding : 10}} variant="titleLarge">{getDayOfWeek(dailyForecast[0].date)}</Text>
            </View>
            
            {dailyForecast.map((hourlyForecast) =>(
            
            <Surface elevation={2} style={{padding:10, margin: 5, borderRadius : 10}}>
                <View style={{flexDirection : "row"}}>
                    <Text style={{flex : 9, textAlignVertical : "center"}} variant="headlineSmall">{hourlyForecast.date.toLocaleTimeString()}</Text>
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

function getDayOfWeek(date : Date) {
    const days = ["SUN", "MON", "TUES", "WED", "THURS", "FRI", "SAT"]

    return days[date.getDay()]
}