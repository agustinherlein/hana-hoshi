
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import flipis from "./img/flipis.png"
import Header from "./components/Header"


function App() {
  return (
    <div className="app">
      <Header/>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path='/' element={<div className="main">Lorem ipsum XD</div>}/>
          </Routes>
        </BrowserRouter>
    
    </div>
  );
}

export default App;
