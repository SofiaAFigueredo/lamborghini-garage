import axios from "axios";
import { CarModel } from "../CardView/props";
import { CARS_API_BASE_URL } from "../../constant/car";

interface apiResponse {
    cars: CarModel[];
}

export const fetchGetCarData = async (
    id: number,
    
) => {
    try {
        const response = await axios.get<apiResponse>(CARS_API_BASE_URL);

        const carData = response.data.cars.find((car) => car.id === id || null);

        return carData
    } catch (error) {
        console.log("Error ao busca a API:", error);
        
    }
}