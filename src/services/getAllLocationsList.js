import axios from "axios";

const getAllLocationsList = async() => {
    let url = "https://rickandmortyapi.com/api/location/";
    try {
        const res = await axios(url);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export default getAllLocationsList;