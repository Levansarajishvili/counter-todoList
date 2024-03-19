import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from './Navbar';
import Counter from './pages/Counter';
import ChangableInput from './pages/ChangableInput';
import Todolistt from './pages/Todolistt';
import LessonLifecycle from './pages/LessonLifecycle';


function App() {


  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/input" element={<ChangableInput />} />
          <Route path="/Todolistt" element={<Todolistt />} />
          <Route path="/LessonLifecycle" element={<LessonLifecycle />} />
        </Routes>
      </Router>
    </div>
  );
}

// {planets.map((planet, key) => planet.isGasPlanet && <h1> {planet.name} </h1>)}

// const users = [
//   {name: "Levan", age: 33},
//   {name: "Kakha", age: 34},
//   {name: "Dato", age: 25},
// ]

// return (<div className="App">
//   {users.map((user, key) => {
//     return ( 
//     <User name={user.name} age={user.age} />
//     );
//   })}
// </div>
// );

// const age = 15;
// const isGreen = true;

// return (<div className="App">
//  {age >= 18 ? <h1>Over Age</h1> : <h1>Under Age</h1>}
//  <h1 style={{color: isGreen ? "green" : "red"}}>This has color</h1>

//  {isGreen && <button>THIS IS A BUTTON</button>}
// </div>
// );


// if (age >= 18) {
//   return <h1>Over Age</h1>
// } else {
//   return <div className="App">Under Age</div>;
// }


export default App;
