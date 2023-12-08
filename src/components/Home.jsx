import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { addbookmark, fetchquote } from '../features/quotesSlice';

const Home = () => {
const [selectedOption, setSelectedOption] = useState("");

const dispatch=useDispatch();
const quote=useSelector((state)=>state.quote);

const handleOptionChange = (event) => {
  setSelectedOption(event.target.value);
};



const handleNextButtonClick = (e) => {
  e.preventDefault();
  if (selectedOption === "") {
   
    dispatch(fetchquote("https://api.quotable.io/random"));
 
  } else {
  
    dispatch(
      fetchquote(`https://api.quotable.io/random?tags=${selectedOption}`)
    );
    setSelectedOption("");
  }
  
 
};


useEffect(() => {
   dispatch(fetchquote("https://api.quotable.io/random"));
}, [])

const addbookmarkhandler=()=>{
  dispatch(addbookmark(quote));
}

return (
  <div className="content">
    <div className="red-box">
      <p className="p-big">{quote.quote}</p>
      <p>
        <span>{quote.author}</span>{" "}
        <span style={{ marginLeft: "40px" }}>
          <i
            className="fa-regular fa-bookmark"
            onClick={addbookmarkhandler}
          ></i>
        </span>
      </p>
    </div>
   {quote.status!=='success'&&<div class="spinner-border text-light" role="status">
      <span class="sr-only">Loading...</span>
    </div>}
    <div className="input-section">
      <select
        value={selectedOption}
        onChange={handleOptionChange}
        className="select-field"
      >
        <option value={" "}></option>
        <option value="famous-quotes">Famous Quotes</option>
        <option value="technology">technology</option>
        <option value="wisdom">wisdom</option>
        <option value="History">History</option>
        <option value="civil-rights">civil-rights</option>
      </select>
    </div>
    <button onClick={handleNextButtonClick} className="btn-next">
      Next Quote
    </button>
  </div>
);
}

export default Home