import findCityCoordinateByName from "../repositories/geocoding";
import findForecastByCoordinate from "../repositories/forecast";
import DailyWeatherForecast from "../types/dailyWeatherForecast";
import mapForecastResponse from "../mappers/forecastResponse";

async function findForecastByCity(cityName : string) : Promise<Array<DailyWeatherForecast>>  {
    try {
        const coordinate = await findCityCoordinateByName(cityName)

        const forecast = await findForecastByCoordinate(coordinate)
        const dailyForecastList = mapForecastResponse(forecast)

        return dailyForecastList
    } catch (error : any) {
        console.log(error)
        if (error.message == "LocationNotFound")
            throw new Error('Could not find city with the provided name')
        
        throw new Error('An error ocurred while loading the forecast')
    }
}

export default findForecastByCity