import HourlyWeatherForecast from "./hourlyWeatherForecast"

type DailyWeatherForecast = {
    date : Date,
    minimumTemperature : number,
    maximumTemperature : number,
    hourlyForecastList: Array<HourlyWeatherForecast>
}

export default DailyWeatherForecast