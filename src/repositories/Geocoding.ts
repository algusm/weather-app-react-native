import axios from "axios";
import { GEOCODING_API_URL, API_ID } from "@env";
import Coordinate from "../types/coordinate";

async function findCityCoordinateByName (name: string) : Promise<Coordinate> {

    const url = `${GEOCODING_API_URL}?q=${name}&appid=${API_ID}`
    console.log(url)    

    const response = await axios.get(url)
    
    console.log(response.data)
    return { latitude : response.data[0].lat, longitude : response.data[0].lon}  
}

export default findCityCoordinateByName   