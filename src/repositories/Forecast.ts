import axios from "axios";
import { FORECAST_API_URL, API_ID } from "@env";
import Coordinate from "../types/coordinate";

async function findForecastByCoordinate (coordinate: Coordinate) {

    const url = `${FORECAST_API_URL}?lat=${coordinate.latitude}&lon=${coordinate.longitude}&appid=${API_ID}&units=metric`

    const response = await axios.get(url)

    return response.data
    
}

export default findForecastByCoordinate