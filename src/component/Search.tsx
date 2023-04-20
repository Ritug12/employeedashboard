import { TextField } from "@mui/material";
import { useState } from "react";
import './Search.css'


const Search = () =>{
    
  const [inputText, setInputText] = useState("");

    const inputHandler = (e:any) => {
        //convert input text to lower case
        var lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
      };

    return (
        <div className="main">
            <h1>Search here</h1>
            <div className="search">
                <TextField 
               id="outlined-basic"
               onChange={inputHandler}
               variant="outlined"
               fullWidth
               label="Search" />
            </div>
        </div>
    )
}

export default Search;