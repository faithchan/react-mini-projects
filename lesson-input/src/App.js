import './App.css';
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';

function App() {
  return (
    <div className="App">
      <UncontrolledForm/>
      <ControlledForm/>
    </div>
  );
}

export default App;
