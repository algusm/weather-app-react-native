import HourlyWeatherForecast from "./hourlyWeatherForecast"

type DailyWeatherForecast = {
    date : number,
    minimumTemperature : number,
    maximumTemperature : number,
    hourlyForecastList: Array<HourlyWeatherForecast>
}

export default DailyWeatherForecast