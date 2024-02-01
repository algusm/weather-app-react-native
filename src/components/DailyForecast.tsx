import { View } from "react-native";
import { Props } from "../types/navigation";
import { TextInput, Text, Surface, IconButton } from "react-native-paper";

export default function DailyForecast({route, navigation} : Props) {

    const {dailyForecast} =route.params

    return (
        <View>
            {dailyForecast.map((hourlyForecast) =>(
            
            <Surface elevation={2}>
                <Text>
                    {hourlyForecast.date.toLocaleTimeString()} {hourlyForecast.weatherType} {hourlyForecast.temperature}
                </Text>
            </Surface>
            
          ))}
        </View>
    );

}