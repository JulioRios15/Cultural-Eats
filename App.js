import "./App.css";
import "./";

function App() {
    const [query, setquery] = useState("")

    const YOUR_APP_ID = "";
    const YOUR_APP_Key = "8196e50bf8mshcd55c5c97f59169p1ace";
    var url = 'https://themealdb.p.rapidapi.com/filter.php'

    function getRecipe (){
        var result = await Axios.get(url);
        console.log(result.data)
    }
}
return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );





export default App;