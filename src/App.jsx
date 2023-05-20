import { useState, useEffect } from "react";
import getRandomLocations from "./services/getRandomLocations";
import LocationInfo from "./components/locationInfo/LocationInfo";
import "./App.css";
import Header from "./components/header/Header";
import ResidentCard from "./components/residentCard/ResidentCard";
import Loading from "./components/loading/Loading";
import getLocationById from "./services/getLocationById";
import {usePagination} from "./hooks/usePagination"
import Footer from "./components/footer/Footer"
import getAllLocationsList from "./services/getAllLocationsList";

function App() {
  const [locations, setLocations] = useState([]);
  const [id, setId] = useState("");
  const [locationEvent, setLocationEvent] = useState("");
  const [locationList, setLocationList] = useState([]);

  const [quatityPagination, setQuatityPagination] = useState(10);

  const [pageNumber, listSlice, pages, changePageTo] = usePagination(locations.residents, quatityPagination)

  const loadDataviewe = async () => {
    const data = await getRandomLocations();
    setLocations(data);
  };
   const onChange = (e) =>{
     setId(e.target.value)
   }

  ///
  const onChangelocation = async (e) =>{
    let namesArray = []
    setLocationEvent(e.target.value)
    const data = await getAllLocationsList()

    data.results.filter(e => {
      if(e.name.toLowerCase().includes(locationEvent))
      namesArray.push(e.name)
      
    })
    setLocationList(namesArray)
  }

const handlelocationKeyDown = async (e) =>{
  if (e.key === 'Enter') { 
    const data = await getAllLocationsList()
    data.results.filter(e => {
      if(e.name.toLowerCase() === locationEvent.toLowerCase()){
        listSlice.push(e)
        setLocations(e)
      }
      
    })
    setLocationEvent("")
  }
  
}
  const handlelocationClick = async () => {
      const data = await getAllLocationsList()
      data.results.filter(e => {
        if(e.name.toLowerCase() === locationEvent.toLowerCase()){
          listSlice.push(e)
          setLocations(e)
        }
        
      })
      setLocationEvent("")
  }
  ///
  const handleKeyDown = async (e) =>{
    if (e.key === 'Enter') { 
      if(/[0-9]/.test(id)  & id > 0 & id < 127){
      const data = await getLocationById(id);
      setLocations(data)
      setId("")
    }else{
      alert("debe digitar un numero del 1 al 126")
    }
    }
  }

  const handleClick = async () => {
    if(/[0-9]/.test(id) & id > 0 & id < 127){
      const data = await getLocationById(id);
      setLocations(data)
      setId("")
    }else{
      alert("debe digitar un numero del 1 al 126")
    }
  }
  useEffect(() => {
    loadDataviewe();
  }, []);


  return (
    <>
      <Header />

      <div className="search">
      <div className="searchBox">
      <input type="text" onChange={onChange} onKeyDown={handleKeyDown} value={id}/>
      <button onClick={handleClick}>Search by id</button>
      </div>
      <button onClick={loadDataviewe}>Random Location</button>

      <div className="searchBox">
      <input type="search" list="drawfemails" onChange={onChangelocation} onKeyDown={handlelocationKeyDown} value={locationEvent}/>
      <button onClick={handlelocationClick} >Search by location</button>
      </div>
      <datalist id="drawfemails">
        {locationList?.map(locationName =>
              <option  key={locationName} value={locationName}>{locationName}</option>
        )} 
      </datalist>
      </div>

      <div className="Container">
        {<LocationInfo props={locations} />}
      </div>
      <div className="characters">
        {listSlice ? (
          listSlice.map((r) => (
            <ResidentCard resident={r} key={r.id} />
          ))
        ) : (
           <Loading/>
        )}
      </div>

      <div className="pagination">
        <button onClick={()=> changePageTo(pageNumber -1) } className="btnBackNext">Back </button>
          {pages.map((i)=>(
            <button key={i} onClick={()=>changePageTo(i)} className="btnPages" style={{backgroundColor:pageNumber=== i?  "rgb(162, 255, 22)": undefined, color:pageNumber=== i? "#1e8fa0": undefined}}>
              {i}
            </button>
            
          ))}
        <button onClick={()=> changePageTo(pageNumber +1)} className="btnBackNext">Next</button>
      </div>

      <Footer/>
    </>
  );
}

export default App;
