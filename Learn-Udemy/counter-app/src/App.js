import './App.scss';
import Counter from './components/Counter/Counter';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">
            Counter App
        </h1>
      </header>
      <Counter initialNumber={10}/>
    </div>
  );
}

export default App;
