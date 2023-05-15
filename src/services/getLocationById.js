import axios from "axios";

const getLocationById = async(id) => {
    let url = "https://rickandmortyapi.com/api/location/" + id;
    try {
        const res = await axios(url);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export default getLocationById;