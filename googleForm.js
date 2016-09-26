
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  ScrollView,
  ActivityIndicator,
  Switch,
  WebView,
  ProgressBarAndroid,
  TouchableOpacity,
  TouchableHighlight,
  Text,
  Image,
  View
} from 'react-native';



class GoogleForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader : true
    };
  }
  showLoader = () => {
    this.setState({loader:false});
  };

  render() {
    const { width, height} = Dimensions.get('window');
      return (
        <View style={[styles.container]}>
        <ActivityIndicator
          animating={true}
          style={this.state.loader?styles.centering:styles.hideLoader}
          size="large"
          color="white"
        />
        <WebView source={{uri:this.props.formLink}}
        onLoad={this.showLoader}
        style={!this.state.loader?{height:height, backgroundColor:'#009688'} : {height:0, backgroundColor:"#009688"}}/>
        </View>
      );
  }
}



var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#009688",
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    height: 80
  },
  hideLoader:{
    padding: 0,
    height: 0
  },
  webView: {
    backgroundColor: "black",
    height: 350,
  },
  activeItem: {
    borderWidth: 1,
    backgroundColor:"#BDBDBD",
    alignItems: 'center',
    justifyContent: 'center'
  },
  item: {
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    height: 50,
    width: 50
  },
  addressBarRow: {
    flexDirection: 'row',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center'
  }
});


module.exports = GoogleForm;
