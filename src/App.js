import './App.css';
import ListOfGifs from './components/ListofGifs'
import { Link, Route } from 'wouter'

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
          <Link to='/gif/brasil-70'>Gifs de Brasil '70</Link>
          <Link to='/gif/cat'>Gatos</Link>
          <Link to='/gif/chile'>Chile</Link>
          <Route 
            path='/gif/:keyword' 
            component= {ListOfGifs} 
         />
      </section>
    </div>
  );
}

export default App;
