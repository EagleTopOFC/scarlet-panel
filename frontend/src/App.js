import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Services from './components/Services';
import Orders from './components/Orders';
import Login from './components/Login';
import Register from './components/Register';
import './styles/App.css';

function App() {
  const [apiKey, setApiKey] = useState(null); // Aquí se guardará la API Key del usuario

  return (
    <Router>
      <Navbar apiKey={apiKey} />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route
          path="/services"
          render={() => <Services apiKey={apiKey} />}
        />
        <Route
          path="/orders"
          render={() => <Orders apiKey={apiKey} />}
        />
        <Route exact path="/" component={HomePage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
