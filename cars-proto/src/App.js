import './App.css';
import ModelCard from './components/ModelCard';

function App() {
  return (
    <div className="App">
      <ModelCard modelName="Edge"></ModelCard>
      <ModelCard modelName="Expedition"></ModelCard>
      <ModelCard modelName="Explorer"></ModelCard>
    </div>
  );
}

export default App;
