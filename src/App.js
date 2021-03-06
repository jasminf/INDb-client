import React, {Component} from 'react';
import './index.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import SearchPage from'./components/Layout/SearchPage'
import ListUserFav from'./components/Favorites/ListUserFav'
import SignIn from './components/Users/signIn'
import SignUp from './components/Users/signUp'



class App extends Component {

  render() {
      return (
        <Router>
          <React.Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <Route path='/signin' component={SignIn} />
                <Route path='/signup' component={SignUp} />
                <Route exact path="/" component={SearchPage} />
                <Route exact path="/fav_list" component={ListUserFav} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
    );
  }
}
export default App;


/* <Route exact path="/user/Favorites/:id" component={Favorites} /> */
 /*  <Route exact path="/sign_up" component={Favorites} /> */