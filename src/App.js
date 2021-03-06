import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layouts/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import NewsList from './components/news/NewsList';
import LogIn from './components/auth/LogIn';
import SignUp from './components/auth/SignUp';
import About from './components/about/About';
import Footer from './components/layouts/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App grey lighten-2">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/login" component={LogIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/about" component={About} />
            <Route path="/news" component={NewsList} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
