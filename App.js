import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';


class App extends Component {
  componentWillMount() {
    const config = {
     apiKey: 'AIzaSyA-L5oeaWZcAISmU4q89oFf36A71C1y5hQ',
     authDomain: 'manager-80456.firebaseapp.com',
     databaseURL: 'https://manager-80456.firebaseio.com',
     projectId: 'manager-80456',
     storageBucket: 'manager-80456.appspot.com',
     messagingSenderId: '448044693372'
 };
 firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
          <Router />
      </Provider>
    );
  }
}
console.ignoredYellowBox = ['Setting a timer'];
export default App;
