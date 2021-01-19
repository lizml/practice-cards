import Home from './home'
import Character from './character'
import CharacterList from './character-list'
import './App.css';
import {Provider} from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    
    <div className="App">
       
      <div>
        
      
        <Switch>
        <Route path="/character">
        <CharacterList/>
        {/* <Character 
         img="https://img.hipertextual.com/img/2017/03/05/camiseta-joker-rick-morty.jpg"
         name="Rick"
         species= "Human"
         status= "Alive"
        /> */}
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
       
      </div>
    </div>
  );
}

export default App;
