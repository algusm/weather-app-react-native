import HourlyWeatherForecast from "../types/hourlyWeatherForecast";
import DailyWeatherForecast from "../types/dailyWeatherForecast";

function mapForecastResponse(data : any) : Array<DailyWeatherForecast> {
    const forecastMap = createForecastMapByDate(data)
    const dailyForecastList = createDalyForecastList(forecastMap)

    return dailyForecastList
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
            date : element.dt*milliseconds,
            temperature: Math.round(element.main.temp),
            minimumTemperature : Math.round(element.main.temp_min),
            maximumTemperature : Math.round(element.main.temp_max),
            feelsLike : Math.round(element.main.feels_like),
            humidity : element.main.humidity,
            pressure : element.main.pressure, 
            cloudiness : element.clouds.all,
            wind: `${element.wind.speed}m/s, ${element.wind.deg}º`,
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

export default mapForecastResponse