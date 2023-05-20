// import React from "react";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { useState } from 'react';

let Square = () => {
  const [colorA, setColorA] = useState('red')
  const [colorB, setColorB] = useState('blue')
  let renderColors = () => {
    setColorA(colorA === 'red' ? 'blue' : 'red');
    setColorB(colorB === 'red' ? 'blue' : 'red');
  }
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center',gap:'20px', backgroundColor: 'teal', height:'120px',maxWidth:'320px'}}>
      <div style={{ width: '100px', height: '100px', backgroundColor: colorA, borderRadius: '50px'}}
        onClick={renderColors}></div>
      <div style={{ width: '100px', height: '100px', backgroundColor: colorB, borderRadius: '50px'}}
        onClick={renderColors}></div>
    </div>
  );
};

export default Square;
