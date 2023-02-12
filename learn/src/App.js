import logo from './logo.svg';
import './App.css';
import './components/Greet'
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
function App() {
  return (
    <div className="App">
      <Greet name="Larisa" heroName="Super-girl" >
        <p>This is children props</p>
        
      </Greet>
      <Greet name="Daiana" heroName="Wonder-woman"/>
      <button>Action</button>
      <Welcome name="Daiana" />
      <Hello />
      <Message />
      <Counter />
    </div>
  );
}

export default App;
