import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import axios from 'react-native-axios';
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableOpacity
} from 'react-native';

import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';

export default function LoginScreen() {
  const { container, imageContainer, inputWrapper, inputLabel, loginInput, yellowText, socialsWrapper, twitter,
          facebook, gplus, socialIconWrapper, fullYellow, loginButton, whiteText, buttonWrapper, bottomView } = styles;
  const [ email, setEmail ] = useState("")
  const [ password, setPassword ] = useState("")


  function loginHandler() {
    axios.get('https://bend-stag.herokuapp.com/api/v1/users')
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  function registerHandler() {
    console.log('olar')
  }
          
  return (
    <ImageBackground source={require('../assets/images/bg.png')}  style={{width: '100%', height: '100%'}}>
      <View>
        <View style={imageContainer}>
          <Image
          source={ require('../assets/images/logo.png') }
          />
        </View>

        <View style={container}>
          <View style={inputWrapper}>
            <Text style={inputLabel}>Seu e-mail</Text>
            <TextInput style={loginInput} value={email} onChangeText={text => setEmail(text)} />
          </View>
          <View style={inputWrapper}>
            <Text style={inputLabel}>Sua Senha</Text>
            <TextInput secureTextEntry={true} style={loginInput} value={password} onChangeText={text => setPassword(text)} />
          </View>
          <TouchableHighlight style={buttonWrapper} onPress={ () => loginHandler() }>
            <View style={loginButton}>
                <Text style={whiteText}>ENTRAR</Text>
            </View>
          </TouchableHighlight>
          <Text style={yellowText}>or login with</Text>
        </View>
      </View>

      <View style={socialsWrapper}>
        <View style={socialIconWrapper}>
          <Image style={twitter}
            source={ require('../assets/images/twitter.png') }
          />
        </View>
        <View style={socialIconWrapper}>
          <Image style={facebook}
            source={ require('../assets/images/facebook.png') }
          />
        </View>
        <View style={socialIconWrapper}>
          <Image style={gplus}
            source={ require('../assets/images/gplus.png') }
          />
        </View>
      </View>

      <View style={bottomView}>
        <TouchableHighlight onPress={ () => registerHandler() }>
          <View style={fullYellow}>
            <Text style={whiteText}>Quero me cadastrar</Text>
          </View>
        </TouchableHighlight>
      </View>


    </ImageBackground>

  );
}

LoginScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
    imageContainer: {
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      marginTop: 20,
    },
    container: {
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
    inputWrapper: {
      width: "90%",
      marginTop: 20,
    },
    inputLabel: {
      color: "rgba(255, 255, 255, 0.75)",
      fontSize: 15,
    },
    loginInput: {
      borderBottomColor: "rgba(167,122,37, 0.71)",
      borderBottomWidth: 1,
      width: "100%",
      alignSelf: "center",
      color: "rgba(255, 255, 255, 0.75)",
    },
    yellowText: {
      fontSize: 15,
      color: "#A67A25",
      marginTop: 20,
    },
    socialsWrapper: {
      flexDirection: "row",
      width: "80%",
      alignSelf: "center",
      marginTop: 40,
      justifyContent: "space-around",
    },
    twitter: {
      width: 25,
      height: 25,
      resizeMode: 'stretch',
    },
    facebook: {
      width: 12.5,
      height: 25,
      resizeMode: 'stretch',
    },
    gplus: {
      width: 40,
      height: 25,
      resizeMode: 'stretch',
    },
    socialIconWrapper: {
      width: 70,
      height: 70,
      borderWidth: 2,
      borderColor: "#705E30",
      borderRadius: 40,
      justifyContent: "center",
      alignItems: "center",
    },
    fullYellow: {
      width: "100%",
      backgroundColor: "#A77A25",
      height: 70,
      alignItems: "center",
      justifyContent: "center",
    },
    whiteText: {
      fontSize: 20,
      color: "#FFF",
      textTransform: "uppercase",
      fontWeight: "100",
    },
    loginButton: {
      paddingTop: 20,
      paddingBottom: 20,
      paddingLeft: 100,
      paddingRight: 100,
      backgroundColor: 'rgba(65, 39, 15, 0.4)',
      borderRadius: 30,
    },
    buttonWrapper: {
      marginTop: 30,
      marginBottom: 30,
      borderRadius: 30,
    },
    bottomView: {
      position: "absolute",
      bottom: 0,
      width: "100%",
    }
});
