import './App.css';
import HomeComponent from './components/homecomponent';

function App() {
  return (
    <div className="App" data-testid="container">
      <header className="App-header">
        <HomeComponent />
      </header>
    </div>
  );
}

export default App;
