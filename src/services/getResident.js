import axios from "axios";

const getResident = async (resident) => {
  //let url = "https://rickandmortyapi.com/api/character/652";

  try {
    const res = await axios(resident);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default getResident;
