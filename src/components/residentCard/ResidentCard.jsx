import getResident from "../../services/getResident";
import { useState, useEffect } from "react";
import "./ResidentCard.css";

const ResidentCard = ({ resident }) => {
  //let resident = "https://rickandmortyapi.com/api/character/652";

  const [Resident, setResident] = useState();
  const loadResident = async () => {
    const res = await getResident(resident);
    setResident(res);
  };
  useEffect(() => {
    loadResident();
    
  }, [resident]);

  return (
    <>
     
      <div className="residentCard">
        {<img src={Resident?.image} alt="" />}

        <div className="residentName">{Resident?.name}</div>
        <hr />
        <b className="cardInf">Race: </b>
        <p>
          {Resident?.species}
        </p>
        <b className="cardInf">Origin: </b>
        <p>
          {Resident?.origin?.name}
        </p>
        <b className="cardInf">Appearance in episodes: </b>
        <p>
          {Resident?.episode?.length}
        </p>
      </div>
    </>
  );
};

export default ResidentCard;
