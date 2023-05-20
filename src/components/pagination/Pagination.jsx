import "./Pagination.css";

const Pagination = ({ pages, changePageTo, pageNumber , setQuatityPagination }) => {
  return (
    <>
      <div className="select">
    <select name="select" onChange={(e)=>  {if(Number(e.target.value))setQuatityPagination(e.target.value)}}>
    <option selected>Change quantity per page</option>
        <option >10</option>
        <option >15</option>
        <option >20</option>
      </select>
      </div>
      <div className="pagination">
    { pages.length > 1 && <button onClick={()=> changePageTo(pageNumber -1) } className="btnBackNext">Back </button>}
      {pages.map((i)=>(
        <button key={i} onClick={()=>changePageTo(i)} className="btnPages" style={{backgroundColor:pageNumber=== i?  "rgb(162, 255, 22)": undefined, color:pageNumber=== i? "#1e8fa0": undefined}}>
          {i}
        </button>
        
      ))}
    {pages.length > 1 && <button onClick={()=> changePageTo(pageNumber +1)} className="btnBackNext">Next</button>}
  </div>
    </>
    

  );
};

export default Pagination;
