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
import React from "react";
class Square extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      colorBlue: 'blue',
      colorRed: 'red'
    }
  }
  renderColors = () => {
    this.setState((changeColor) => ({
      colorBlue: changeColor.colorRed,
      colorRed: changeColor.colorBlue
    }))
  }
  render(){
    return(
      <div style={{display:'flex', justifyContent:'center', alignItems:'center',gap:'20px', backgroundColor: 'teal', height:'120px',maxWidth:'320px'}}>
        <div style={{ width: '100px', height: '100px', backgroundColor: this.state.colorBlue, borderRadius: '50px'}} onClick={this.renderColors}></div>
        <div style={{ width: '100px', height: '100px', backgroundColor: this.state.colorRed, borderRadius: '50px'}} onClick={this.renderColors}></div>
    </div>
    )
  }
}
export default Square;
