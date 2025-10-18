import "./Pagination.css";

const Pagination = ({ pages, changePageTo, pageNumber , setQuatityPagination }) => {
  
  return (
    <>
      {pages.length &&(
        <div className="selectContainer">
          
          <select onChange={(e)=>  {if(Number(e.target.value))setQuatityPagination(e.target.value)}}>
            <option selected>Change quantity per page</option>
            <option >10</option>
            <option >15</option>
            <option >20</option>
          </select>
        </div>
      )}
      <div className="pagination">
        {pageNumber > 2 && <button onClick={()=> changePageTo(1)} className="btnBackNext">First</button>}
        { pageNumber > 1 && <button onClick={()=> changePageTo(pageNumber -1) } className="btnBackNext">Back </button>}
        <div style={{
          display:"flex"
        }}>
          { pageNumber > 2 && <p>...</p>}
          {pages.map((i)=>(
            <>
              {  i === (pageNumber )  &&(
              <button key={i} onClick={()=>changePageTo(i)} className="btnPages" style={{backgroundColor:pageNumber=== i?  "rgb(162, 255, 22)": undefined, color:pageNumber=== i? "#1e8fa0": undefined}}>
                {i}
              </button>)}
            </>
          ))}
          { pageNumber < pages.length -1 && <p>...</p>}
        </div>
        {pages.length > 1 && pageNumber !== pages.length && <button onClick={()=> changePageTo(pageNumber +1)} className="btnBackNext">Next</button>}
        {pageNumber < pages.length -1 && <button onClick={()=> changePageTo(pages.length)} className="btnBackNext">Last</button>}
      </div>
    </>
    

  );
};

export default Pagination;
