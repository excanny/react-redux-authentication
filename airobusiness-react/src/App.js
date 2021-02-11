import React, { Component } from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
              {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                  <Link className="navbar-brand" to={"/"}>Airo Business</Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <Link className="nav-link active" to={"/"}>Home</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to={"/sign-in"}>Sign In</Link>
                      </li>
                      <li className="nav-item">
                      <Link className="nav-link" to={"/sign-up"}>Sign Up</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav> */}


            <div className="">
              <div className="">
                
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route path="/signin" component={Login} />
                  <Route path="/signup" component={Register} />
                </Switch>
              </div>
            </div>
          </div>

        </Router>
    );
  }
}

export default App;



