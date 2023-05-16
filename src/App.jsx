import { useState, useEffect } from "react";
import getRandomLocations from "./services/getRandomLocations";
import LocationInfo from "./components/locationInfo/LocationInfo";
import "./App.css";
import Nav from "./components/nav/Nav";
import ResidentCard from "./components/residentCard/ResidentCard";
import Loading from "./components/loading/Loading";
import getLocationById from "./services/getLocationById";

function App() {
  const [locations, setLocations] = useState([]);
  const [id, setId] = useState("");

  const loadDataviewe = async () => {
    const data = await getRandomLocations();
    setLocations(data);
  };
  const onChange = (e) =>{
    console.log(e.target.value)
    setId(e.target.value)
  }

  const handleKeyDown = async (e) =>{
    if (e.key === 'Enter') {
      // validacion si es numero del 1 al 126
      if(/[0-9]/.test(id)){
      const data = await getLocationById(id);
      setLocations(data)
    }else{
      alert("debe digitar un numero del 1 al 126")
    }
    }
  }

  const handleClick = async () => {
    if(/[0-9]/.test(id)){
      const data = await getLocationById(id);
      setLocations(data)
    }else{
      alert("debe digitar un numero del 1 al 126")
    }

  }
///
  useEffect(() => {
    loadDataviewe();
    // loadResident();
  }, []);

  return (
    <>
      <Nav />

      <div className="search">
      <div className="searchBox">
      <input type="text" onChange={onChange} onKeyDown={handleKeyDown} value={id}/>
      <button onClick={handleClick}>Search by id</button>
      </div>
      <button onClick={loadDataviewe}>Random Location</button>
      </div>

      <div className="Container">
        {<LocationInfo props={locations} />}
      </div>
      <div className="characters">
        {locations ? (
          locations.residents?.map((r) => (
            <ResidentCard resident={r} key={r.id} />
          ))
        ) : (
           <Loading/>
        )}
      </div>
    </>
  );
}

export default App;
