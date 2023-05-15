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
      {/* {Resident ? ( */}
      <div className="residentCard">
        {<img src={Resident?.image} alt="" />}

        <div className="residentName">{Resident?.name}</div>
        <hr />
        <p>
          <b className="cardInf">Race: </b>
          {Resident?.species}
        </p>
        <p>
          <b className="cardInf">Origin: </b>
          {Resident?.origin?.name}
        </p>
        <p>
          <b className="cardInf">Appearance in episodes: </b>
          {Resident?.episode?.length}
        </p>
      </div>
      {/* ) : (
        <p></p>
      )} */}
    </>
  );
};

export default ResidentCard;
