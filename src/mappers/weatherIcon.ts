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

function mapWeatherIcon(type : string) {
    return icons.get(type)
}

export default mapWeatherIcon