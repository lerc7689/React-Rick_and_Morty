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
import Pagination from "./components/pagination/Pagination";
import Search from "./components/search/Search";

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

  ///Busqueda por location
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
  //Busqueda por id
  const onChange = (e) =>{
    setId(e.target.value)
  }

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

      <Search onChange={onChange} handleClick={handleClick} handleKeyDown={handleKeyDown} 
        loadDataviewe={loadDataviewe} id={id} handlelocationClick={handlelocationClick} 
        handlelocationKeyDown={handlelocationKeyDown} onChangelocation={onChangelocation} 
        locationList={locationList} locationEvent={locationEvent}
      />

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

      <Pagination 
        pages={pages} 
        changePageTo={changePageTo} 
        pageNumber={pageNumber} 
        setQuatityPagination={setQuatityPagination}
      />  

      <Footer/>
    </>
  );
}

export default App;
