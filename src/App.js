import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp(
      {
        apiKey: 'AIzaSyAOMslnFL4_BxBjpKyXqFf4N4JKAY7BTeI',
        authDomain: 'react-native-auth-1aba9.firebaseapp.com',
        databaseURL: 'https://react-native-auth-1aba9.firebaseio.com',
        projectId: 'react-native-auth-1aba9',
        storageBucket: 'react-native-auth-1aba9.appspot.com',
        messagingSenderId: '612137891086',
        appId: '1:612137891086:web:37ba6c476f75f90a'
      }
    );
  }


  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
