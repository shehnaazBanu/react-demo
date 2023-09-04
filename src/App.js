// function App() {
//   return (
//     <div>
//       <p>Hello World!</p>
//     </div>
//   );
// }

// lets re-write  the javascript function App using arrow syntax

  // const App = () => {
  //   console.log("I love Mateen")
  //   return (
  //     <div>
  //     <p>Hello World!</p>
  //     </div>
  //   );
  // }

  const Hello = () => {
    return (
      <div>
        <p>Hello World!</p>
      </div>
    );
  }

  const App = () => {
    return(
      <div> 
        <h1> Greetings</h1>
        <Hello />
      </div>
    );
  }

  export default App;