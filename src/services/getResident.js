import axios from "axios";

const getResident = async(resident) => {

    try {
        const res = await axios(resident);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

export default getResident;