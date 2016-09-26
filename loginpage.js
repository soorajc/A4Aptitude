import React, { Component, DeviceEventEmitter } from 'react';
import {firebaseApp} from './config.js';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  TextInput,
  ScrollView,
  ActivityIndicator,
  BackAndroid,
  TouchableOpacity,
  TouchableHighlight,
  Text,
  Image,
  View
} from 'react-native';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic : "",
      youtubeLink:"",
      types:"",
      equations:"",
      googleLink:"",
      showDetails:false
    };
  }

  getData = () => {
    var myArray = [];
    var firebaseRef = firebaseApp.database().ref();
    firebaseRef.orderByChild("topic").on("child_added", function(snapshot) {
      myArray.push(snapshot.val());
      this.setState({topic:myArray});
    }.bind(this));
  };

  componentWillMount=()=> {
    this.getData();
  };


  goToMoreDetails = (topic) => {
    const navigator = this.props.navigator;
    navigator.push({
      id: 'HomeScreen',
      topic:topic,
      gestures: false,
    });
  };



  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      const array = this.props.navigator.getCurrentRoutes();
      if (array.length !== 2) {
        this.onBack();
        return true;
      } else {
        return false;
      }
    });
  }

  onBack = () => {
    const navigator = this.props.navigator;
    navigator.pop();
  };

  render() {
    const { width, height } = Dimensions.get('window');
    if(!this.state.showDetails&&this.state.topic){
    return (
      <View style={styles.container}>
        <ScrollView  showsHorizontalScrollIndicator={false} horizontal={false} ScrollView  snapToAlignment='start' snapToInterval={500} decelerationRate={0} ref = {component=>{this._scrollView=component;}}  contentOffset={{"x": 0, "y": 0}} indicatorStyle='black'  scrollEventThrottle={10} >
        <TouchableOpacity style={styles.button3}>
          <Text style={{ color : 'black', textAlign: 'left', fontSize: 18, fontWeight: 'bold'}}>Select a Topic</Text>
        </TouchableOpacity>
        {
           this.state.topic.map((item, index) => {
             return (<TouchableOpacity style={index%2===0 ? styles.button2 : styles.button1} onPress={this.goToMoreDetails.bind(this,item.topic)}>
               <Text style={{ color : 'white', textAlign: 'center', fontSize: 18, fontWeight: 'bold'}}>{item.topic}</Text>
             </TouchableOpacity>);
           })
         }
        </ScrollView>
      </View>
    );
  }else{
    return(
      <View style={styles.loading}>
       <Text style={{color : 'white', fontWeight: 'bold'}}>Loading Please Wait</Text>
        <ActivityIndicator
        animating={true}
        style={[styles.centering, {height: 80}]}
        size="large"
        color="white"
        />
      </View>
    );
  }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  button1:{
    backgroundColor:"#673AB7",
    borderWidth: 2,
    borderColor:'white',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button3:{
    backgroundColor:"#FAFAFA",
    borderWidth: 2,
    borderColor:'white',
    padding: 10,
  },
  button2:{
    backgroundColor:"#E91E63",
    borderWidth: 2,
    borderColor:'white',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#009688",
  },
  mainTitle: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30
  },
  textContainer: {
    flex: 0.2,
    padding: 5,
    backgroundColor: '#AB47BC',
    flexDirection: 'row'
  },
  startButton: {
    backgroundColor: 'white',
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  accountButtonText : {
    color: 'white',
    fontSize: 18
  },
  accountButton: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    borderColor: 'white',
    borderWidth: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startButtonText: {
    color: '#26A1DE',
    fontSize: 18
  },
  subTitle: {
    color: 'white',
    marginTop: 5,
    fontSize: 15
  },
  iconContainer: {
    flex: 0.7,
    padding: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainLogo: {
    height: 200,
    width: 200,
  },
  buttonContainer: {
    flex: 0.2,
    padding: 25
  },
});

module.exports = LoginPage;
