import axios from "axios";
import { GEOCODING_API_URL, API_ID } from "@env";

const findLocationByName = (name: string) => {

    const url = `${GEOCODING_API_URL}?q=${name}&appid=${API_ID}`
    console.log(GEOCODING_API_URL)    

    axios.get(url)
    .then(function(response) {
        console.log(response.data)
    })
    .catch(function(error) {
        console.log(error)
    }) 
       
}

export default findLocationByName   