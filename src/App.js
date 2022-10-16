import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { action,originals } from "./urls";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <RowPost title='NETFLIX ORIGINALS' url={originals}/>
      <RowPost title='ACTION MOVIES' url={action} isSmall action />
      <RowPost title='ACTION MOVIES' url={action} isSmall action />
    </div>
  );
}

export default App;
