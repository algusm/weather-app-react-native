import findCityCoordinateByName from "../repositories/geocoding";
import findForecastByCoordinate from "../repositories/forecast";
import DailyWeatherForecast from "../types/dailyWeatherForecast";
import mapForecastResponse from "../mappers/forecastResponse";

async function findForecastByCity(cityName : string) : Promise<Array<DailyWeatherForecast>> {
    const coordinate = await findCityCoordinateByName(cityName)
    console.log(coordinate)

    const forecast = await findForecastByCoordinate(coordinate)
    
    const dailyForecastList = mapForecastResponse(forecast)
    console.log(dailyForecastList)

    return dailyForecastList
}

export default findForecastByCity