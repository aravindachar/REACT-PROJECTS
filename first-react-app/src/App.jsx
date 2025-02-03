import React, { useState } from "react";
import Search from "./components/Search";


const App=()=>{
  const[searchTerm, setsearchTerm]=useState('');



  return(
    <main>
      <div className="pattern"></div>

      <div className="wrapper">
       <header>
        <img src="./hero.png" alt="hero" />
       <h1>Find <span className="text-gradient">Movies </span>
       You'll Enjoy Without the Hassels</h1>
       </header>

       < Search searchTerm={searchTerm} setsearchTerm={setsearchTerm}/>
       <h1>{searchTerm}</h1>
       </div>
    </main>
  )
}
export default App

