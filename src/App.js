import React from 'react';
import './App.css';
import routes from './routes'
import { withRouter } from 'react-router-dom'
import Header from './Components/Header'





class App extends React.Component {
  render() {
    return (
      <div className="App" >
        {this.props.location.pathname !== '/' ? <Header /> : null}
        {routes}
      </div>
    );
  }
}

export default withRouter(App);
