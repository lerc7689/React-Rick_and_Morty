import "./locationInfo.css";
const LocationInfo = ({ props }) => {
  return (
    <div className="locationInfo">
      <div className="locationName">{props?.name} </div>
      <div className="locationData">
        <div className="type">
          <b>Type: </b>
          {props?.type}
        </div>
        <div className="dimension">
          <b>Dimension: </b>
          {props?.dimension}{" "}
        </div>{" "}
        <div className="population">
          <b>Population: </b>
          {props.residents?.length}
        </div>
      </div>
    </div>
  );
};

export default LocationInfo;
