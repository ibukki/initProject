/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View,
} = React;

var StartPage = require('./components/startPage');

var initProject = React.createClass({
  render() {
    return ( 
      <NavigatorIOS style = {styles.container}
        initialRoute = {
        {
          title: 'Go',
          component: StartPage
        }
      } ></NavigatorIOS>
    )
  }
});


var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('initProject', () => initProject);