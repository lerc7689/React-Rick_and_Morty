import axios from "axios";
import { getRandomId } from "../util/getRandomId";

const getRandomLocations = async() => {
    const randomId = getRandomId();
    let url = "https://rickandmortyapi.com/api/location/" + randomId;

    try {
        const res = await axios(url);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export default getRandomLocations;