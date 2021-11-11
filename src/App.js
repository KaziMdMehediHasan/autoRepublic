import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import AddService from './components/AddService/AddService';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Dashboard from './components/Dashboard/Dashboard';
import AllProducts from './components/Products/AllProducts/AllProducts';
import PurchaseProduct from './components/PurchaseProduct/PurchaseProduct';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
    <Router>
      <NavigationBar></NavigationBar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <PrivateRoute path="/addService">
          <AddService></AddService>
        </PrivateRoute>
        <PrivateRoute path="/dashboard">
          <Dashboard></Dashboard>
        </PrivateRoute>
        <Route path="/allProducts">
          <AllProducts></AllProducts>
        </Route>
        <PrivateRoute path="/purchaseProduct/:id">
          <PurchaseProduct></PurchaseProduct>
        </PrivateRoute>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/register">
          <Register></Register>
        </Route>
      </Switch>
    </Router>
    </AuthProvider>

  );
}

export default App;
