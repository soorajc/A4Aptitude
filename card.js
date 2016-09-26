
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  ScrollView,
  Switch,
  WebView,
  ProgressBarAndroid,
  TouchableOpacity,
  TouchableHighlight,
  Text,
  Image,
  View
} from 'react-native';



class Card extends Component {
  render() {
    const { width, height} = Dimensions.get('window');
    return (
      <View style={[styles.container]}>
      <ScrollView  showsHorizontalScrollIndicator={false} horizontal={false} ScrollView  snapToAlignment='start' snapToInterval={500} decelerationRate={0} ref = {component=>{this._scrollView=component;}}  contentOffset={{"x": 0, "y": 0}} indicatorStyle='black'  scrollEventThrottle={10} >
        <TouchableOpacity style={{backgroundColor:"#FAFAFA", borderWidth: 2, borderColor:'white', padding: 10}} onPress={this.props.handleForm.bind(this, this.props.youtubeLink)}>
          <Text style={{color : '#9C27B0', textAlign:"center", fontSize: 18, fontWeight: 'bold'}}>Watch Concept Video</Text>
        </TouchableOpacity>
        <Text style={{backgroundColor:"white", color : 'black',fontSize: 18, fontWeight: 'bold'}}>Equations To Remember</Text>
        {this.props.equations.split("\n").map(i=> {
            return (<View style={{backgroundColor:"#009688", padding: 20}}>
                    <Text style={{ color : 'white',fontSize: 18, fontWeight: 'bold'}}>{i}</Text>
                  </View>
            );
        })}
        <Text style={{backgroundColor:"white", color : 'black',fontSize: 18, fontWeight: 'bold'}}>Problem Types</Text>
        <View style={{backgroundColor:"#2196F3",padding: 10}}>
        {this.props.problemTypes.split("\n").map(i=> {
            return (<Text style={{ color : 'white',  fontSize: 18, fontWeight: 'bold'}}>{i}</Text>);
        })}
        </View>
        <TouchableOpacity style={{backgroundColor:"#FAFAFA", borderWidth: 2, borderColor:'white', padding: 10}} onPress={this.props.handleForm.bind(this, this.props.googleLink)}>
          <Text style={{color : '#E91E63', textAlign:"center", fontSize: 18, fontWeight: 'bold'}}>Practise Questions</Text>
        </TouchableOpacity>
      </ScrollView>
      </View>
    );
  }
}



var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"black",
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


module.exports = Card;
