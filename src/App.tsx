import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from 'react-router-dom';
import Home from './pages/Home/Home';
import Order from './pages/Order/Order';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' Component={Home} />
        <Route path='/order/:id' Component={Order} />
      </Switch>
    </Router>
  );
}

export default App;
