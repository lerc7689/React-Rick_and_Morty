import "./Search.css";

const Search = ({onChange, handleClick, handleKeyDown, loadDataviewe, id, handlelocationClick,handlelocationKeyDown, onChangelocation, locationList, locationEvent}) => {
  return (
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
  );
};

export default Search;
