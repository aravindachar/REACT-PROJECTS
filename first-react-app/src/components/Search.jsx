import React from "react";

const Search=({ searchTerm,setsearchTerm })=>{
    // create a new state 

    return(
        <div className="search
        ">
            <div>
                <img src="search.svg" alt="search" />

                <input type="text" 
                placeholder="search thourug thousands of movies"
                value={searchTerm}
                // listing fot the on change event 
                onChange={(e)=>setsearchTerm(e.target.value)} />
            </div>
        </div>
    )
}
export default Search;