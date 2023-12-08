import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";

export const fetchquote = createAsyncThunk("fetch-quote", async (api) => {
    
  const response = await fetch(api);
  return response.json();
  

});

const initialState = {
  quote: {
    status: "loading",
    quote: " ",
    author: " ",
  },
  bookmark: {
    data: [],
  },
};

export const quotesSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
        addbookmark:(state,action)=>{
            let val=JSON.parse(localStorage.getItem('quotes'));
            if(!val){
                val=[]
            }
            val.push(action.payload);
            localStorage.setItem("quotes",JSON.stringify(val));
        },
        chageStatus:(state,action)=>{
          state.quote.status="loading";
        },
        getbookmark:(state,action)=>{
            console.log("hi")
            let val = JSON.parse(localStorage.getItem("quotes"));
            if (!val) {
              val = [];
            }
            state.bookmark.data=val;
            

        }
  },
  extraReducers:(builder)=>{

    builder.addCase(fetchquote.fulfilled,(state,action)=>{
      (state.quote.status = "success"),
        (state.quote.quote = action.payload.content),
        (state.quote.author = action.payload.author);

    }).addCase(fetchquote.pending,(state,action)=>{
             state.quote.status="loading";
    })
  }
});

export const { addbookmark,getbookmark ,chageStatus} = quotesSlice.actions;
export default quotesSlice.reducer;
