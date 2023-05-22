import './App.css';
import { Link, Route } from 'wouter'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import StaticContext from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';

function App() {
  return (
    <StaticContext.Provider value={{name: 'Guali',
    suscribeteAlCanal: true}}>
    <div className="App">
      <section className="App-content">
          <Link to='/'>
            <img className='App-logo' alt='Giffy logo' src='icon-robot.png'></img>
          </Link>
          <GifsContextProvider>
          <Route
            component= {Home}
            path= "/"
          />
          <Route
            component= {SearchResults}
            path="/search/:keyword"
          />
          <Route 
            component= {Detail} 
            path='/gif/:id' 
         />
         </GifsContextProvider>
      </section>
    </div>
    </StaticContext.Provider>
  );
}

export default App;
