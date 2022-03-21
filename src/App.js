import React from "react";
import {Header} from "./Companents/Header/Header";
import BlogEntries from "./Companents/BlogEntries/BlogEntries";
import Sidebar from "./Companents/Sidebar/Sidebar";
import Footer from "./Companents/Footer/Footer";
import "./index.css"

const App = () => {
  return(
      <>
          <div className="w3-content" style={{maxWidth:"1400px"}}>
            <Header/>
            <div className="w3-row">
                <BlogEntries/>
                <Sidebar/>
            </div>
          </div>
          <Footer/>
      </>
)
}

export default App;
