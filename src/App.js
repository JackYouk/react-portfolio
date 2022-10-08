import Particles from "./Particles";
import './App.css';
import Header from "./Header";
import ProjectDisplay from "./ProjectDisplay";

function App() {
  return (
    <div className="App">
      <div className="App-header"> 
        <Header />
        <ProjectDisplay />
        <Particles />
      </div>
      
      
    </div>
  )
}

export default App;
