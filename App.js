import React, {Component} from 'react';

import { StyleSheet, View, Text, Alert, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends Component{

  render() {

    const facebook_button = (

      <Icon.Button name="facebook" backgroundColor="#3b5998" size={20} onPress={()=>{Alert.alert("Facebook Button Clicked")}}>

        <Text style={{fontFamily: 'Arial', fontSize: 15, color: '#fff'}}>Login with Facebook</Text>

      </Icon.Button>
    
    );
    
    const twitter_button = (

      <Icon.Button name="twitter" backgroundColor="#51aaf0" size={20} onPress={()=>{Alert.alert("Twitter Button Clicked")}}>

        <Text style={{fontFamily: 'Arial', fontSize: 15, color: '#fff'}}>Follow Us on Twitter</Text>

      </Icon.Button>
    
    );


    const google_plus_button = (

      <Icon.Button name="google" backgroundColor="#dc4335" size={20} onPress={()=>{Alert.alert("Google Plus Button Clicked")}}>

        <Text style={{fontFamily: 'Arial', fontSize: 15, color: '#fff'}}>Login With Google+</Text>

      </Icon.Button>
    
    );

    const android_icon = (

      <Icon name="android" size={60} color="#007c00" onPress={()=>{Alert.alert("Android Icon Clicked")}} />

    );

    const music_icon = (

      <Icon name="music" size={60} color="#fb3742" onPress={()=>{Alert.alert("Music Icon Clicked")}} />

    );

    return (

      <View style={styles.MainContainer}>
    
        <TouchableOpacity>

          {facebook_button}

        </TouchableOpacity>


        <TouchableOpacity style={{marginTop: 10}}>

          {twitter_button}

        </TouchableOpacity>


        <TouchableOpacity style={{marginTop: 10}}>

          {google_plus_button}

        </TouchableOpacity>


        <TouchableOpacity style={{marginTop: 10}}>

          {android_icon}

        </TouchableOpacity>

        <TouchableOpacity style={{marginTop: 10}}>

        {music_icon}

        </TouchableOpacity>
        
       
      </View>

    );

  }

}

const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20
  }

});