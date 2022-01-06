import './App.css';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import ModelsPage from './pages/Models';
import MakesPage from './pages/Makes';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <div className="App">
      <MainNavigation></MainNavigation>
      <Switch>
        <Route path="/" exact>
          <HomePage></HomePage>
        </Route>
        <Route path="/makes">
          <MakesPage></MakesPage>
        </Route>
        <Route path="/models">
          <ModelsPage></ModelsPage>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
