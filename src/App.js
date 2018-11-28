import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { Link } from 'react-router-dom';


// Pages
import Home from './pages/Home';
import Characters from './pages/Characters';
import Detail from './pages/Detail';


class App extends Component {
   
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Navbar />

          <Header />

          <Container>
            <Switch>
                          

              <Route path="/" exact component={Home} />
              <Route path="/create" exact component={Characters} />
              <Route path="/detail/:id" exact component={Detail} />            
              
              <Redirect to="/" />
            </Switch>
          </Container>
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
