import React, { Fragment } from "react";
import { View, Pressable } from "react-native";
import { TextInput, Text, Surface, ActivityIndicator } from "react-native-paper";
import findForecastByCity from "../services/weather";
import { WeeklyProps } from "../types/navigation";
import { useSelector, useDispatch } from 'react-redux';
import { update, selectWeeklyForecast } from "../slices/forecastSlice";
import { getDayOfWeek } from "../utils/date";


export default function WeeklyForecast({navigation}: WeeklyProps) {
    const [cityName, setCityName] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(false)
    const weeklyForecast = useSelector(selectWeeklyForecast)
    const dispatch = useDispatch();

    const loadForecast = async () => {
        setIsLoading(true)
        const forecast = await findForecastByCity(cityName)
        //setWeeklyForecast(forecast)
        dispatch(update(forecast))
        setIsLoading(false)
    } 
    
    return (
        <View>
          <Text variant="titleMedium" style={{marginTop : 15, marginBottom : 5, paddingLeft : 10}}>Select a city</Text>
          <TextInput mode="outlined" label="City" onChangeText={setCityName} value={cityName} right={<TextInput.Icon icon="magnify" onPress={loadForecast}/>} style={{marginBottom : 20}}/>
          
          {isLoading && 
            <ActivityIndicator animating={isLoading}/>
          }        
          
          {!isLoading &&
            <View>
                {weeklyForecast.length > 0 &&
                    <Text style={{paddingLeft : 10}}>Forecast for the week:</Text>
                }
                {weeklyForecast.map((dailyForecast) =>(
                    <Fragment key={dailyForecast.date}>
                        <Pressable onPress={() => {
                            navigation.navigate('Daily', {index : weeklyForecast.indexOf(dailyForecast)})
                        }}>
                        <Surface elevation={2} style={{padding:10, margin: 5, flexDirection : "row", borderRadius : 10}}>
                            <Text variant="titleLarge" style={{flex :4}}>
                                {getDayOfWeek(dailyForecast.date)}
                            </Text>
                            <View style={{flex :2, flexDirection : "row"}}>
                                <Text style={{paddingTop : 7, paddingRight : 5}}>min.</Text>
                                <Text variant="titleLarge">
                                    {`${dailyForecast.minimumTemperature}ºC`}
                                </Text>
                            </View>
                            <View style={{flex :2, flexDirection : "row"}}>
                                <Text style={{paddingTop : 7, paddingRight : 5}}>max.</Text>
                                <Text variant="titleLarge">{`${dailyForecast.maximumTemperature}ºC`}</Text>
                            </View>
                        </Surface>
                        </Pressable>
                    </Fragment>
                ))}
            </View>
          }
        </View>
    );
}

