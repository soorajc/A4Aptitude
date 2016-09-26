
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  TextInput,
  ScrollView,
  BackAndroid,
  NetInfo,
  TouchableOpacity,
  TouchableHighlight,
  Text,
  Image,
  View
} from 'react-native';

class SplashScreen extends Component {

  goToLoginPage = () => {
    const navigator = this.props.navigator;
    navigator.push({
      id: 'LoginPage',
      gestures: false
    });
  };


  componentDidMount() {
      setTimeout(this.goToLoginPage, 2000);
    NetInfo.isConnected.removeEventListener(
      'change',
      this.handleFirstConnectivityChange()
    );
  }

  handleFirstConnectivityChange=(isConnected)=> {
    if(isConnected){
      alert("Network Error Try Again");
    }
  };

  onBack = () => {
    const navigator = this.props.navigator;
    navigator.pop();
  };

  render() {
    const { width } = Dimensions.get('window');
    return (
      <View style={styles.container}>
      <TouchableOpacity style={{ backgroundColor:'transparent',alignItems: 'center', borderWidth:2, borderColor:"white", justifyContent: 'center', paddingTop: 10, paddingBottom: 10, paddingRight: 10, paddingLeft: 10}}>
          <Text style={{ color : 'white', textAlign: 'center', fontSize: 28, fontWeight: 'bold'}}>A4Aptitude</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009688',
  }
});

module.exports = SplashScreen;
