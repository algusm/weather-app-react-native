import findLocationByName from "../repositories/geocoding";
import findForecastByCoordinate from "../repositories/forecast";
import HourlyWeatherForecast from "../types/hourlyWeatherForecast";

async function findForecastByCity(cityName : string) {
    const coordinate = await findLocationByName(cityName)
    console.log(coordinate)

    const forecast = await findForecastByCoordinate(coordinate)

    const forecastMap = createForecastMapByDate(forecast)
    createDalyForecastList(forecastMap)

    return forecast
}

function createForecastMapByDate(data : any) : Map<string, HourlyWeatherForecast> {
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

function createDalyForecastList(forecastMap: Map<string, HourlyWeatherForecast>) {
    
}

export default findForecastByCity