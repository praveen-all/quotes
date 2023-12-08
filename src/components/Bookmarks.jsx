import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getbookmark } from "../features/quotesSlice";
const Bookmarks = () => {
  const quotes = useSelector((state) => state.bookmark.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getbookmark());
  }, []);
  // console.log(quotes);
  return (
    <div className="content" style={{display:"flex",alignItems:"center","justifyContent":"center",flexDirection:"column",rowGap:"30px"}}>
      {quotes.length !== 0 ?
        quotes.map((quote) => (
          <div className="red-box" key={quote.quote}>
            <p className="p-big">{quote.quote}</p>
            <p>
              <span>~{quote.author}</span>
            </p>
          </div>
        )):<h2 style={{color:"white"}}>no bookmark quotes</h2>}
    </div>
  );
};

export default Bookmarks;
