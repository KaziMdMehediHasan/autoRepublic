import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import AddService from './components/AddService/AddService';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Dashboard from './components/Dashboard/Dashboard';
import AllProducts from './components/Products/AllProducts/AllProducts';

function App() {
  return (
    <Router>
      <NavigationBar></NavigationBar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/addService">
          <AddService></AddService>
        </Route>
        <Route path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
        <Route path="/allProducts">
          <AllProducts></AllProducts>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
