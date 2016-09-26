/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {
   AppRegistry,
   StyleSheet,
   Dimensions,
   ScrollView,
   Navigator,
   WebView,
   TouchableOpacity,
   TouchableHighlight,
   Text,
   Image,
   View
 } from 'react-native';

 import LoginPage from './loginpage.js';
 import HomeScreen from './homeScreen.js';
 import SplashScreen from './splash.js';
 import GoogleForm from './googleForm.js';



 class App extends Component {
   render() {
     return (
       <Navigator
         configureScene={(route) =>
           ({ ...Navigator.SceneConfigs.HorizontalSwipeJump, gestures: false })}
         initialRoute={{ id: 'Splash', name: 'Index' }}
         renderScene={ this.renderScene.bind(this)}
       />
     );
   }
   renderScene(route, navigator) {
     const routeId = route.id;
     const topic = route.topic;
     const firebaseApp = route.firebaseVar;
     const formLink = route.url;
     // const phoneNumber = route.number;
     // const eventDetails = route.eventDetails;
     if (routeId === 'LoginPage') {
       return (
         <LoginPage
           navigator={navigator}
         />
       );
     } else if (routeId === 'HomeScreen') {
       return (
         <HomeScreen
           topic={topic}
           firebaseApp={firebaseApp}
           navigator={navigator}
         />
       );
     } else if (routeId === 'Deals') {
       return (
         <DailyDeals
           navigator={navigator}
         />
       );
     } else if (routeId === 'NewArrivals') {
       return (
         <NewProduct
           navigator={navigator}
         />
       );
     }  else if (routeId === 'Splash') {
       return (
         <SplashScreen
           navigator={navigator}
         />
       );
     } else if (routeId === 'GoogleForm') {
       return (
         <GoogleForm
           formLink={formLink}
           navigator={navigator}
         />
       );
     }
   }
 }


AppRegistry.registerComponent('aptihelp', () => App);
