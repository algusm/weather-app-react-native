import findLocationByName from "../repositories/geocoding";
import findForecastByCoordinate from "../repositories/forecast";
import HourlyWeatherForecast from "../types/hourlyWeatherForecast";
import DailyWeatherForecast from "../types/dailyWeatherForecast";

async function findForecastByCity(cityName : string) {
    const coordinate = await findLocationByName(cityName)
    console.log(coordinate)

    const forecast = await findForecastByCoordinate(coordinate)

    const forecastMap = createForecastMapByDate(forecast)
    const dailyForecastList = createDalyForecastList(forecastMap)
    console.log(dailyForecastList)

    return forecast
}

function createForecastMapByDate(data : any) : Map<string, HourlyWeatherForecast[]> {
    const forecastMap = new Map()

    data.list.forEach((element: any) => {
        const milliseconds = 1000
        const date = new Date(element.dt*milliseconds)
        const localeDate = date.toLocaleDateString()

        if (!forecastMap.has(localeDate)) 
            forecastMap.set(localeDate, [])

        forecastMap.get(localeDate).push({
            date : date,
            minimumTemperature : Math.round(element.main.temp_min),
            maximumTemperature : Math.round(element.main.temp_max), 
            weatherType : element.weather[0].main,
            weatherDescription : element.weather[0].description
        })
          
    });

    return forecastMap
}

function createDalyForecastList(forecastMap: Map<string, HourlyWeatherForecast[]>) : DailyWeatherForecast[]{
    const dailyForecastList = []
    
    for (const key of forecastMap.keys()) {
        if (forecastMap.has(key)) {
            const hourlyForecastList = forecastMap.get(key)!
            dailyForecastList.push({
                date : hourlyForecastList[0].date,
                minimumTemperature : calculateMinimumTemperature(hourlyForecastList),
                maximumTemperature : calculateMaximumTemperature(hourlyForecastList),
                hourlyForecastList : hourlyForecastList
            })
        }
    } 

    return dailyForecastList
}

function calculateMinimumTemperature(hourlyForecastList : HourlyWeatherForecast[]) : number {
    return hourlyForecastList.flatMap((element) => element.minimumTemperature).sort()[0]
}

function calculateMaximumTemperature(hourlyForecastList : HourlyWeatherForecast[]) : number {
    return hourlyForecastList.flatMap((element) => element.maximumTemperature).sort().reverse()[0]
}

export default findForecastByCity