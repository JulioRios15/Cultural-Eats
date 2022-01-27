import logo from './logo.svg';
import './App.css';
import Categories from './components/Categories/Categories';
import RandomMeal from './components/RandomMeal/RandomMeal';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a>
        <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/categories" component={Categories}/>
        <Route exact path="/random" component={RandomMeal}/>
      </Switch>
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
