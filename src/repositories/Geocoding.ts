import axios from "axios";
import { GEOCODING_API_URL, API_ID } from "@env";
import Coordinate from "../types/coordinate";

async function findCityCoordinateByName (name: string) : Promise<Coordinate> {

    const url = `${GEOCODING_API_URL}?q=${name}&appid=${API_ID}`

    const response = await axios.get(url)

    if (response.data.length == 0)
        throw new Error("LocationNotFound") 
    
    return { latitude : response.data[0].lat, longitude : response.data[0].lon}  
}

export default findCityCoordinateByName   