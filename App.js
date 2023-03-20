import React from 'react';  
import {  createAppContainer } from 'react-navigation';  
import { createStackNavigator} from 'react-navigation-stack';
import { StatusBar } from 'expo-status-bar';
import {StyleSheet,Text, View,Image, TextInput, Button,TouchableOpacity,ImageBackground} from "react-native";

const bg = {uri: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1966&q=80'};

class HomeScreen extends React.Component {  
    render() {  
        return (  
          
            <View style={styles.container}>  
                <ImageBackground source={bg} resizeMode="cover" style={{width:'100%', height:'100%'}}>
                <Image style={{ width: '100%', alignItems: 'center', justifyContent: 'center',marginTop:5, }}  source={require("./logoK.png")} />  
                <View style={{ width: "50%", margin: 10,marginTop:-80, alignItems: 'center',justifyContent: 'center',marginLeft:'25%' }}>
                <Button  
                    title="Login with Google" 
                    color="#3498DB" 
                    onPress={() => this.props.navigation.navigate('LoginGoogle')}  
                />  
                </View>
                <View style={{ width: "50%", margin: 10, alignItems: 'center',justifyContent: 'center',marginLeft:'25%' }}>
                 <Button  
                    color="#3498DB" 
                    title="Login with Phone"  
                    onPress={() => this.props.navigation.navigate('LoginPhone')}  
                /> 
                </View>
                </ImageBackground>
            </View>  
        );  
    }  
}  
class ProfileScreen extends React.Component {  
    render() {  
        return (  
            <View style={styles.container}>
      <Image style={styles.image}  source={require("./logoK.png")} /> 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      <TouchableOpacity style={styles.loginGBtn}  >
        <Text style={styles.loginText}>Sign In</Text> 
      </TouchableOpacity> 

      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text> 
      </TouchableOpacity> 

      <TouchableOpacity style={styles.loginPBtn} >
         <Text style={styles.loginText}>Sign In with Phone Number</Text> 
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.RegisterScreen('Create User')}>
        <Text style={styles.forgot_button}>Don't have account? <Text style={styles.last}>Create here</Text> </Text> 
      </TouchableOpacity>
    </View>   
    );  
    }  
}  


class LoginGoogle extends React.Component {  
    render() {  
        return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./logoK.png")} /> 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Phone Number."
          placeholderTextColor="#003f5c"
          onChangeText={(phone) => setPhone(phone)}
        /> 
      </View> 

      <TouchableOpacity style={styles.send}>
        <Text style={styles.loginText}>Send Verification code</Text> 
      </TouchableOpacity>



      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter verification code"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      <TouchableOpacity style={styles.loginGBtn}>
        <Text style={styles.loginText}>Sign In</Text> 
      </TouchableOpacity> 

      <TouchableOpacity style={styles.loginPBtn}>
         <Text style={styles.loginText}>Sign In with Google account</Text> 
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.createUse}>Don't have account? Create here<Text style={styles.last}>Create here</Text></Text> 
      </TouchableOpacity>
    </View> 
  );  
    }  
} 
  
const AppNavigator = createStackNavigator(  
    {  
        Home: HomeScreen,  
        LoginPhone: ProfileScreen ,
        LoginGoogle : LoginGoogle 
    },  
    {  
        initialRouteName: "Home"  
    }  
);  
  
const AppContainer = createAppContainer(AppNavigator);  
export default class App extends React.Component {  
    render() {  
        return <AppContainer />;  
    }  
}  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  send:{
    width: "70%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    marginTop:-30
  },
  image: {
    marginBottom: -70,
    marginTop:-70
  },
  inputView: {
    backgroundColor: "#ccffeb",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  loginGBtn: {
    width: "70%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: -5,
    backgroundColor: "#00ff99",
  },
  loginPBtn:{
    width: "70%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "#00ff99",
  },
  createUse:{
    marginTop:15
  },
  last:{
    color:'red',    
  },
  btnG:{
    marginBottom:200,

  }

});
