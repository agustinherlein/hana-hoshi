
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import flipis from "./img/flipis.png"
import Header from "./components/Header"


function App() {
  return (
    <div className="app">
      <Header/>
      <div className="main">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<div>Lorem ipsum XD</div>}/>
          </Routes>
          
        </BrowserRouter>
        </div>
    
    </div>
  );
}

// ReactDOM.render((<BrowserRouter basename={process.env.PUBLIC_URL}>
//   <App />
//   <BrowserRouter/>), ...)

export default App;
