
import React, { Component } from 'react';
import Card from './card.js';
import {firebaseApp} from './config.js';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  ScrollView,
  Switch,
  WebView,
  ProgressBarAndroid,
  TouchableOpacity,
  ActivityIndicator,
  TouchableHighlight,
  Text,
  Image,
  View
} from 'react-native';

var HEADER = '#FAFAFA';
var BGWASH = '#BBDEFB';
var DISABLED_WASH = '#FAFAFA';

var WEBVIEW_REF = 'webview';


class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      moreDetails: '',
    };
  }


  getData = () => {
    var dataList = [];
    var topic = this.props.topic;
    var firebaseRef = firebaseApp.database().ref();
    firebaseRef.orderByChild("topic").equalTo(topic).on("child_added", function(snapshot) {
       console.log("data recroded", snapshot.val());
        dataList.push(snapshot.val());
        this.setState({moreDetails:dataList});
    }.bind(this));
  };

  componentWillMount = () =>{
    this.getData();
  }


  handleBack = () => {
    this.props.navigator.pop();
  };

  goToTest = (link) => {
    const navigator = this.props.navigator;
    navigator.push({
      id: 'GoogleForm',
      url: link,
      gestures: false
    });
  };


  render() {
    const { width, height} = Dimensions.get('window');
    if(this.state.moreDetails){
    return (
      <View style={[styles.container]}>
      {
         this.state.moreDetails.map((item, index) => {
           return (<Card title={item.topic} equations={item.equations} problemTypes={item.types} youtubeLink={item.youtubeLink} googleLink={item.googleForm} handleForm={this.goToTest}/>);
         })
       }
      </View>
    );
  }else{
    return(
      <View style={[styles.loading]}>
        <ActivityIndicator
        animating={true}
        style={[styles.centering, {height: 80}]}
        size="large"
        />
      </View>
    );
  }
  }
}



var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: HEADER,
  },
  centering: {
   alignItems: 'center',
   justifyContent: 'center',
   padding: 8,
 },
  loading: {
    flex: 1,
    backgroundColor: HEADER,
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
  },
  webView: {
    backgroundColor: BGWASH,
    height: 350,
  },
  addressBarTextInput: {
    backgroundColor: BGWASH,
    borderColor: 'transparent',
    borderRadius: 3,
    borderWidth: 1,
    height: 24,
    paddingLeft: 10,
    paddingTop: 3,
    paddingBottom: 3,
    flex: 1,
    fontSize: 14,
  },
  navButton: {
    width: 20,
    padding: 3,
    marginRight: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: BGWASH,
    borderColor: 'transparent',
    borderRadius: 3,
  },
  disabledButton: {
    width: 20,
    padding: 3,
    marginRight: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: DISABLED_WASH,
    borderColor: 'transparent',
    borderRadius: 3,
  },
  goButton: {
    height: 24,
    padding: 3,
    marginLeft: 8,
    alignItems: 'center',
    backgroundColor: BGWASH,
    borderColor: 'transparent',
    borderRadius: 3,
    alignSelf: 'stretch',
  },
  statusBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
    height: 22,
  },
  statusBarText: {
    color: 'white',
    fontSize: 13,
  },
  spinner: {
    width: 20,
    marginRight: 6,
  },
  buttons: {
    flexDirection: 'row',
    height: 30,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    flex: 0.5,
    width: 0,
    margin: 5,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'gray',
  },
});


module.exports = HomeScreen;
